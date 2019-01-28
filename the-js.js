// MUSIC PLAYER BY GLENTHEMES

$(document).ready(function(){
var BXH = $(".glen-music-container").outerHeight();

$(".glen-music-container").css("margin-bottom", -BXH);

$("#glenplayer03").mouseenter(function(){
    $(".glen-music-container").animate({marginBottom:"0px"},700,'easeOutCubic');
}).mouseleave(function(){
    $(".glen-music-container").animate({marginBottom:-BXH},1000);
});

});// BXH end

$(document).ready(function(){
$(".playy1, .playy2, .playy3, .playy4, .playy5, .playy6, .playy7, .playy8, .playy9, .playy10, .playy11, .playy12, .playy13, .playy14, .playy15, .playy16, .playy17, .playy18, .playy19, .playy20, .playy21, .playy22, .playy23, .playy24, .playy25, .playy26, .playy27, .playy28, .playy29, .playy30").css("display", "block");

$(".pausee1, .pausee2, .pausee3, .pausee4, .pausee5, .pausee6, .pausee7, .pausee8, .pausee9, .pausee10, .pausee11, .pausee12, .pausee13, .pausee14, .pausee15, .pausee16, .pausee17, .pausee18, .pausee19, .pausee20, .pausee21, .pausee22, .pausee23, .pausee24, .pausee25, .pausee26, .pausee27, .pausee28, .pausee29, .pausee30").css("display", "none");
});

/*-------AUDIO 1------*/ 
function fireAudio1() {
  var A1 = document.getElementById('audio1');
  if (A1.paused)
    A1.play();
  else
    A1.pause();
}

$(document).ready(function(){
$(".fire1").click(function() {
    $('.playy1').toggleClass('g3-before');
    $('.pausee1').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy1').removeClass('g3-before');
    $('.pausee1').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio1");
on9.onended = function() {
    $(".playy1").removeClass('g3-before');
	$(".pausee1").removeClass('g3-after');
};
});

/*-------AUDIO 2------*/ 
function fireAudio2() {
  var A2 = document.getElementById('audio2');
  if (A2.paused)
    A2.play();
  else
    A2.pause();
}

$(document).ready(function(){
$(".fire2").click(function() {
    $('.playy2').toggleClass('g3-before');
    $('.pausee2').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy2').removeClass('g3-before');
    $('.pausee2').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio2");
on9.onended = function() {
    $(".playy2").removeClass('g3-before');
	$(".pausee2").removeClass('g3-after');
};
});

/*-------AUDIO 3------*/ 
function fireAudio3() {
  var A3 = document.getElementById('audio3');
  if (A3.paused)
    A3.play();
  else
    A3.pause();
}

$(document).ready(function(){
$(".fire3").click(function() {
    $('.playy3').toggleClass('g3-before');
    $('.pausee3').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy3').removeClass('g3-before');
    $('.pausee3').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio3");
on9.onended = function() {
    $(".playy3").removeClass('g3-before');
	$(".pausee3").removeClass('g3-after');
};
});

/*-------AUDIO 4------*/ 
function fireAudio4() {
  var A4 = document.getElementById('audio4');
  if (A4.paused)
    A4.play();
  else
    A4.pause();
}

$(document).ready(function(){
$(".fire4").click(function() {
    $('.playy4').toggleClass('g3-before');
    $('.pausee4').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire5, .fire6, .fire7, .fire8, .fire9, .fire10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy4').removeClass('g3-before');
    $('.pausee4').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio4");
on9.onended = function() {
    $(".playy4").removeClass('g3-before');
	$(".pausee4").removeClass('g3-after');
};
});

/*-------AUDIO 5------*/ 
function fireAudio5() {
  var A5 = document.getElementById('audio5');
  if (A5.paused)
    A5.play();
  else
    A5.pause();
}

$(document).ready(function(){
$(".fire5").click(function() {
    $('.playy5').toggleClass('g3-before');
    $('.pausee5').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire6, .fire7, .fire8, .fire9, .fire10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy5').removeClass('g3-before');
    $('.pausee5').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio5");
on9.onended = function() {
    $(".playy5").removeClass('g3-before');
	$(".pausee5").removeClass('g3-after');
};
});

/*-------AUDIO 6------*/ 
function fireAudio6() {
  var A6 = document.getElementById('audio6');
  if (A6.paused)
    A6.play();
  else
    A6.pause();
}

$(document).ready(function(){
$(".fire6").click(function() {
    $('.playy6').toggleClass('g3-before');
    $('.pausee6').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire7, .fire8, .fire9, .fire10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy6').removeClass('g3-before');
    $('.pausee6').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio6");
on9.onended = function() {
    $(".playy6").removeClass('g3-before');
	$(".pausee6").removeClass('g3-after');
};
});

/*-------AUDIO 7------*/ 
function fireAudio7() {
  var A7 = document.getElementById('audio7');
  if (A7.paused)
    A7.play();
  else
    A7.pause();
}

$(document).ready(function(){
$(".fire7").click(function() {
    $('.playy7').toggleClass('g3-before');
    $('.pausee7').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire8, .fire9, .fire10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy7').removeClass('g3-before');
    $('.pausee7').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio7");
on9.onended = function() {
    $(".playy7").removeClass('g3-before');
	$(".pausee7").removeClass('g3-after');
};
});

/*-------AUDIO 8------*/ 
function fireAudio8() {
  var A8 = document.getElementById('audio8');
  if (A8.paused)
    A8.play();
  else
    A8.pause();
}

$(document).ready(function(){
$(".fire8").click(function() {
    $('.playy8').toggleClass('g3-before');
    $('.pausee8').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire9, .fire10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy8').removeClass('g3-before');
    $('.pausee8').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio8");
on9.onended = function() {
    $(".playy8").removeClass('g3-before');
	$(".pausee8").removeClass('g3-after');
};
});

/*-------AUDIO 9------*/ 
function fireAudio9() {
  var A9 = document.getElementById('audio9');
  if (A9.paused)
    A9.play();
  else
    A9.pause();
}

$(document).ready(function(){
$(".fire9").click(function() {
    $('.playy9').toggleClass('g3-before');
    $('.pausee9').toggleClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio9");
on9.onended = function() {
    $(".playy9").removeClass('g3-before');
	$(".pausee9").removeClass('g3-after');
};
});

/*-------AUDIO 10------*/ 
function fireAudio10() {
  var A10 = document.getElementById('audio10');
  if (A10.paused)
    A10.play();
  else
    A10.pause();
}

$(document).ready(function(){
$(".fire10").click(function() {
    $('.playy10').toggleClass('g3-before');
    $('.pausee10').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy10').removeClass('g3-before');
    $('.pausee10').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio10");
on9.onended = function() {
    $(".playy10").removeClass('g3-before');
	$(".pausee10").removeClass('g3-after');
};
});

/*-------AUDIO 11------*/ 
function fireAudio11() {
  var A11 = document.getElementById('audio11');
  if (A11.paused)
    A11.play();
  else
    A11.pause();
}

$(document).ready(function(){
$(".fire11").click(function() {
    $('.playy11').toggleClass('g3-before');
    $('.pausee11').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy11').removeClass('g3-before');
    $('.pausee11').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio11");
on9.onended = function() {
    $(".playy11").removeClass('g3-before');
	$(".pausee11").removeClass('g3-after');
};
});

/*-------AUDIO 12------*/ 
function fireAudio12() {
  var A12 = document.getElementById('audio12');
  if (A12.paused)
    A12.play();
  else
    A12.pause();
}

$(document).ready(function(){
$(".fire12").click(function() {
    $('.playy12').toggleClass('g3-before');
    $('.pausee12').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy12').removeClass('g3-before');
    $('.pausee12').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio12");
on9.onended = function() {
    $(".playy12").removeClass('g3-before');
	$(".pausee12").removeClass('g3-after');
};
});

/*-------AUDIO 13------*/ 
function fireAudio13() {
  var A13 = document.getElementById('audio13');
  if (A13.paused)
    A13.play();
  else
    A13.pause();
}

$(document).ready(function(){
$(".fire13").click(function() {
    $('.playy13').toggleClass('g3-before');
    $('.pausee13').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy13').removeClass('g3-before');
    $('.pausee13').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio13");
on9.onended = function() {
    $(".playy13").removeClass('g3-before');
	$(".pausee13").removeClass('g3-after');
};
});

/*-------AUDIO 14------*/ 
function fireAudio14() {
  var A14 = document.getElementById('audio14');
  if (A14.paused)
    A14.play();
  else
    A14.pause();
}

$(document).ready(function(){
$(".fire14").click(function() {
    $('.playy14').toggleClass('g3-before');
    $('.pausee14').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy14').removeClass('g3-before');
    $('.pausee14').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio14");
on9.onended = function() {
    $(".playy14").removeClass('g3-before');
	$(".pausee14").removeClass('g3-after');
};
});

/*-------AUDIO 15------*/ 
function fireAudio15() {
  var A15 = document.getElementById('audio15');
  if (A15.paused)
    A15.play();
  else
    A15.pause();
}

$(document).ready(function(){
$(".fire15").click(function() {
    $('.playy15').toggleClass('g3-before');
    $('.pausee15').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy15').removeClass('g3-before');
    $('.pausee15').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio15");
on9.onended = function() {
    $(".playy15").removeClass('g3-before');
	$(".pausee15").removeClass('g3-after');
};
});

/*-------AUDIO 16------*/ 
function fireAudio16() {
  var A16 = document.getElementById('audio16');
  if (A16.paused)
    A16.play();
  else
    A16.pause();
}

$(document).ready(function(){
$(".fire16").click(function() {
    $('.playy16').toggleClass('g3-before');
    $('.pausee16').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy16').removeClass('g3-before');
    $('.pausee16').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio16");
on9.onended = function() {
    $(".playy16").removeClass('g3-before');
	$(".pausee16").removeClass('g3-after');
};
});

/*-------AUDIO 17------*/ 
function fireAudio17() {
  var A17 = document.getElementById('audio17');
  if (A17.paused)
    A17.play();
  else
    A17.pause();
}

$(document).ready(function(){
$(".fire17").click(function() {
    $('.playy17').toggleClass('g3-before');
    $('.pausee17').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy17').removeClass('g3-before');
    $('.pausee17').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio17");
on9.onended = function() {
    $(".playy17").removeClass('g3-before');
	$(".pausee17").removeClass('g3-after');
};
});

/*-------AUDIO 18------*/ 
function fireAudio18() {
  var A18 = document.getElementById('audio18');
  if (A18.paused)
    A18.play();
  else
    A18.pause();
}

$(document).ready(function(){
$(".fire18").click(function() {
    $('.playy18').toggleClass('g3-before');
    $('.pausee18').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy10').removeClass('g3-before');
    $('.pausee10').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio18");
on9.onended = function() {
    $(".playy18").removeClass('g3-before');
	$(".pausee18").removeClass('g3-after');
};
});

/*-------AUDIO 19------*/ 
function fireAudio19() {
  var A19 = document.getElementById('audio19');
  if (A19.paused)
    A19.play();
  else
    A19.pause();
}

$(document).ready(function(){
$(".fire19").click(function() {
    $('.playy19').toggleClass('g3-before');
    $('.pausee19').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy19').removeClass('g3-before');
    $('.pausee19').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio19");
on9.onended = function() {
    $(".playy19").removeClass('g3-before');
	$(".pausee19").removeClass('g3-after');
};
});

/*-------AUDIO 20------*/ 
function fireAudio20() {
  var A20 = document.getElementById('audio20');
  if (A20.paused)
    A20.play();
  else
    A20.pause();
}

$(document).ready(function(){
$(".fire20").click(function() {
    $('.playy20').toggleClass('g3-before');
    $('.pausee20').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy20').removeClass('g3-before');
    $('.pausee20').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio20");
on9.onended = function() {
    $(".playy20").removeClass('g3-before');
	$(".pausee20").removeClass('g3-after');
};
});

/*-------AUDIO 21------*/ 
function fireAudio21() {
  var A21 = document.getElementById('audio21');
  if (A21.paused)
    A21.play();
  else
    A21.pause();
}

$(document).ready(function(){
$(".fire21").click(function() {
    $('.playy21').toggleClass('g3-before');
    $('.pausee21').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy21').removeClass('g3-before');
    $('.pausee21').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio21");
on9.onended = function() {
    $(".playy21").removeClass('g3-before');
	$(".pausee21").removeClass('g3-after');
};
});

/*-------AUDIO 22------*/ 
function fireAudio22() {
  var A22 = document.getElementById('audio22');
  if (A22.paused)
    A22.play();
  else
    A22.pause();
}

$(document).ready(function(){
$(".fire22").click(function() {
    $('.playy22').toggleClass('g3-before');
    $('.pausee22').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy22').removeClass('g3-before');
    $('.pausee22').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio22");
on9.onended = function() {
    $(".playy22").removeClass('g3-before');
	$(".pausee22").removeClass('g3-after');
};
});

/*-------AUDIO 23------*/ 
function fireAudio23() {
  var A23 = document.getElementById('audio23');
  if (A23.paused)
    A23.play();
  else
    A23.pause();
}

$(document).ready(function(){
$(".fire23").click(function() {
    $('.playy23').toggleClass('g3-before');
    $('.pausee23').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy23').removeClass('g3-before');
    $('.pausee23').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio23");
on9.onended = function() {
    $(".playy23").removeClass('g3-before');
	$(".pausee23").removeClass('g3-after');
};
});

/*-------AUDIO 24------*/ 
function fireAudio24() {
  var A24 = document.getElementById('audio24');
  if (A24.paused)
    A24.play();
  else
    A24.pause();
}

$(document).ready(function(){
$(".fire24").click(function() {
    $('.playy24').toggleClass('g3-before');
    $('.pausee24').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire25, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy24').removeClass('g3-before');
    $('.pausee24').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio24");
on9.onended = function() {
    $(".playy24").removeClass('g3-before');
	$(".pausee24").removeClass('g3-after');
};
});

/*-------AUDIO 25------*/ 
function fireAudio25() {
  var A25 = document.getElementById('audio25');
  if (A25.paused)
    A25.play();
  else
    A25.pause();
}

$(document).ready(function(){
$(".fire25").click(function() {
    $('.playy25').toggleClass('g3-before');
    $('.pausee25').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire26, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy25').removeClass('g3-before');
    $('.pausee25').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio25");
on9.onended = function() {
    $(".playy25").removeClass('g3-before');
	$(".pausee25").removeClass('g3-after');
};
});

/*-------AUDIO 26------*/ 
function fireAudio26() {
  var A26 = document.getElementById('audio26');
  if (A26.paused)
    A26.play();
  else
    A26.pause();
}

$(document).ready(function(){
$(".fire26").click(function() {
    $('.playy26').toggleClass('g3-before');
    $('.pausee26').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire27, .fire28, .fire29, .fire30").click(function() {
    $('.playy26').removeClass('g3-before');
    $('.pausee26').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio26");
on9.onended = function() {
    $(".playy26").removeClass('g3-before');
	$(".pausee26").removeClass('g3-after');
};
});

/*-------AUDIO 27------*/ 
function fireAudio27() {
  var A27 = document.getElementById('audio27');
  if (A27.paused)
    A27.play();
  else
    A27.pause();
}

$(document).ready(function(){
$(".fire27").click(function() {
    $('.playy27').toggleClass('g3-before');
    $('.pausee27').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire28, .fire29, .fire30").click(function() {
    $('.playy27').removeClass('g3-before');
    $('.pausee27').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio27");
on9.onended = function() {
    $(".playy27").removeClass('g3-before');
	$(".pausee27").removeClass('g3-after');
};
});

/*-------AUDIO 28------*/ 
function fireAudio28() {
  var A28 = document.getElementById('audio28');
  if (A28.paused)
    A28.play();
  else
    A28.pause();
}

$(document).ready(function(){
$(".fire28").click(function() {
    $('.playy28').toggleClass('g3-before');
    $('.pausee28').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire29, .fire30").click(function() {
    $('.playy28').removeClass('g3-before');
    $('.pausee28').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio28");
on9.onended = function() {
    $(".playy28").removeClass('g3-before');
	$(".pausee28").removeClass('g3-after');
};
});

/*-------AUDIO 29------*/ 
function fireAudio29() {
  var A29 = document.getElementById('audio29');
  if (A29.paused)
    A29.play();
  else
    A29.pause();
}

$(document).ready(function(){
$(".fire29").click(function() {
    $('.playy29').toggleClass('g3-before');
    $('.pausee29').toggleClass('g3-after');
});
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire30").click(function() {
    $('.playy29').removeClass('g3-before');
    $('.pausee29').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio29");
on9.onended = function() {
    $(".playy29").removeClass('g3-before');
	$(".pausee29").removeClass('g3-after');
};
});

$(document).ready(function(){
$(".fire1, .fire2, .fire3, .fire4, .fire5, .fire6, .fire7, .fire8, .fire9, .fire 10, .fire11, .fire12, .fire13, .fire14, .fire15, .fire16, .fire17, .fire18, .fire19, .fire20, .fire21, .fire22, .fire23, .fire24, .fire25, .fire26, .fire27, .fire28, .fire29").click(function() {
    $('.playy30').removeClass('g3-before');
    $('.pausee30').removeClass('g3-after');
});
});

$(document).ready(function(){
var on9 = document.getElementById("audio30");
on9.onended = function() {
    $(".playy30").removeClass('g3-before');
	$(".pausee30").removeClass('g3-after');
};
});

/*-------AUDIO 30------*/ 
function fireAudio30() {
  var A30 = document.getElementById('audio30');
  if (A30.paused)
    A30.play();
  else
    A30.pause();
}

$(document).ready(function(){
$(".fire30").click(function() {
    $('.playy30').toggleClass('g3-before');
    $('.pausee30').toggleClass('g3-after');
});
});

/*
 * Begin jQuery Easing
 *
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright ÃƒÆ’Ã¢â‚¬Å¡Ãƒâ€šÃ‚Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration

jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
    easeOutCubic: function (x, t, b, c, d) {
        return c*((t=t/d-1)*t*t + 1) + b;
    },
});
