$(function(){
   
    $(".pro1-4-b>ul>li>a").click(function(){
        $(".pro1-4-b>ul>li>a").removeClass("active")
        $(this).addClass("active")
        var i  = $(this.parentNode).index()
        console.log(i);
        $("#pro-list>.pro3-4").removeClass("active")
        $(`#pro-list>.pro3-4:eq(${i})`).addClass("active")
    })
})