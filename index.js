$("body").append("<div id='mobyfun' style='position: fixed; top: 10%; right: 0px; height: 30%; background: lightgray; border-top-left-radius: 10px; border-bottom-left-radius: 10px;'><h1>MobyFun</h1></div>");
$("body").append("<script>function blueButton() {$('.lab-next').css('background','background:url(/MM/img/lab/MSNextBlue.png) no-repeat 0 0');}</script>");
$("#mobyfun").append("<button id='blue' onClick="blueButton()">Blue Button</button>");
