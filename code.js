const textarea=document.getElementById("t2");
const totalcount=document.getElementById("charactercountupdate");
const leftcount=document.getElementById("characterremainingupdate");
textarea.addEventListener("keyup",()=>{
    updatecounter();
});
updatecounter();
function updatecounter(){
    totalcount.innerText=textarea.value.length;
    leftcount.innerText=textarea.getAttribute("maxLength")-textarea.value.length;
}