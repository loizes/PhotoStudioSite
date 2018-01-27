$().ready(function(){
    
    $(".descr1").hide(0);
    $(".descr2").hide(0);
    $(".descr3").hide(0);
    $(".descr4").hide(0);
    $(".checkdescr1").hide(0);
    $(".pdescr").hide(0);
    $(".selection").change(function(){
        if($(this).val()==0){
            $(".descr1").hide(150);
            $(".descr2").hide(150);
            $(".descr3").hide(150);
            $(".descr4").hide(150);
            $(".checkdescr1").hide(150);
            $(".pdescr").hide(150);
            
        }
        else if($(this).val()==1){
            $(".descr1").show(150);
            $(".descr2").hide(150);
            $(".descr3").hide(150);
            $(".checkdescr1").show(150);
            $(".pdescr").show(150);
        }
        else if($(this).val()==2){
            $(".descr1").show(150);
            $(".descr2").show(150);
            $(".descr3").hide(150);
            $(".descr4").hide(150);
            $(".checkdescr1").show(150);
            $(".pdescr").show(150);
        }
        else if($(this).val()==3){
            $(".descr1").show(150);
            $(".descr2").hide(150);
            $(".descr3").show(150);
            $(".descr4").hide(150);
            $(".checkdescr1").show(150);
            $(".pdescr").show(150);
        }
        else if($(this).val()==4){
            $(".descr1").show(150);
            $(".descr2").hide(150);
            $(".descr3").hide(150);
            $(".descr4").show(150);
            $(".checkdescr1").show(150);
            $(".pdescr").show(150);
        }

        
    })
})