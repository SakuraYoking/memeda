$(function(){
    $(".child span:nth-child(2)").click(function(){
        $(".box-right").css("display","none");
        $(".box-right-1").css("display","block");
        console.log("注册")
    });
    $(".login-sp").click(function(){
        $(".box-right").css("display","block");
        $(".box-right-1").css("display","none");
        console.log("登录")
    })
})