$(function(){ 
$.ajax({
    url:'http://127.0.0.1:8080/user/getSession',
    type:'get',
    success:function(result){
        console.log(result)
    }
})
$.ajax({
    url:"header.html",
    type:"get",
    success:function(result){
      $(result).replaceAll("#header");
      $(`<link rel="stylesheet" href="css/header_comm.css"/>`).appendTo("head");
    }
})
//控制头部的颜色变化停留
$("#header-site").mouseover(function(){
    $(this).addClass("active");
    $(".navbar-list a").css("color","#272727");
    $(".navbar-logo").addClass("active");
    $(".search").addClass("active");
    $(".user").addClass("active");
});
//控制头部的颜色变化移出
$("#header-site").mouseleave(function(){
    $(this).removeClass("active");
    $(".navbar-list a").css("color","#fff");
    $(".navbar-logo").removeClass("active");
    $(".search").removeClass("active");
    $(".user").removeClass("active");
})
//搜索栏的响应
$(".search").click(function(){
    $(".headersearch").show();
    $(".navbar-sort").hide();
    $("#header-site").addClass("active2");
    $(".navbar-logo").addClass("active2");
    $(".search-input").css("left","150px");
})
//封装搜索栏点击隐藏事件
function hide(){
    $(".headersearch").hide();
    $(".navbar-sort").show();
    $("#header-site").removeClass("active2")
    $(".navbar-logo").removeClass("active2");
    $(".search-input").css("left","980px");
    //再次获取值解决浏览器BUG
    $(".search-input").css("left");
    }
$(".close-btn").click(function(){
    hide(); 
})
//热搜栏点击事件
// $(".search-input").click(function(){
//     setTimeout(function(){
//         $(".search-push").mouseover();
//     },1000); 
// })
$(".search-input").click(function(){
     $(".search-push").show();
 })
$(".search-box-cover").click(function(){
    $(".search-push").hide();
    hide();
})
// 第一页导航
$(".listAll-1").mouseover(function(){
    $(".nva-columns-box").show();
})
$(".listAll-1").mouseleave(function(){
    $(".nva-columns-box").hide();
})
//第二页导航
$(".listAll-2").mouseover(function(){
    $(".nva-columns-box-2").show();
})
$(".listAll-2").mouseleave(function(){
    $(".nva-columns-box-2").hide();
})
//第三页导航
$(".listAll-3").mouseover(function(){
    $(".nva-columns-box-3").show();
})
$(".listAll-3").mouseleave(function(){
    $(".nva-columns-box-3").hide();
})
//第四页导航
$(".listAll-4").mouseover(function(){
    $(".nva-columns-box-4").show();
})
$(".listAll-4").mouseleave(function(){
    $(".nva-columns-box-4").hide();
})
//第六页导航
$(".listAll-6").mouseover(function(){
    $(".nva-columns-box-6").show();
})
$(".listAll-6").mouseleave(function(){
    $(".nva-columns-box-6").hide();
})
})