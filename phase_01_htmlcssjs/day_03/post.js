var btn1=document.getElementById("like")
var btn2=document.getElementById("dislike")
btn1.addEventListener("click",handleLike)
btn2.addEventListener("click",handleDislike)
var count1=0;
var count2=0;
function handleLike(){
    count1+=1
    var likeCount=document.getElementById("likeCount")
    likeCount.innerText=count1
}
function handleDislike(){
    count2+=1
    var likeCount=document.getElementById("dislikeCount")
    likeCount.innerText=count2
}