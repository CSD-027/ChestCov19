chartAjaDieCases();
async function chartAjaDieCases() {
    const data = await getData();
    const ctx = document.getElementById('chartDie').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xyear,
            datasets: [{
                label: 'Die Cases',
                data: data.ydie,
                fill: false,
                backgroundColor: [
                    'rgba(236,111,88,255)',
                ],
                borderColor: [
                    'rgba(236,111,88,255)',
                ],
                borderWidth: 1
            }]
        }
    });
}

async function getData() {

    const xyear = [];
    const ydie = [];

    const response = await fetch('https://csd027covidapis.herokuapp.com/api/indonesia/csv/harian');
    const data = await response.text();
    // console.log(data)
    const rows = data.split('\n');
    rows.forEach(elt => {
        const row = elt.split(',');
        const year = row[9].replace('T00:00:00.000Z', '');
        xyear.push(year);
        const diecases = row[3];
        ydie.push(diecases);
    });
    return {xyear, ydie};
}