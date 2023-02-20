var submit = document.getElementById("submit");
var input = document.getElementById("input");
var output = document.getElementById("output");
var numberOfUses = 0;

submit.addEventListener('click', function(){
  if (input.value == 230469){
    p.innerHTML = "javascript:%28async function%28%29%7Beval%28await%28await fetch%28"https%3A%2F%2Fcdn.jsdelivr.net%2Fgh%2FSpaceSaver%2FIngot-for-iBoss%40latest%2Fingot.js"%29%29.text%28%29%29%7D%29%28%29%3B";
  }
});
