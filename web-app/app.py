from flask import Flask, render_template, request
from keras.models import load_model
from keras.preprocessing import image
import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
import numpy as np

UPLOAD_FOLDER = os.getcwd() + "\static\img"

app = Flask(__name__)

dic = {0: 'covid', 1: 'normal', 2: 'pneunomia'}


model = load_model('model.h5')


def predict_label(path):
    i = image.load_img(path, target_size=(150, 150))
    i = image.img_to_array(i)/255.0
    i = i.reshape(1, 150, 150, 3)
    p = model.predict(i, batch_size=10)
    return p

from uuid import uuid4
def make_unique(string):
    ident = uuid4().__str__()
    return f"{ident}-{string}"
# routes


app.config['UPLOAD_FOLDER'] = UPLOAD_FOLDER


@app.route("/", methods=['GET', 'POST'])
def kuch_bhi():
    return render_template("home.html")

@app.route("/about")
def about_page():
    return render_template("about.html")

@app.route("/contact")
def contact_page():
    return render_template("contact.html")

@app.route("/info")
def info_page():
    return render_template("info.html")

@app.route("/submit", methods=['GET', 'POST'])
def get_hours():
    if request.method == 'POST':
        img = request.files['my_image']

        # img_path = "/" + img.filename
        filename = make_unique(img.filename)
        img.save(os.path.join(app.config['UPLOAD_FOLDER'], filename))
        img_path = os.path.join(app.config['UPLOAD_FOLDER'], filename)
        p = predict_label(img_path)
        p = np.asarray(p)
        index_max = np.argmax(p)
        predict = dic[index_max]

        return render_template("home.html", prediction=predict, img_path=img_path, name=filename, percentage=round(np.amax(p)*100, 2), similarity=p*100)
    return render_template("home.html")

if __name__ == '__main__':
    # app.debug = True
    app.run(debug=True)
