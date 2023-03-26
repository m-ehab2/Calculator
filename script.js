let screen=document.getElementById("Screen");
function append(n){
    if(screen.innerHTML.length>12){
        return 0;
    }
    if(screen.innerHTML==="0"){
        screen.innerHTML=`${n}`;
    }
    else{
        screen.innerHTML=screen.innerHTML+`${n}`;
    }
}
function op(m){
    if (m===`bcksp`) {
        if (screen.innerHTML.length>1) {
            let s=screen.innerHTML.slice(0,screen.innerHTML.length-1)
            screen.innerHTML=s; 
        }
        else{
            screen.innerHTML=`0`;
        }
    }
    
}