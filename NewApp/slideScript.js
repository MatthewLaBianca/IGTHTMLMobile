var isOpen = false;
    function optionsButton()
{

if(!isOpen)
{
var divPosition = $("#mainBG").offset();
if(divPosition.left < 0 )
{ 
$("#mainBG").animate({
"left": 0
},1000);
 }else{
$("#mainBG").animate({
"left": +420
},1000);
};
isOpen = true;
}else{
var divPosition = $("#mainBG").offset();
if(divPosition.left < 0 )
{ 
$("#mainBG").animate({
"left": +420
},1000);
 }else{
$("#mainBG").animate({
"left": 0
},1000);
};
isOpen = false;
}
}