const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body')
// console.log(buttons)
buttons.forEach(function(b){
  // console.log(b);
  b.addEventListener('click' , function(e){
    // console.log(e);
    console.log(e.target);
      if(e.target.id == "grey"){
        body.style.background = e.target.id
      }
      if(e.target.id == "white"){
        body.style.background = e.target.id
      }
      if(e.target.id == "blue"){
        body.style.background = e.target.id
      }
      if(e.target.id == "yellow"){
        body.style.background = e.target.id
      }
  })
})