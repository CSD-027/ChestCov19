provinceBarPositive()
provinceBarDie() 
provinceBarRecover()
provinceBarDirawat()

async function provinceBarPositive() {
    const data = await getData()
    const ctx = document.getElementById('chartbarprovince').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.xprovince,
            datasets: [{
              label: 'Positive Cases',
              data: data.ycases,
              fill: true,
              backgroundColor: [
                'rgba(44,52,124,255)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
              ],
              borderWidth: 1
            }]
          }
    });
}

async function provinceBarDie() {
    const data = await getData()
    const ctx = document.getElementById('chartbardie').getContext('2d');
    const myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.xprovince,
            datasets: [{
              label: 'Die Cases',
              data: data.ydie,
              fill: true,
              backgroundColor: [
                'rgba(236,111,88,255)',
              ],
              borderColor: [
                'rgb(255, 99, 132)',
              ],
              borderWidth: 1
            }]
          }
    });
}

async function provinceBarRecover() {
  const data = await getData()
  const ctx = document.getElementById('chartBarRecover').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: data.xprovince,
          datasets: [{
            label: 'Recover Cases',
            data: data.yrecover,
            fill: true,
            backgroundColor: [
              'rgba(44,52,124,255)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
            ],
            borderWidth: 1
          }]
        }
  });
}

async function provinceBarDirawat() {
  const data = await getData()
  const ctx = document.getElementById('chartBarDirawat').getContext('2d');
  const myChart = new Chart(ctx, {
      type: 'bar',
      data: {
          labels: data.xprovince,
          datasets: [{
            label: 'Treated Cases',
            data: data.ydirawat,
            fill: true,
            backgroundColor: [
              'rgba(206,181,70,255)',
            ],
            borderColor: [
              'rgb(255, 99, 132)',
            ],
            borderWidth: 1
          }]
        }
  });
}

async function getData() {

    const xprovince = [];
    const ycases = [];
    const ydirawat = [];
    const yrecover = [];
    const ydie = [];

    const response = await fetch('https://csd027covidapis.herokuapp.com/api/indonesia/csv/provinsi');
    const data = await response.text();
    const rows = data.split('\n');
    rows.forEach(elt => {
        const row = elt.split(',');
        const province = row[0];
        xprovince.push(province);
        const cases = row[1];
        ycases.push(cases);
        const dirawat = row[2];
        ydirawat.push(dirawat);
        const recover = row[3];
        yrecover.push(recover);
        const die = row[4];
        ydie.push(die);

        console.log(xprovince, ycases)
    });
    return {
        xprovince,
        ycases,
        ydirawat,
        yrecover,
        ydie
    };
}