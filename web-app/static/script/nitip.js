


 const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: [
            'Positive Cases',
            'Recover Cases',
            'Die Cases'
        ],
        datasets: [{
                label: 'Positive Cases',
                data: data.ypositive,
                fill: false,
                backgroundColor: [
                    'rgba(44,52,124,255)',
                ],
                borderColor: [
                    'rgba(44,52,124,255)',
                ],
                borderWidth: 1
            },
            {
                labels: data.xyear,
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
            },
            {
                labels: data.xyear,
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
            },
            
        ],
        type: 'line',
        data: data,
        options: {
            elements: {
                line: {
                  borderWidth: 1
                }
              }
        }
    },
    
});