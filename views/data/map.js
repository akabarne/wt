function (doc) {
    
    var v = doc.date.split("-")
    var y = v[0]
    var d = v[2]
    if (d.length==1){
        d = "0" + d
    }
    var m = v[1]
    if (m.length==1){
        m = "0" + m
    }
    emit(y + "-" + m + "-" + d, doc.weight);

}
