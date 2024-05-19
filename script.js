
document.addEventListener('DOMContentLoaded', () => {
    const data = {
        departmentDetails: [
            { "name": "SALES ", "completionPercentage": 50 },
            { "name": "MARKETING", "completionPercentage": 57 },
            { "name": "DESIGN", "completionPercentage": 83 },
            { "name": "HR", "completionPercentage": 78 },
            { "name": "LEGAL", "completionPercentage": 92 }
        ]
    };

    const tableBody = document.getElementById('department-table');
    data.departmentDetails.forEach(department => {
        const row = document.createElement('tr');
        const nameCell = document.createElement('td');
        const completionCell = document.createElement('td');

        nameCell.textContent = department.name;
        completionCell.textContent = department.completionPercentage;

        row.appendChild(nameCell);
        row.appendChild(completionCell);
        tableBody.appendChild(row);
    });

    const ctx = document.getElementById('department-chart').getContext('2d');
    let newChart=new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.departmentDetails.map(dept => dept.name),
            datasets: [{
                label: 'Completion Percentage',
                data: data.departmentDetails.map(dept => dept.completionPercentage),
                backgroundColor: ['#FFA500','#0000FF','	#008000','#FF0000','#0000FF'],
                barThickness:4,
                borderColor: 'rgba(10, 192, 192, 1)',
                
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
    function resizeGraph(){
        newChart.resize(600,450)
    }
    resizeGraph()
   
});