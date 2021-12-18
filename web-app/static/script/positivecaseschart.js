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
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1
            }]
        }
    });
}

async function getData() {

    const xyear = [];
    const ypositive = [];

    const response = await fetch('http://csd027covidapis.herokuapp.com/api/indonesia/csv/harian');
    const data = await response.text();
    // console.log(data)
    const rows = data.split('\n');
    rows.forEach(elt => {
        const row = elt.split(',');
        const year = row[9].replace('T00:00:00.000Z', '');
        xyear.push(year);
        const positive = row[0];
        ypositive.push(positive);
        console.log(year, positive)
    });
    return {xyear, ypositive};
}