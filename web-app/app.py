from flask import Flask, render_template, request
from keras.models import load_model
from keras.preprocessing import image
import os
from flask import Flask, flash, request, redirect, url_for
from werkzeug.utils import secure_filename
import numpy as np

sep_ = os.path.sep
UPLOAD_FOLDER = f"{os.getcwd()}{sep_}static{sep_}img"

app = Flask(__name__)

dic = {0: 'covid', 1: 'normal'}


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

@app.route("/info/virus_corona_omicron")
def news1_page():
    return render_template("news/virus_corona_omicron.html")

@app.route("/info/bos_pfizer_cemas_omicron")
def news2_page():
    return render_template("news/bos_pfizer_cemas_omicron.html")

@app.route("/info/100_juta_rakyat_telah_divaksin")
def news3_page():
    return render_template("news/100_juta_rakyat_telah_divaksin.html")

@app.route("/info/kemenkes_bantah_varian_omicron")
def news4_page():
    return render_template("/news/menkes_bantah_omicron.html")

@app.route("/info/pembatasan_akhir_tahun_harus")
def news5_page():
    return render_template("/news/pembatasan_mobilitas_akhir_tahun.html")

@app.route("/info/covid_dorong_digitalisasi_pendidikan")
def news6_page():
    return render_template("/news/covid_dorong_digitalisasi_pendidikan.html")

@app.route("/info")
def info_page():
    return render_template("info.html")

@app.route("/submit", methods=['GET', 'POST'])
def get_hours():
    if request.method == "POST":
        img = request.files["my_image"]

        # img_path = "/" + img.filename
        filename = make_unique(img.filename)
        img.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
        img_path = os.path.join(app.config["UPLOAD_FOLDER"], filename)
        p = predict_label(img_path)
        p = np.asarray(p)

        if p > 0.5:
            hasil = "Normal"
            close_to = 1
        else:
            hasil = "Covid-19"
            close_to = 0

        return render_template(
            "home.html",
            prediction=hasil,
            img_path=img_path,
            name=filename,
            percentage="Hasil prediksi {} mendekati nilai {} yaitu {}".format(
                p[0][0], close_to, hasil
            ),
        )
    return render_template("home.html")

if __name__ == '__main__':
    # app.debug = True
    app.run(host="0.0.0.0", port=5050, debug=True)
