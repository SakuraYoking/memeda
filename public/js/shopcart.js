$(function(){
    $(".small-pic>li").click(function(e){
        var i = $(e.target).index();
        console.log(i)
        $(".small-pic>li").removeClass("active");
        $(`.small-pic>li:eq(${i})`).addClass("active");
        $(".middle-pic>li").removeClass("active");
        $(`.middle-pic>li:eq(${i})`).addClass("active");
    })
    setTimeout(function(){
        var h = $(".shopcart-header").offset().top;
        $(window).scroll(function(){
            var srcollTop = document.documentElement.scrollTop;
            if(srcollTop>h){
                $(".shopcart-header").css("position","fixed")
            }else{
                $(".shopcart-header").css("position","relative")
            }
        })
    },500)
})