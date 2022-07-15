let count=0;
let count1=0;

const value = document.querySelector('.value');
const buttons = document.querySelectorAll('.btn');
const nuevo = document.querySelector('.value1');
const buttonnew =  document.querySelectorAll('.boton');



buttons.forEach(function(btn){
    btn.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('increase')){
            count++;
        }
        else if(styles.contains('decrease')){
            count--;
        }
        else{
            count = 0;
        }
        valueColor();
        value.textContent = count;
    })
})

function valueColor(){
    if(count>0){
        value.style.color = '#FFEA00';
    }
    else if(count==0){
        value.style.color = '#fff';
    }
    else{
        value.style.color = '#231f20';
    }
}
/* ----------------------------------BOTON NUEVO----------------------------------*/ 
buttonnew.forEach(function(boton){
    boton.addEventListener('click',function(e){
        const styles = e.currentTarget.classList;
        if(styles.contains('increase1')){
            count1++;
        }
        else if(styles.contains('decrease1')){
            count1--;
        }
        else{
            count1 = 0;
        }
        valueColor1();
        nuevo.textContent = count1;
    })
})

function valueColor1(){
    if(count1>0){
        nuevo.style.color = '#008000';
    }
    else if(count1==0){
        nuevo.style.color = '#fff';
    }
    else{
        nuevo.style.color = '#231f20';
    }
}