

//*************************/
//Secion para uso de menu//
//***********************/ 

function main(){
  var menuIconOpen = document.getElementsByClassName("open")[0];
  var menuIconClose = document.getElementsByClassName("close")[0];
  var menuItems = document.getElementsByClassName("menu");
  
  menuIconClose.style.display = "none";
  
  menuIconOpen.onclick = function() {
    this.style.display = "none";
    menuIconClose.style.display = "block";
    menuDisplay("show", menuItems);
  };
  
  menuIconClose.onclick = function() {
    this.style.display = "none";
    menuIconOpen.style.display = "block";
    menuDisplay("hide", menuItems);
  };
}

function menuDisplay(state, items){
  if(state=="show"){
    for(var i=1; i<items.length; i++){
      items[i].classList.add("show");
    }
  } else {
    for(var i=1; i<items.length; i++){
      items[i].classList.remove("show");
    }
  }
}

window.onload = function(){
  main();
}

//**************/
//Contact Area//
//************/

function getScrollHeight(elm){
  var savedValue = elm.value
  elm.value = ''
  elm._baseScrollHeight = elm.scrollHeight
  elm.value = savedValue
}

function onExpandableTextareaInput({ target:elm }){
  // make sure the input event originated from a textarea and it's desired to be auto-expandable
  if( !elm.classList.contains('autoExpand') || !elm.nodeName == 'TEXTAREA' ) return
  
  var minRows = elm.getAttribute('data-min-rows')|0, rows;
  !elm._baseScrollHeight && getScrollHeight(elm)

  elm.rows = minRows
  rows = Math.ceil((elm.scrollHeight - elm._baseScrollHeight) / 16)
  elm.rows = minRows + rows
}


// global delegated event listener
document.addEventListener('input', onExpandableTextareaInput)


