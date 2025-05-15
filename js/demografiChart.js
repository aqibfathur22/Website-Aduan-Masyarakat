const kelaminCtx = document.getElementById('kelaminChart');
const pendidikanCtx = document.getElementById('pendidikanChart');
const agamaCtx = document.getElementById('agamaChart');

new Chart(kelaminCtx, {
    type: 'doughnut',
    data: {
        labels: ['Laki-laki', 'Perempuan'],
        datasets: [
            {
                label: 'Jumlah',
                data: [30000, 22000],
                backgroundColor: ['rgba(54, 162, 235, 0.2)', 'rgba(227, 119, 168, 0.2)'],
                borderColor: ['rgb(54, 162, 235)', 'rgb(227, 119, 168)'],
                borderWidth: 1,
            },
        ],
    },
    Options: {},
});

new Chart(pendidikanCtx, {
    type: 'bar',
    data: {
        labels: [
            ['tidak/belum', 'sekolah'],
            ['SD/', 'sederajat'],
            ['SMP'],
            ['SMA'],
            ['D1/', 'D2'],
            ['D3/sarjana', 'muda'],
            ['S1/', 'D4'],
            ['S2'],
            ['S3'],
        ],
        datasets: [
            {
                label: 'Pendidikan',
                data: [2000, 6000, 12000, 7000, 1000, 3000, 7000, 2000, 1000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                barPercentage: 0.95,
                categoryPercentage: 0.5,
            },
        ],
    },

    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    title: function (tooltipItems) {
                        const index = tooltipItems[0].dataIndex;
                        const label = tooltipItems[0].chart.data.labels[index];

                        if (Array.isArray(label)) {
                            return label.join(' ');
                        }

                        return label;
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    minRotation: 0,
                    maxRotation: 0,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    count: 5,
                    callback: function (value) {
                        if (value >= 1000) {
                            return (value / 1000).toFixed(1).replace('.0', '') + ' K';
                        } else {
                            return value;
                        }
                    },
                },
            },
        },
    },
});

new Chart(agamaCtx, {
    type: 'bar',
    data: {
        labels: ['Islam', 'Kristen', 'Katolik', 'Hindu', 'Buddha', 'Konghucu', 'Lainnya'],
        datasets: [
            {
                label: 'Agama',
                data: [25000, 10000, 5000, 2000, 4000, 1000, 1000],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgb(54, 162, 235)',
                borderWidth: 1,
                barPercentage: 0.95,
                categoryPercentage: 0.5,
            },
        ],
    },

    options: {
        plugins: {
            tooltip: {
                callbacks: {
                    title: function (tooltipItems) {
                        const index = tooltipItems[0].dataIndex;
                        const label = tooltipItems[0].chart.data.labels[index];

                        if (Array.isArray(label)) {
                            return label.join(' ');
                        }

                        return label;
                    },
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
        scales: {
            x: {
                grid: {
                    display: false,
                },
                ticks: {
                    minRotation: 0,
                    maxRotation: 0,
                },
            },
            y: {
                beginAtZero: true,
                ticks: {
                    count: 5,
                    callback: function (value) {
                        if (value >= 1000) {
                            return (value / 1000).toFixed(1).replace('.0', '') + ' K';
                        } else {
                            return value;
                        }
                    },
                },
            },
        },
    },
});
