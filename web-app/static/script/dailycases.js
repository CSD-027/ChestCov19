fetch('https://csd027covidapis.herokuapp.com/api/indonesia/harian')
    .then(res => res.json())
    .then(data => document.getElementById("add_case").innerHTML = "+" + data[data.length - 1].positif.toString()
        .replace(
            /\B(?=(\d{3})+(?!\d))/g, ","));

fetch('https://csd027covidapis.herokuapp.com/api/indonesia/harian')
    .then(res => res.json())
    .then(data => document.getElementById("add_death").innerHTML = "+" + data[data.length - 1].meninggal
        .toString().replace(
            /\B(?=(\d{3})+(?!\d))/g, ","));

fetch('https://csd027covidapis.herokuapp.com/api/indonesia/harian')
    .then(res => res.json())
    .then(data => document.getElementById("add_recover").innerHTML = "+" + data[data.length - 1].sembuh
        .toString()
        .replace(
            /\B(?=(\d{3})+(?!\d))/g, ","));

fetch('https://csd027covidapis.herokuapp.com/api/indonesia/harian')
    .then(res => res.json())
    .then(data => document.getElementById("add_dirawat").innerHTML = "+" + data[data.length - 1]
        .dirawat.toString()
        .replace(
            /\B(?=(\d{3})+(?!\d))/g, ","));