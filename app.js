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
    const inputs = document.querySelectorAll(".input");

function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add("focus");
}

function blurFunc() {
  let parent = this.parentNode;
  if (this.value == "") {
    parent.classList.remove("focus");
  }
}

inputs.forEach((input) => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
});
