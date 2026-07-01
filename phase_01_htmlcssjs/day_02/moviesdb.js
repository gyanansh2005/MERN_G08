var btn=document.getElementById("submit")
btn.addEventListener("click",handleClick)
function handleClick(){
    // alert("Button is triggered")
    var image=document.getElementById("url")
    var title=document.getElementById("title")
    var rating=document.getElementById("rating")

    var inputImage=image.value
    var inputTitle=title.value
    var inputRating=rating.value
    

    var movieDiv=document.getElementById("movieCards")
    movieDiv.innerHTML+=`
                <div class="card">
                <img src="${inputImage}" alt="">
                <p>Movie : ${inputTitle}</p>
                <h3>Rating: ${inputRating}</h3>
             </div>
             `
    image.value=""
    title.value=""
    rating.value=""

}