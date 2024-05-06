const notesContainner=document.querySelector(".notes-container");
const createBtn=document.querySelector(".btn");
let Notes=document.querySelectorAll(".input-box");



storageContainer=()=>{

localStorage.setItem("Notes",notesContainner.innerHTML);



}
 ShowStorageData=()=>{
    notesContainner.innerHTML=localStorage.getItem("Notes");
 }
 ShowStorageData();

 createBtn.addEventListener("click",()=>{

let inputBox=document.createElement("p");
let img=document.createElement("img");

inputBox.className="input-box"
inputBox.setAttribute("contenteditable","true")
img.src="./images/delete.png"
notesContainner.appendChild(inputBox).appendChild(img);

 })
 notesContainner.addEventListener("click",(e)=>{


if(e.target.tagName ==="IMG"){

e.target.parentElement.remove();
storageContainer();

}
else if(e.target.tagName==='P'){
    Notes=document.querySelectorAll(".input-box");
    Notes.forEach(nt=>{

nt.onKeyup =()=>{

    storageContainer();

}


    })




}



 })