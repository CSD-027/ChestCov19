chartAjaRecoverCases();
async function chartAjaRecoverCases() {
    const data = await getData();
    const ctx = document.getElementById('chartRecover').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xyear,
            datasets: [{
                label: 'Recover Cases',
                data: data.yrecover,
                fill: false,
                backgroundColor: [
                    'rgba(60,146,140,255)',
                ],
                borderColor: [
                    'rgba(60,146,140,255)',
                ],
                borderWidth: 1
            }]
        }
    });
}

async function getData() {

    const xyear = [];
    const yrecover = [];

    const response = await fetch('https://csd027covidapis.herokuapp.com/api/indonesia/csv/harian');
    const data = await response.text();
    // console.log(data)
    const rows = data.split('\n');
    rows.forEach(elt => {
        const row = elt.split(',');
        const year = row[9].replace('T00:00:00.000Z', '');
        xyear.push(year);
        const recover = row[2];
        yrecover.push(recover);
    });
    return {xyear, yrecover};
}