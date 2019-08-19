$(function(){
    var len=$("#ul-idxs li").length;
    var timer=setInterval(showNext,4000)
    function showNext(index){
        for(var i=0;i<len;i++){
            var nextIndex;
            if(index==1){
                if(i==len-1){
                    nextIndex=0;
                }else{
                    nextIndex=i+1;
                }
            }else{
                if(i==0){
                    nextIndex=len-1;
                }else{
                    nextIndex=i-1;
                }
            }
            if($(`#ul-idxs li:eq(${i})`).hasClass("active")){
                $(`#ul-idxs li:eq(${i})`).removeClass("active");
                $(`#ul-idxs li:eq(${nextIndex})`).addClass("active");
                $(`#text-box li:eq(${i})`).removeClass("active");
                $(`#text-box li:eq(${nextIndex})`).addClass("active");
                $(`#imgs-box li:eq(${i})`).removeClass("active");
                $(`#imgs-box li:eq(${nextIndex})`).addClass("active");
                $("#imgs-box img").css("background-position-y","150px")
                $("#imgs-box img").animate({
                    "background-position-y":"0px"
                });
                break;
            }
        }
    }
    function moveTo(index){
        for(var i=0;i<len;i++){
            if($(`#ul-idxs li:eq(${i})`).hasClass("active")){
                $(`#ul-idxs li:eq(${i})`).removeClass("active");
                $(`#text-box li:eq(${i})`).removeClass("active");
                $(`#imgs-box li:eq(${i})`).removeClass("active");
                break;
            }
        }
        $(`#ul-idxs li:eq(${index})`).addClass("active");
        $(`#text-box li:eq(${index})`).addClass("active");
        $(`#imgs-box li:eq(${index})`).addClass("active");
        $("#imgs-box img").css("background-position-y","150px")
        $("#imgs-box img").animate({
            "background-position-y":"0px"
        });
    }
    $("#btn-right span").click(function(){
        clearInterval(timer);
        showNext(1);
        timer=setInterval(showNext,4000);
    });
    $("#btn-left span").click(function(){
        clearInterval(timer);
        showNext(-1);
        timer=setInterval(showNext,4000);
    });
    $("#ul-idxs").on("click","a",function(e){
        var i=$(e.target).parent().index();
        clearInterval(timer);
        moveTo(i);
        timer=setInterval(showNext,4000);
    })
})