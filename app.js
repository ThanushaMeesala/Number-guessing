const guess=document.querySelector("#guess");
const submit=document.querySelector("#submit");
const stmt=document.querySelector("#dis");

let len=[1,2,3,4,5];
const compgenguess=()=>{
    const comp=Math.floor(Math.random()*100);
    return comp;
}
let compguess=compgenguess();
console.log(compguess);
submit.addEventListener("click",()=>{
    let userguess=guess.value;
    let attempt=0;
    for(let i in len){
        if(userguess ==""){
            stmt.innerText="please enter the number";
        }  
    if(userguess==compguess){
        stmt.innerText=`Congratulations!🎉
        u guessed it correct`;
        stmt.style.color="green";
        guess.disabled=true;
        break;
    }
    else if(userguess < compguess){
        stmt.innerText=`Try the higher number`;
        stmt.style.color="red";
    }
    else{
        stmt.innerText=`Try the lower number`;
        stmt.style.color="red";
    }
}

});