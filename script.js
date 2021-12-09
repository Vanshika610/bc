let question={
  title:'fAV COLOUR OF MINE',
  alternatives:['blue','green','yellow','black']
  correctAnswer:4
};
function showQuestion(q){
let titleDiv =document.getElementById('title');
titleDiv.textContenet = question.title;
let alts = document.querySelectorAll('.alternative');

alts.forEach(function(element,index){
  element.textContent = q.alternatives[index];
  element.addEventListener('click',function(){
    element.textContent = 'a';
  });
});
}
showQuestion(question);
let btn = document.getElementById('btn');
btn.addEventListener('click',function(){
  console.log('Clicked!');
});
