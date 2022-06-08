console.log("welcome to calculator");
document.querySelector('input').value=0
let str="";
let allButtons=document.querySelectorAll('.button');
console.log(allButtons)
console.log(Array.from(allButtons))
Array.from(allButtons).forEach((button)=>{
    button.addEventListener("click",(e)=>{
        // str+=e.target.textContent;
        if(e.target.textContent=='='){
          str=eval(str)
          document.querySelector('input').value=str
        }
        else if(e.target.textContent=='√'){
            if(str<0){
                document.querySelector('input').value='ERROR'
            }else{
                str=Math.sqrt(eval(str))
                document.querySelector('input').value=str
            }
          }
        else if(e.target.textContent=='C'){
        str=""
        document.querySelector('input').value=0
        }
        else if(e.target.textContent=='%'){
        str=eval(str)/100;
        document.querySelector('input').value=str
        }
        else if(e.target.textContent=='!'){
        str=eval(str);
        str=factorial(str)
        document.querySelector('input').value=str  
        }
        else{
        str+=e.target.textContent;
        document.querySelector('input').value=str
        }
    })
})

function factorial(n){
    let res = 1;
    if (n == 0 || n == 1){
      return res;
    }else{
      for(var i = n; i >= 1; i--){
        res = res * i;
      }
      return res;
    }  
  }



