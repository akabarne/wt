google.charts.load('current',{packages:['corechart']});
//google.charts.setOnLoadCallback(drawChart);

function drawChart(vector_from_database) {
    // Set Data
    console.log(vector_from_database)
    var data = google.visualization.arrayToDataTable(vector_from_database);
    
    
    // Set Options
    var options = {
      title: 'Weight-Tracking',
      hAxis: {title: 'Date'},
      vAxis: {title: 'Weight in Kg'},
      legend: 'none'
    };
    // Draw
    var chart = new google.visualization.LineChart(document.getElementById('myChart'));
    chart.draw(data, options);
    }

    $.ajax({
    url: config.srv + config.date_weight_path,
    type: 'get',
    headers: {
        'Content-Type': 'application/json'
    },
    beforeSend: function (xhr) {
        xhr.setRequestHeader (
        "Authorization", "Basic " + btoa(config.usr + ":" + config.pwd));
    },
    success: function (data) {
        drawChart(transformData(data))
    }
    })

function transformData(data){
    let vector = [['dateX', 'weightY']]
    for(i in data.rows) {
        let w = data.rows[i].value;
        let d = data.rows[i].key;
        let v = d.split("-").map(parseFloat)
        vector.push([new Date(v[0]-1,v[1], v[2]), parseFloat(w)])
    }
    return vector;
}
