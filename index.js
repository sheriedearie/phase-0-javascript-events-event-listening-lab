// const input = document.getElementById('input').addingEventListener('click');
// input.addingEventListener('click', function() {
//   alert('I was clicked!');
// }); 
// function clickAlert() {
//     alert('I was clicked!');
//   }
  
//   input.addingEventListener('click', clickAlert); 

function addingEventListener(){
  const element = document.getElementById ('input')
  element.addEventListener('click', function(){
    alert('I was clicked!');
  })
}