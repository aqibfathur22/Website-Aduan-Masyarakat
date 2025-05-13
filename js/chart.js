const pendapatanCtx = document.getElementById('pendapatanChart');

new Chart(pendapatanCtx, {
    type: 'bar',
    data: {
        labels: ['2022', '2023', '2024', '2025'],
        datasets: [
            {
                label: 'Pendapatan',
                data: [30000000000, 40000000000, 45000000000, 52000000000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                barPercentage: 0.95,
                categoryPercentage: 0.5,
            },
            {
                label: 'Pengeluaran',
                data: [30000000000, 38000000000, 35000000000, 49000000000],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                barPercentage: 0.95,
                categoryPercentage: 0.5,
            },
        ],
    },

    options: {
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    count: 5,
                    callback: function (value) {
                        if (value >= 1000000000) {
                            return (value / 1000000000).toFixed(1).replace('.0', '') + ' M';
                        } else if (value >= 1000000) {
                            return (value / 1000000).toFixed(1).replace('.0', '') + ' jt';
                        } else {
                            return value;
                        }
                    },

                    stepSize: 15000000000,
                },
            },
        },
    },
});

const anggaranCtx = document.getElementById('anggaranChart');

new Chart(anggaranCtx, {
    type: 'bar',
    data: {
        labels: ['2022', '2023', '2024', '2025'],
        datasets: [
            {
                label: 'Pendapatan',
                data: [8000000000, 13000000000, 14000000000, 12000000000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                barPercentage: 0.95,
                categoryPercentage: 0.5,
            },
            {
                label: 'Pengeluaran',
                data: [8000000000, 12000000000, 15000000000, 12000000000],
                backgroundColor: 'rgba(255, 99, 132, 0.2)',
                borderColor: 'rgb(255, 99, 132)',
                borderWidth: 1,
                barPercentage: 0.95,
                categoryPercentage: 0.5,
            },
        ],
    },

    options: {
        scales: {
            x: {
                grid: {
                    display: false,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    count: 5,
                    callback: function (value) {
                        if (value >= 1000000000) {
                            return (value / 1000000000).toFixed(1).replace('.0', '') + ' M';
                        } else if (value >= 1000000) {
                            return (value / 1000000).toFixed(1).replace('.0', '') + ' jt';
                        } else {
                            return value;
                        }
                    },
                },
            },
        },
    },
});
