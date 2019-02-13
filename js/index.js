new Chart(document.getElementById("pie-chart"), {
    type: 'pie',
    data: {
      labels: ["Oui", "Non"],
      datasets: [{
        backgroundColor: ["#23AE89", "#E94B3B"],
        data: [5,1]
      }]
	},
	options: {
		legend: {
			display: false,
		},
		plugins: {
			labels: [ 
				{
					render: 'percentage',
					fontColor: 'white',
					fontSize: 18,
					fontStyle: 'bold',
				},
				{
					render: 'label',
					padding: '20px',
					fontSize: 14,
					position: 'outside',
					fontStyle: 'bold',
					arc: true,
				  }
			]
		}
	}
});
