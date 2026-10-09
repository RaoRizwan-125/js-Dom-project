// question 1
function showBox() {
    let box =document.getElementById("secretBox")
    box.className="box1";
}

function hideBox() {
    let box =document.getElementById("secretBox")
    box.className="box";
}
// question 2

function hoverImg() {
    let pic = document.getElementById("myImage")
    pic.className="img1"
}


function notHoverImg() {
    let pic = document.getElementById("myImage")
    pic.className="img"
}
// question 3

function highlight() {
    let getNotice =document.getElementById("importan1")
    let getTag=getNotice.getElementsByTagName("p")
    for (let i = 0; i < getTag.length; i++) {
        let element =getTag[i].className="notice1";
        
    }
    
}
// question 4
function rules() {
    let getRules=document.getElementById("studentRules")
    let tagName=getRules.getElementsByTagName("p")
    for (let i = 0; i <= tagName.length; i++ ) {
         tagName[i].className="rule1"; 
    }
}

function rules1() {
    let getRules=document.getElementById("courseInfo")
    let tagName=getRules.getElementsByTagName("p")
    for (let i = 0; i < tagName.length; i++ ) {
         tagName[i].className="rule1"; 
    }
}