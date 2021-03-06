chartAja();
async function chartAja() {
    const data = await getData();
    const ctx = document.getElementById('chartPositive').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.xyear,
            datasets: [{
                label: 'Positive Covid',
                data: data.ypositive,
                fill: false,
                backgroundColor: [
                    'rgba(44,52,124,255)',
                ],
                borderColor: [
                    'rgba(44,52,124,255)',
                ],
                borderWidth: 1
            }]
        }
    });
}

async function getData() {

    const xyear = [];
    const ypositive = [];

    const response = await fetch('https://csd027covidapis.herokuapp.com/api/indonesia/csv/harian');
    const data = await response.text();
    // console.log(data)
    const rows = data.split('\n');
    rows.forEach(elt => {
        const row = elt.split(',');
        const year = row[9].replace('T00:00:00.000Z', '');
        xyear.push(year);
        const positive = row[0];
        ypositive.push(positive);
    });
    return {xyear, ypositive};
}