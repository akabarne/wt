console.log("gehts???")
console.log($("#weight").val())
console.log($("#weight"))


const srv = "http://5.45.102.31:5984/wt"
//http://5.45.102.31:5984/wt/_design/wt/_view/weightdate
const date_weight_path = "/_design/wt/_view/weightdate"
console.log ($.get(srv + date_weight_path))

getDate = function(){
    const date = new Date();

let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
return `${day}-${month}-${year}`

};


$("#addWeight").click(function(){
    $.ajax({
        url: srv,
        type: 'post',
        data: JSON.stringify({
            weight: $("#weight").val(), 
            date: getDate()
        }),
        headers: {
            'Content-Type': 'application/json'
        },
        dataType: 'json',
        success: function (data) {
            console.info(data);
        }
    })
    
})

