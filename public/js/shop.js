$(function(){
    function getPro(){
        $.ajax({
            url:`http://127.0.0.1:8080/product/list`,
            type:'get',
            success:function(res){
                var data = res.data;
                if(data.code==1){
                    var list = ["<div class='active'>","<div>","<div>","<div>"];
                    for(var item of data.data){
                        list[item.lid-1] += `
                            <div class="pro3-4 active">
                                <div class="pro-pic-L">
                                    <div class="ppb">
                                        <a href=""><div class="ppb-t-1"></div></a>
                                        <div class="ppb-b">
                                            <h3>${item.title}</h3>
                                            <p>${item.subtitle}</p>
                                            <a class="buy-btn" data-id="${item.pid}" href="">立即购买</a>
                                            <a class="more-btn" data-id="${item.pid}" href="">了解更多</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `
                    }
                    var html = "";
                    for(var i of list){
                        html += i+"</div>"
                    }
                    $(html).appendTo("#pro-list")
                }
            }
        })
    }
    getPro();
    $(".pro1-4-b>ul>li>a").click(function(){
        $(".pro1-4-b>ul>li>a").removeClass("active")
        $(this).addClass("active")
        var i  = $(this.parentNode).index()
        console.log(i);
        $("#pro-list>.pro3-4").removeClass("active")
        $(`#pro-list>.pro3-4:eq(${i})`).addClass("active")
    })
})