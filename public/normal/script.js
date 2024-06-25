let a=document.getElementsByClassName("but")
let x=document.getElementsByClassName("answer")[0]
let y=document.getElementsByClassName("record")[0]
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
                y.innerHTML = b;
                y.innerHTML+=o;
                x.innerHTML=""
            }
        }
        else if(e.innerHTML=="CE"){
            x.innerHTML=""
            y.innerHTML=""
        }
        else if(e.innerHTML=="="){
            c=x.innerHTML;
            y.innerHTML+=c;
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
