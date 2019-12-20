$.getJSON('/stu',function(d){
    alert(JSON.stringify(d));
    $('#one').text(d.name);
})