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

    //登录
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
            $(".ajax-1>input:eq(0)").click(function(){
                $(".msg-p").css("display","none");   
            })
        }else if(msg=="402"){
            $(".msg-p1").css("display","block");
            $(".ajax-1>input:eq(1)").click(function(){
                $(".msg-p1").css("display","none");   
            })
        }else if(msg=="403"){
            alert("登录失败：账号或密码错误");
        }else{
            alert("登录成功");
            window.location.href="http://127.0.0.1:8080/index.html"
        }
     })
    })




    //注册
    $(".btn-submit").click(function(){
        if(!$(".checkbox").prop("checked")){
            alert("请勾选同意协议")
            return;
        }
        var uname=$(".form-2>input:eq(0)").val();
        console.log(uname);    
        //账号格式判断
        var reg=/\d{11}/;
        var regs=/@/;
                 if(!(reg.test(uname)||regs.test(uname))){
                     $(".msg1-p3").css("display","block"); 
                     $(".form-2>input:eq(0)").click(function(){
                         $(".msg1-p3").css("display","none");                              }) 
                     return; 
                 }    
            var upwd=$(".form-2>input:eq(1)").val();
            console.log(upwd);
                 if(upwd.length<8){
                    $(".msg1-p4").css("display","block"); 
                    $(".form-2>input:eq(1)").click(function(){
                        $(".msg1-p4").css("display","none");                              }) 
                    return; 
                 }
            var upwd1=$(".form-2>input:eq(2)").val();
            console.log(upwd1);
             //两次密码是否相等
             if(upwd!==upwd1){
                $(".msg-p5").css("display","block");
                $(".form-2>input:eq(2)").click(function(){
                    $(".msg-p5").css("display","none");
                })
                return; 
            }                                      
      
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
            var msg=result.code
                 
            //账号是否为空
            if(msg==401){
                $(".msg-p3").css("display","block");
                $(".form-2>input:eq(0)").click(function(){
                    $(".msg-p3").css("display","none");                   
                 })
                 return;
            }else if(msg==403){//账号是否注册
                $(".msg2-p3").css("display","block");
                $(".form-2>input:eq(0)").click(function(){
                    $(".msg2-p3").css("display","none");                   
                })
                return; 
            }else if(msg==402){//密码是否为空
                $(".msg-p4").css("display","block");
                $(".form-2>input:eq(1)").click(function(){
                    $(".msg-p4").css("display","none");                    
                })
                return;
            }else if(msg==405){
                alert("注册失败");
            }else if(msg==404){
                alert("注册成功")
            }            
         })
    })
    