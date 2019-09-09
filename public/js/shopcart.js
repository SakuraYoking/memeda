$(function(){
    var pid=location.search.split("=")[1];
    $.ajax({
        url:"http://127.0.0.1:8080/shopcart",
        type:"get",
        data:{
            pid:pid,
        },
        dataType:"json",
    }).then(result=>{
        console.log(result[0].pic1);
        var p=$(".middle-pic");
        var o=$(".small-pic");
        var i=$(".pro-list-1");
        var html=` 
                        <li class="active" style="background:url(http://127.0.0.1:8080${result[0].pic1}) no-repeat center; background-size:100% 100%"></li>
                        <li style="background:url(http://127.0.0.1:8080${result[0].pic2}) no-repeat center; background-size:100% 100%"></li>
                        <li style="background:url(http://127.0.0.1:8080${result[0].pic3}) no-repeat center; background-size:100% 100%"></li>
                        <li style="background:url(http://127.0.0.1:8080${result[0].pic4}) no-repeat center; background-size:100% 100%"></li>
                        <li style="background:url(http://127.0.0.1:8080${result[0].pic5}) no-repeat center; background-size:100% 100%"></li>
                `;
                
         var html1=` 
                        <li class="active" style="background:url(http://127.0.0.1:8080${result[0].pic1}) no-repeat center; background-size:100% 100%"></li>
                        <li style="background:url(http://127.0.0.1:8080${result[0].pic2}) no-repeat center; background-size:100% 100%"></li>
                        <li style="background:url(http://127.0.0.1:8080${result[0].pic3}) no-repeat center; background-size:100% 100%"></li>
                        <li style="background:url(http://127.0.0.1:8080${result[0].pic4}) no-repeat center; background-size:100% 100%""></li>
                        <li style="background:url(http://127.0.0.1:8080${result[0].pic5}) no-repeat center; background-size:100% 100%"></li>
                    `;
         var html2=` 
                        <h2>${result[0].title}</h2>
                        <h4>¥${result[0].price}</h4>
                        <p>邮费:免费</p>
                        <a href="">分期最低月付￥916.12起</a>
                    `;
                    console.log(html);
                    console.log(html1);
                    console.log(html2);
                    p.html(html);
                    o.html(html1);
                    i.html(html2);
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
        },500);
    })
})