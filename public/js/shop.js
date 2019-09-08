$(function(){
   $.ajax({
       url:"http://127.0.0.1:8080/product/list",
       type:"get",
       dataType:"json",
   }).then(result=>{
       var list=result.data;
       var L=list.length;
       console.log(L);
       console.log(list);
       var x=$(".pro3-4.active");
       var tit="";
       var y=$("#pro-list>div:eq(1)");
       console.log(y);
       var tit1="";
       var w=$("#pro-list>div:eq(2)");
       var tit2="";
       var z=$("#pro-list>div:eq(3)");
       var tit3="";
       if(result.code==1){
         for(var i=0;i<L;i++){
           var msg=list[i]
           console.log(msg);
           console.log(msg.lid)          
           console.log(x);        
           console.log(msg)
           if(msg.lid==1){
               tit+=`<div class="pro-pic">
               <div class="ppb">
                   <a href=""><div class="ppb-t-1"><img src="http://127.0.0.1:8080${msg.img}" alt=""></div></a>
                   <div class="ppb-b">
                       <h3>${msg.title}</h3>
                       <p>${msg.subtitle}</p>
                       <a class="buy-btn" href="" data-id=${msg.uid}>立即购买</a>
                       <a class="more-btn" href="" data-id=${msg.uid}>了解更多</a>
                   </div>
               </div>
           </div>`
           }else if(msg.lid==2){
                tit1+=`<div class="pro-pic">
                <div class="ppb">
                    <a href=""><div class="ppb-t-1"><img src="http://127.0.0.1:8080${msg.img}" alt=""></div></a>
                    <div class="ppb-b">
                        <h3>${msg.title}</h3>
                        <p>${msg.subtitle}</p>
                        <a class="buy-btn" href="" data-id=${msg.uid}>立即购买</a>
                        <a class="more-btn" href="" data-id=${msg.uid}>了解更多</a>
                    </div>
                </div>
            </div>`
            }else if(msg.lid==3){
                tit2+=`<div class="pro-pic">
                <div class="ppb">
                    <a href=""><div class="ppb-t-1"><img src="http://127.0.0.1:8080${msg.img}" alt=""></div></a>
                    <div class="ppb-b">
                        <h3>${msg.title}</h3>
                        <p>${msg.subtitle}</p>
                        <a class="buy-btn" href="" data-id=${msg.uid}>立即购买</a>
                        <a class="more-btn" href="" data-id=${msg.uid}>了解更多</a>
                    </div>
                </div>
            </div>` 
            }else{
                tit3+=`<div class="pro-pic">
                <div class="ppb">
                    <a href=""><div class="ppb-t-1"><img src="http://127.0.0.1:8080${msg.img}" alt=""></div></a>
                    <div class="ppb-b">
                        <h3>${msg.title}</h3>
                        <p>${msg.subtitle}</p>
                        <a class="buy-btn" href="" data-id=${msg.uid}>立即购买</a>
                        <a class="more-btn" href="" data-id=${msg.uid}>了解更多</a>
                    </div>
                </div>
            </div>`  
            }
           x.html(tit);
           y.html(tit1);
           w.html(tit2);
           z.html(tit3);
         }
       
       }
   })
    $(".pro1-4-b>ul>li>a").click(function(){
        $(".pro1-4-b>ul>li>a").removeClass("active")
        $(this).addClass("active")
        var i  = $(this.parentNode).index()
        console.log(i);
        $("#pro-list>.pro3-4").removeClass("active")
        $(`#pro-list>.pro3-4:eq(${i})`).addClass("active")
    })
})