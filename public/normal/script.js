let a=document.getElementsByClassName("but")
let x=document.getElementsByClassName("display")[0]
let op=document.getElementsByClassName("op")[0]
let b;
let c;
let o;
Array.from(a).forEach(e=>{
    e.addEventListener("click",()=>{
           if(e.innerHTML!="=" && e.innerHTML!="CE"){
            if(e.innerHTML!="+"&& e.innerHTML!="-"&& e.innerHTML!="/"&& e.innerHTML!="*"&& e.innerHTML!="%"){
                x.innerHTML=x.innerHTML+e.innerHTML
            }
            else if(e.innerHTML=="+" || e.innerHTML=="-" || e.innerHTML=="/" || e.innerHTML=="*" || e.innerHTML=="%"){
                b=x.innerHTML;
                o=e.innerHTML;
                op.innerHTML=e.innerHTML
                x.innerHTML=""
            }
        }
        else if(e.innerHTML=="CE"){
            x.innerHTML=""
            op.innerHTML=""
        }
        else if(e.innerHTML=="="){
            op.innerHTML=""
            c=x.innerHTML;
            b=Number.parseInt(b);
            c=Number.parseInt(c);
            console.log(b);
            console.log(c);
            if(o=="+"){
                x.innerHTML=b+c
            }
            else if(o=="-"){
                x.innerHTML=b-c
            }
            else if(o=="/"){
                x.innerHTML=b/c
            }
            else if(o=="*"){
                x.innerHTML=b*c
            }
        }
    })
})
//this is a function to calculate
