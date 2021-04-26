
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

let btnAdd = document.querySelector("#add");
let btnSubtract = document.querySelector("#subtract");
let input = document.querySelector("input");

btnAdd.addEventListener("click", ()=>{
  input.value = parseInt(input.value) +1;
});

btnSubtract.addEventListener("click", ()=>{
  input.value = parseInt(input.value) -1;
});
