$(function(){
    var pid=location.search.split("=")[1];
    $.ajax({
        url:`http://127.0.0.1:8080/settlement/getCart?pid=${pid}`,
        type:'get',
        dataTpye:"json",
        success:function(result){
            console.log(result)
        }
    })
})