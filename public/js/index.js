$(function(){
    $.ajax({
        url:"http://127.0.0.1:8080/index",
        type:"get",
        dataType:"json",        
    }).then(result=>{
       console.log(result);
       var L=result.length;
       var p=$("#carouse-tt");
       var y=$("#carouse-c");
       var li=$("#ul-idxs");
       console.log(p);
       console.log(L);
       var title="";
       var carouse="";
       var list="";
       for(var i=0;i<L;i++){
           title+=`<li>
          <a href="">
          <img src="http://127.0.0.1:8080${result[i].title}" alt="" class="text-img">
          </a>
           <a href="">
           <p class="words">${result[i].text}</p>
           </a>
           </li>`;
            carouse+=`<li class="img-1"><a href=""><img src="http://127.0.0.1:8080${result[i].pic}" alt="" ></a></li>`
            list+=`<li><a href="javascript:;">${result[i].list}</a></li>`;
       }
       p.html(title);
       y.html(carouse);
       li.html(list);
       $("#imgs-box img").css("top","150px")
       $("#imgs-box img").animate({
           "top":"0px"
       },500);
       $(p.children()[0]).addClass("active");
       $(y.children()[0]).addClass("active");
       $(li.children()[0]).addClass("active");

       var len=$("#ul-idxs li").length;
       var timer=setInterval(showNext,4000)
       function showNext(index){
           for(var i=0;i<len;i++){
               var nextIndex;
               if(index==-1){
                   if(i==0){
                       nextIndex=len-1;
                   }else{
                       nextIndex=i-1;
                   }
               }else{
                   if(i==len-1){
                       nextIndex=0;
                   }else{
                       nextIndex=i+1;
                   }
               }
               if($(`#ul-idxs li:eq(${i})`).hasClass("active")){
                   $(`#ul-idxs li:eq(${i})`).removeClass("active");
                   $(`#ul-idxs li:eq(${nextIndex})`).addClass("active");
                   $(`#text-box li:eq(${i})`).removeClass("active");
                   $(`#text-box li:eq(${nextIndex})`).addClass("active");
                   $(`#imgs-box li:eq(${i})`).removeClass("active");
                   $(`#imgs-box li:eq(${nextIndex})`).addClass("active");
                   $("#imgs-box img").css("top","150px")
                   $("#imgs-box img").animate({
                       "top":"0px"
                   },500);
                   break;
               }
           }
       }
       function moveTo(index){
           for(var i=0;i<len;i++){
               if($(`#ul-idxs li:eq(${i})`).hasClass("active")){
                   $(`#ul-idxs li`).removeClass("active");
                   $(`#text-box li`).removeClass("active");
                   $(`#imgs-box li`).removeClass("active");
                   break;
               }
           }
           $(`#ul-idxs li:eq(${index})`).addClass("active");
           $(`#text-box li:eq(${index})`).addClass("active");
           $(`#imgs-box li:eq(${index})`).addClass("active");
           $("#imgs-box img").css("top","150px")
           $("#imgs-box img").animate({
               "top":"0px"
           },500);
       }
       var canClick = true;
       $("#btn-right span").click(function(){
           if(canClick){
               canClick = false;
               setTimeout(function(){
                   canClick = true;
               },500)
               clearInterval(timer);
               showNext(1);
               timer=setInterval(showNext,4000);
           }
       });
       $("#btn-left span").click(function(){
           if(canClick){
               canClick = false;
               setTimeout(function(){
                   canClick = true;
               },500)
               clearInterval(timer);
               showNext(-1);
               timer=setInterval(showNext,4000);
           }
       });
       $("#ul-idxs").on("click","a",function(e){
           if(canClick){
               canClick = false;
               setTimeout(function(){
                   canClick = true;
               },500)
               var i=$(e.target).parent().index();
               clearInterval(timer);
               moveTo(i);
               timer=setInterval(showNext,4000);
           }
       })
   
   })
   
   $(function(){
        var L=$("#lun-ul li").length;
        var Time=setInterval(actionNext,3000);
        function actionNext(next){
           for(var i=0;i<L;i++){
               if($(`#lun-ul li:eq(${i})`).hasClass("active1")){
               $(`#lun-ul li:eq(${i})`).removeClass("active1")
               break;
               }
           }
           if(next==-1){
               if(i==0){i=L}
               $(`#lun-ul li:eq(${i-1})`).addClass("active1")
           }else{
               if(i==L-1){i=-1}
               $(`#lun-ul li:eq(${i+1})`).addClass("active1")
           }
       }
       $(".RRR").click(function(){
           clearInterval(Time);
           actionNext(1);
           Time=setInterval(actionNext,3000);
       })
       $(".LLL").click(function(){
           clearInterval(Time);
           actionNext(-1);
           Time=setInterval(actionNext,3000);
       })
       
    })
})