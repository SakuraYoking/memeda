$(function(){
    $.ajax({
        url:'http://127.0.0.1:8080/user/getSession',
        type:'get',
        success:function(result){
            if(result.code==-1){
                alert("尚未登录")
                window.location.href="http://127.0.0.1:8080/login.html"
                return;
            }else{
                $.ajax({
                    url:'http://127.0.0.1:8080/settlement/getCart',
                    type:'get',
                    success:function(result){
                        result=result.data
                        var html=""
                        for(var i=0;i<result.length;i++){
                            html+=`
                            <div class="mycart">
                                <input class="mycart-checkbox" type="checkbox">
                                <div class="mycart-img"><a href="" style="background: url('${result[i].pic}') no-repeat center; background-size:128px;"></a></div>
                                <div class="mycart-text">
                                    <a href=""><h3>${result[i].title}</h3></a>
                                    <p>发货时间为订单付款后一个工作日</p>
                                </div>
                                <div class="mycart-price">￥${result[i].price}</div>
                                <div class="mycart-count">
                                    <button class="btn-reduce" data-id=${result[i].pid}><i>-</i></button>
                                    <input type="text" value="1" disabled>
                                    <button class="btn-add" data-id=${result[i].pid}><i>+</i>
                                    </button>
                                </div>
                                <div class="total-price">
                                    ￥${result[i].price*result[i].count}
                                </div>
                                <a href="javascript:;"><div class="mycart-delete" data-id=${result[i].pid}></div></a>
                            </div>
                            `
                        }
                        $(html).appendTo(".cart-list");
                        $(".mycart-delete").click(function(e){
                            var pid=e.target.dataset.id
                            $.ajax({
                                url:`http://127.0.0.1:8080/settlement/delete?pid=${pid}`,
                                type:'get',
                                success:function(result){
                                    if(result.code==1){
                                        alert("删除成功")
                                        window.location.reload();
                                    }
                                }
                            })
                        })
                    }
                })
            }  
        }
    })
})