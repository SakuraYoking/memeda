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
    $(function(){
        var L=$(".ul-img li").length;
        var Time=setInterval(moveTo,3000);
        function moveTo(to){
            for(var i=0;i<L;i++){
                if($(`.ul-img li:eq(${i})`).hasClass("active")){
                    $(`.ul-img li:eq(${i})`).removeClass("active");     
                    $(`.ul-idxs li:eq(${i})`).removeClass("active");
                    break;
                }
            }if(to==-1){
                if(i==0){i=L}
                $(`.ul-img li:eq(${i-1})`).addClass("active");
                $(`.ul-idxs li:eq(${i-1})`).addClass("active");
            }else{
            if(i==L-1){i=-1}
            $(`.ul-img li:eq(${i+1})`).addClass("active");
            $(`.ul-idxs li:eq(${i+1})`).addClass("active");
        }
        }
        $(".RRR").click(function(){
            clearInterval(Time);
            moveTo(1);
            Time=setInterval(moveTo,3000)
        })
        $(".LLL").click(function(){
            clearInterval(Time);
            moveTo(-1);
            Time=setInterval(moveTo,3000)
        })
    })


    $(".btn-login").click(function(){
    var phone=$(".ajax-1>input:eq(0)").val();
    console.log(phone);
    var upwd=$(".ajax-1>input:eq(1)").val();
    console.log(upwd)
    $.ajax({
        url:'http://127.0.0.1:8080/user/login',
        type:'post',
        data:{
            phone:phone,
            upwd:upwd,
            email:phone,
        },
        dataType:"json",
     }).then(result=>{
        console.log(result);
        var msg=result.code;
        if(msg=="401"){
            $(".msg-p").css("display","block");
        }else if(msg=="402"){
            $(".msg-p1").css("display","block");
        }else if(msg=="403"){
            alert("登录失败：账号或密码错误");
        }else{
            alert("登录成功");
            window.location.href="http://127.0.0.1:8080/index.html"
        }
     })
    })

    $(".btn-submit").click(function(){
        var uname=$(".form-2>input:eq(0)").val();
        var upwd=$(".form-2>input:eq(1)").val();
        var upwd1=$(".form-2>input:eq(2)").val();
        $.ajax({
            url:'http://127.0.0.1:8080/user/reg',
            type:'post',
            data:{
                phone:uname,
                upwd:upwd,
                email:uname,
            },
            dataType:"json",
         }).then(result=>{
            console.log(result);
            var msg=result.code;
            console.log(msg)
            // if(){}
         })
    })
    