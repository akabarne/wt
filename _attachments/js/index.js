getDate = function(){
    let date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    return `${year}-${month}-${day}`
};

$("#addWeight").click(function(){
    $.ajax({
        url: config.srv,
        type: 'post',
        data: JSON.stringify({
            weight: $("#weight").val(), 
            date: getDate()
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        beforeSend: function (xhr) {
            xhr.setRequestHeader (
            "Authorization", "Basic " + btoa(config.usr + ":" + config.pwd));
        },
        success: function (data) {

        }
    })
    
})



var data = {"total_rows":8,"offset":0,
"rows":[
    {"id":"69d17d5cc2c877a85d0d73b2b002d444","key":"2-12-2022","value":"98","doc":{"_id":"69d17d5cc2c877a85d0d73b2b002d444","_rev":"1-28faabd3e885cf0bc368288a6794b4ad","weight":"98","date":"2-12-2022"}},
    {"id":"69d17d5cc2c877a85d0d73b2b0014e10","key":"2022-11-24","value":80,"doc":{"_id":"69d17d5cc2c877a85d0d73b2b0014e10","_rev":"1-1355454ffe426a41276d7a24a146535b","weight":80,"date":"2022-11-24"}},
    {"id":"69d17d5cc2c877a85d0d73b2b0018008","key":"2022-11-24","value":80,"doc":{"_id":"69d17d5cc2c877a85d0d73b2b0018008","_rev":"1-1355454ffe426a41276d7a24a146535b","weight":80,"date":"2022-11-24"}},
    {"id":"69d17d5cc2c877a85d0d73b2b0024f5b","key":"2022-11-24","value":"70","doc":{"_id":"69d17d5cc2c877a85d0d73b2b0024f5b","_rev":"1-171fb2cf3c6267a52390aa8123c74879","weight":"70","date":"2022-11-24"}},
    {"id":"69d17d5cc2c877a85d0d73b2b0025fba","key":"2022-11-24","value":"90","doc":{"_id":"69d17d5cc2c877a85d0d73b2b0025fba","_rev":"1-d68589c58b399be735c5124e6ed2dd61","weight":"90","date":"2022-11-24"}},
    {"id":"69d17d5cc2c877a85d0d73b2b00285f1","key":"2022-11-24","value":"111","doc":{"_id":"69d17d5cc2c877a85d0d73b2b00285f1","_rev":"1-8abac634bba28b338df762eedfc6ccdb","weight":"111","date":"2022-11-24"}},
    {"id":"69d17d5cc2c877a85d0d73b2b002b5c9","key":"2022-11-5","value":"55","doc":{"_id":"69d17d5cc2c877a85d0d73b2b002b5c9","_rev":"1-dcc4eaa7fceb3ebab56ec28f67d25159","weight":"55","date":"2022-11-5"}},
    {"id":"69d17d5cc2c877a85d0d73b2b002eb89","key":"3-12-2022","value":"90","doc":{"_id":"69d17d5cc2c877a85d0d73b2b002eb89","_rev":"1-a851c76404c2722654c6c7f00d88404e","weight":"90","date":"3-12-2022"}}
    ]}

