function increaseLike(id){
    console.log("liking", id);
    var element=document.querySelector(id);
    console.log("element looks like this", element.innerText);
    let likeCount= Number(element.innerText);
    console.log(likeCount);
    likeCount++;
    element.innerText = likeCount;
}