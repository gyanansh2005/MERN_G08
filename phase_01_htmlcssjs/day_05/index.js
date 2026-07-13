var title=document.getElementById("title");
setTimeout(changeText,4000);
function changeText(){
    title.innerText="Boooooo!!!!";
}


let counter=0;
let hCount=document.getElementById("count");
setInterval(increase,1000);
function increase(){
    if(counter!=10){
    counter++;}
    else{
        counter=0;
    }
    hCount.innerText=counter
}