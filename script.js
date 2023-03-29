let screen = document.getElementById("Screen");
let mem;
function append(n) {
    if (screen.innerHTML.length > (window.innerWidth / 51)) {
        return 0;
    }
    if (screen.innerHTML === "0") {
        screen.innerHTML = `${n}`;
    }
    else {
        if (resOnScreen) {
            screen.innerHTML = `${n}`;
            resOnScreen = false;
        }
        else {
            screen.innerHTML = screen.innerHTML + `${n}`;
        }
    }
    mem = screen.innerHTML;
}
function clearScreen() {
    screen.innerHTML = `0`;
}
let op1, op2, op3 = `0`;
let resOnScreen = false;
let startedOp=false;
function op(m) {

    if (m === `bcksp`) {
        if (screen.innerHTML.length > 1) {
            let s = screen.innerHTML.slice(0, screen.innerHTML.length - 1)
            screen.innerHTML = s;
            mem = screen.innerHTML;
        }
        else {
            screen.innerHTML = `0`;
        }
    }
    else if (m === `C`) {
        screen.innerHTML = `0`;
        mem, op1, op2, op3 = `0`;
        console.log(`cleaned memory ${mem}`);
        resOnScreen = false;
        startedOp=false;
    }
    else if (m === `=`) {
        screen.innerHTML = operate(op1, op2, parseInt(mem));
        resOnScreen = true;
        startedOp=false;

    }
    else if (m === `+`) {
        console.log(`${op1} ${op2} ${mem}`);
        if (startedOp===false) {
            
        if (resOnScreen) {
            op1 = parseInt(screen.innerHTML);
            op2 = `+`;
            screen.innerHTML = `0`;
            console.log(op1);
            resOnScreen = false;
        }
        else {
            op1 = parseInt(mem);
            op2 = `+`;
            screen.innerHTML = `0`;
            startedOp=true;
        }
        }
        else{
            screen.innerHTML = operate(op1, op2, parseInt(mem));
            op2 = `+`;
            op1=parseInt(screen.innerHTML);
            resOnScreen = true;
        }
    }
    else if (m === `-`) {
        console.log(`${op1} ${op2} ${mem}`);
        if (startedOp===false) {
            
        if (resOnScreen) {
            op1 = parseInt(screen.innerHTML);
            op2 = `-`;
            screen.innerHTML = `0`;
            console.log(op1);
            resOnScreen = false;
        }
        else {
            op1 = parseInt(mem);
            op2 = `-`;
            screen.innerHTML = `0`;
            startedOp=true;
        }
        }
        else{
            screen.innerHTML = operate(op1, op2, parseInt(mem));
            op2=`-`;
            op1=parseInt(screen.innerHTML);
            resOnScreen = true;
        }
    }
    else if (m === `*`) {
        console.log(`${op1} ${op2} ${mem}`);
        if (startedOp===false) {
            
        if (resOnScreen) {
            op1 = parseInt(screen.innerHTML);
            op2 = `*`;
            screen.innerHTML = `0`;
            console.log(op1);
            resOnScreen = false;
        }
        else {
            op1 = parseInt(mem);
            op2 = `*`;
            screen.innerHTML = `0`;
            startedOp=true;
        }
        }
        else{
            screen.innerHTML = operate(op1, op2, parseInt(mem));
            op2=`*`;
            op1=parseInt(screen.innerHTML);
            resOnScreen = true;
        }
    }
    else if (m === `/`) {
        console.log(`${op1} ${op2} ${mem}`);
        if (startedOp===false) {
            
        if (resOnScreen) {
            op1 = parseInt(screen.innerHTML);
            op2 = `/`;
            screen.innerHTML = `0`;
            console.log(op1);
            resOnScreen = false;
        }
        else {
            op1 = parseInt(mem);
            op2 = `/`;
            screen.innerHTML = `0`;
            startedOp=true;
        }
        }
        else{
            screen.innerHTML = operate(op1, op2, parseInt(mem));
            op2=`/`;
            op1=parseInt(screen.innerHTML);
            resOnScreen = true;
        }
    }
}

function add(x, y) {
    return x + y;
}

function multiply(x, y) {
    return x * y;
}

function divide(x, y) {
    return x / y;
}

function subtract(x, y) {
    return x - y;
}


function operate(x, y, z) {
    if (y === `+`) {
        return add(x, z);
    }
    else if (y === `-`) {
        return subtract(x, z);
    }
    else if (y === `*`) {
        return multiply(x, z);
    }
    else if (y === `/`) {
        return divide(x, z);
    }
}