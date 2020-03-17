$(function(){
        var dotLeft = ($(".container").width()-$(".dot").width())/2;
        //
        var dotTop = ($(".container").height()-$(".dot").height())/2;
        //
        var stard = 0;
        var radius = 288;
        var avd = 360/$(".box").length+stard;
        var ahd = avd*Math.PI/180;    
        $(".dot").css({"left":dotLeft,"top":dotTop});
        $(".box").each(function(index, element){
            $(this).css({"left":Math.sin((ahd*index))*radius+dotLeft,"top":Math.cos((ahd*index))*radius+dotTop});
        });
    })