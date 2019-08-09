$("#header-site").mouseover(function(){
    $(this).addClass("active");
    $(".navbar-list a").css("color","#272727");
    $(".navbar-logo").addClass("active");
    $(".search").addClass("active");
    $(".user").addClass("active");
});
$("#header-site").mouseleave(function(){
    $(this).removeClass("active");
    $(".navbar-list a").css("color","#fff");
    $(".navbar-logo").removeClass("active");
    $(".search").removeClass("active");
    $(".user").removeClass("active");
})
$(".search").click(function(){
    $(".headersearch").show();
    $(".navbar-sort").hide();
    })