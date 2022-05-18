// to diplay and hide the menu when the icon clicked
var a;
function showmenu(){
    if(a==1){
        document.getElementById("sidemenu").style.display="flex";
        return a=0;
    }
    else{
        document.getElementById("sidemenu").style.display="none";
        return a=1;
    }
    }
    