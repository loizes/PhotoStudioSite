$(document).ready(function(){
$(".descr1").hide(0);
$(".descr2").hide(0);
$(".descr3").hide(0);
$(".descr4").hide(0);
$(".checkdescr1").hide(0);
$(".pdescr").hide(0);
$(".descrpacket1").hide(0);
$(".descrpacket2").hide(0);
$(".descrpacket3").hide(0);
$(".descrpacket4").hide(0);
$(".checksum").hide(0);
$(".checksum1").hide(0);
$(".checksum2").hide(0);
$(".checksum3").hide(0);
$(".checksum4").hide(0);
$(".checksum5").hide(0);
$(".checksum6").hide(0);
$(".bntnext").hide(0);
$(".checksumop").hide(0);
if ($("#option11").change(function(){  //1
    $(".descr1").show(150);
    $(".descr2").hide(150);
    $(".descr3").hide(150);
    $(".checkdescr1").show(150);
    $(".pdescr").show(150);
    $(".descr4").hide(150);
    $(".descrpacket1").hide(150);
    $(".descrpacket2").hide(150);
    $(".descrpacket3").hide(150);
    $(".descrpacket4").hide(150);
    $(".checksum").show(150);
    $(".checksum1").show(150);
    $(".checksum2").hide(0);
    $(".checksum3").hide(0);
    $(".checksum4").hide(0);
    $(".checksum5").hide(0);
    $(".checksum6").hide(0);
    $(".bntnext").show(150);
    $(".checksumop").show(150);
}));
if ($("#option21").change(function(){  //2
    $(".descr1").show(150);
    $(".descr2").show(150);
    $(".descr3").hide(150);
    $(".descr4").hide(150);
    $(".checkdescr1").show(150);
    $(".pdescr").show(150);
    $(".descrpacket1").hide(150);
    $(".descrpacket2").hide(150);
    $(".descrpacket3").hide(150);
    $(".descrpacket4").hide(150);
    $(".checksum").hide(0);
    $(".checksum1").hide(0);
    $(".checksum2").hide(0);
    $(".checksum3").hide(0);
    $(".checksum4").hide(0);
    $(".checksum5").hide(0);
    $(".checksum6").hide(0);
    $(".bntnext").hide(0);
    $(".checksumop").hide(0);
}));
if ($("#option51").change(function(){  //2

    $(".checksum").show(150);
    $(".checksum1").hide(0);
    $(".checksum2").show(150);
    $(".checksum3").hide(0);
    $(".checksum4").hide(0);
    $(".checksum5").hide(0);
    $(".checksum6").hide(0);
    $(".bntnext").show(150);
    $(".checksumop").show(150);
    
}));
if ($("#option52").change(function(){  //2
    
        $(".checksum").show(150);
        $(".checksum1").hide(0);
        $(".checksum2").hide(0);
        $(".checksum3").show(150);
        $(".checksum4").hide(0);
        $(".checksum5").hide(0);
        $(".checksum6").hide(0);
        $(".bntnext").show(150);
        $(".checksumop").show(150);
    }));
if ($("#option61").change(function(){  //2
        
            $(".checksum").show(150);
            $(".checksum1").hide(0);
            $(".checksum2").hide(0);
            $(".checksum3").hide(0);
            $(".checksum4").show(150);
            $(".checksum5").hide(0);
            $(".checksum6").hide(0);
            $(".bntnext").show(150);
            $(".checksumop").show(150);
        }));
if ($("#option62").change(function(){  //2
            
                $(".checksum").show(150);
                $(".checksum1").hide(0);
                $(".checksum2").hide(0);
                $(".checksum3").hide(0);
                $(".checksum4").hide(0);
                $(".checksum5").show(150);
                $(".checksum6").hide(0);
                $(".bntnext").show(150);
                $(".checksumop").show(150);
            }));
if ($("#option31").change(function(){  //3
    $(".descr1").show(150);
    $(".descr2").hide(150);
    $(".descr3").show(150);
    $(".descr4").hide(150);
    $(".checkdescr1").show(150);
    $(".pdescr").show(150);
    $(".descrpacket1").hide(150);
    $(".descrpacket2").hide(150);
    $(".descrpacket3").hide(150);
    $(".descrpacket4").hide(150);
    $(".checksum").hide(0);
    $(".checksum1").hide(0);
    $(".checksum2").hide(0);
    $(".checksum3").hide(0);
    $(".checksum4").hide(0);
    $(".checksum5").hide(0);
    $(".checksum6").hide(0);
    $(".bntnext").hide(0);
    $(".checksumop").hide(0);

}));

if ($("#option41").change(function(){  //4
    $(".descr1").show(150);
    $(".descr2").hide(150);
    $(".descr3").hide(150);
    $(".descr4").show(150);
    $(".checkdescr1").show(150);
    $(".pdescr").show(150);
    $(".checksum").show(150);
    $(".checksum1").hide(0);
    $(".checksum2").hide(0);
    $(".checksum3").hide(0);
    $(".checksum4").hide(0);
    $(".checksum5").hide(0);
    $(".checksum6").show(150);
    $(".bntnext").show(150);
    $(".checksumop").show(150);
}));
if ($("#option12").change(function(){  //1
    $(".descrpacket1").show(150);
    $(".descrpacket2").hide(150);
    $(".descrpacket3").hide(150);
    $(".descrpacket4").hide(150);
}));
if ($("#option22").change(function(){  //2
    $(".descrpacket1").hide(150);
    $(".descrpacket2").show(150);
    $(".descrpacket3").hide(150);
    $(".descrpacket4").hide(150);
}));
if ($("#option32").change(function(){  //3
    $(".descrpacket1").hide(150);
    $(".descrpacket2").hide(150);
    $(".descrpacket3").show(150);
    $(".descrpacket4").hide(150);
}));
if ($("#option42").change(function(){  //4
    $(".descrpacket1").hide(150);
    $(".descrpacket2").hide(150);
    $(".descrpacket3").hide(150);
    $(".descrpacket4").show(150);
}));
$(".btnnext").onclick(function(){
    $('#bronfotoset').modal('');
})
})
