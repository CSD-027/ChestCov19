# Dicoding X Kampus Merdeka Final Capstone Project: Website Pendeteksi Covid-19 berdasarkan Chest X-Ray (Web ChestCov)


CSD-027 Team Member: <br />
M014V6051 - Karlina Surya Witanto <br />
M161R7120 - Dicky Arya Pratama <br />


### Overview <br />
Web ChestCov-19 merupakan aplikasi berbasis Website yang digunakan untuk mendeteksi kondisi Chest X-Ray terinfeksi oleh virus Covid atau dalam keadaan normal. Website ini berguna sebagai pendukung keputusan dokter dalam mendiagnosis kondisi paru-paru pasien, apakah kondisi paru-paru pasien dalam keadaan normal atau terinfeksi Covid. Sasaran pengguna dari website ini merupakan para tenaga medis yang sedang berjuang untuk mengatasi maraknya virus Covid di Indonesia, harapannya dengan adanya website ini dapat mempermudah tenaga medis untuk melakukan diagnosa dan dapat membantu memutus rantai penyebaran Covid lebih cepat.

Model machine learning yang kami bangun menggunakan algoritma deep learning yaitu Convolutional Neural Network (CNN) yang mendukung data image, CNN mampu memberikan hasil klasifikasi yang baik dengan nilai validation accuracy sebesar **0.9273** dengan nilai loss sebesar **0.1728**. Model tersebut kami deploy ke dalam Framework Flask dengan output website.


### Project Documentation <br />
* Download dataset yang akan digunakan, serta menyeleksi data yang akan digunakan
* Pra-pemrosesan data gambar dengan Google Colab
* Split dataset ke data latih dan data validasi
* Buil model CNN
* Simpan model *machine learning* ke dalam format file *.h5
* Deploy model *machine learning* ke Framework Flask & Build Website


### How to Use this Application? <br />
* Kunjungi situs https://chestcov.inh.pw/
* Pilih Home
* Siapkan data *image* Chest X-Ray
* Unggah data pada kolom unggah lalu klik *submit*
* Sistem akan memberikan hasil prediksi kondisi paru-paru, dalam keadaan normal atau terinfeksi covid/tidak sehat
* Hasil prediksi dengan nilai mendekati angka 1, maka menunjukkan kondisi paru-paru pasien Normal.
  Sedangkan hasil prediksi dengan nilai mendekati angka 0, maka menunjukkan kondisi paru-paru pasien terinfeksi Covid/tidak sehat
* Menu Covid News : berisikan tentang Info Persebaran Covid di Indonesia, Info Persebaran Covid di dunia, berita Covid 
  secara *real time*, serta chart perkembangan Covid di Indonesia untuk setiap provinsi
* Menu About : berisikan deskripsi dari website ChestCov dan profile dari *developer*
* Menu Contact : *user* dapat menggunakan menu ini untuk menghubungi *developer* dengan menginputkan data pada form
* Select Language : *user* dapat memilih bahasa yang ingin digunakan pada website


### Link <br />
* Link Deploy Website : https://chestcov.inh.pw/
* Link Video Presentasi : https://www.youtube.com/watch?v=js8rnvAtTmI
* Link Video Demo Website : 


> “There is no dependence that can be sure but a dependence upon yourself.” 
> ― John Gay
