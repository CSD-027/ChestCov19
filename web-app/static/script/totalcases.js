fetch('https://csd027covidapis.herokuapp.com/api/indonesia')
    .then(res => res.json())
    .then(data => document.getElementById("totalcase").innerHTML = data.positif.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g, ","));

fetch('https://csd027covidapis.herokuapp.com/api/indonesia')
    .then(res => res.json())
    .then(data => document.getElementById("death").innerHTML = data.meninggal.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g, ","));

fetch('https://csd027covidapis.herokuapp.com/api/indonesia')
    .then(res => res.json())
    .then(data => document.getElementById("recover").innerHTML = data.sembuh.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g, ","));

fetch('https://csd027covidapis.herokuapp.com/api/indonesia')
    .then(res => res.json())
    .then(data => document.getElementById("dirawat").innerHTML = data.dirawat.toString().replace(
        /\B(?=(\d{3})+(?!\d))/g, ","));

fetch('https://csd027covidapis.herokuapp.com/api/indonesia')
    .then(res => res.json())
    .then(data => document.getElementById("lastUpdate").innerHTML = "Data Terupdate Pada Tanggal " + new Date(
        data
        .lastUpdate).toLocaleDateString(
        'pt-PT'));