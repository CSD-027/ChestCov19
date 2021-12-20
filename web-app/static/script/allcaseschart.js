allCasesChart();
async function allCasesChart() {
    const data = await getData();
    const ctx = document.getElementById('chartAllCases').getContext('2d');

    var dataPositive = {
        label: "Positive Cases",
        data: data.ypositive,
        fill: false,
        backgroundColor: ['rgba(44,52,124,255)'],
        borderColor: ['rgba(44,52,124,255)'],
        borderWidth: 1
    };

    var dataDie = {
        label: "Die Cases",
        data: data.ydie,
        fill: false,
        backgroundColor: ['rgba(236,111,88,255)'],
        borderColor: ['rgba(236,111,88,255)'],
        borderWidth: 1
    };

    var dataRecover = {
        label: "Recover Cases",
        data: data.yrecover,
        fill: false,
        backgroundColor: ['rgba(60,146,140,255)'],
        borderColor: ['rgba(60,146,140,255)'],
        borderWidth: 1

    };

    var yearData = {
        labels: data.xyear,
        datasets: [dataPositive, dataDie, dataRecover]
    };

    var chartOptions = {
        elements: {
            line: {
                tension: 0 // disables bezier curves
            }
        },
        legend: {
            display: true,
            position: 'top',
            labels: {
                boxWidth: 80,
                fontColor: 'black'
            }
        }  
    };

    const lineChart = new Chart(ctx, {
        type: 'line',
        data: yearData,
        options: chartOptions
    });

}

async function getData() {

    const xyear = [];
    const ypositive = [];
    const ydie = [];
    const yrecover = [];


    const response = await fetch('http://csd027covidapis.herokuapp.com/api/indonesia/csv/harian');
    const data = await response.text();
    const rows = data.split('\n');
    rows.forEach(elt => {
        const row = elt.split(',');
        const year = row[9].replace('T00:00:00.000Z', '');
        xyear.push(year);
        const positivecases = row[0];
        ypositive.push(positivecases)
        const diecases = row[3];
        ydie.push(diecases);
        const recover = row[2];
        yrecover.push(recover)
    });
    return {
        xyear,
        ypositive,
        ydie,
        yrecover
    };
}