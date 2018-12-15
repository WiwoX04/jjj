window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
//tworzymy stala
const alexa= new SpeechRecognition();

window.addEventListener('click', ()=> {
    document.body.innerHTML += "Alexa start"
   return alexa.start();
});
alexa.addEventListener('result',(event)=>{

console.dir(event);
console.log(event.results[0] [0].transcript)
odp(event.results[0] [0].transcript)

});
alexa.addEventListener('end', ()=>{
document.body.innerHTML = "Alexa end";
});

function odp(text){
    let h4 = document.querySelector('h4')
    if (text.includes('siema')){
        h4.innerHTML = "Witaj"
    }
