let dis=document.getElementsByClassName("display")[0]
let but=document.getElementsByClassName("but")

Array.from(but).forEach((e)=>{
    ihtml="";
    e.addEventListener("click",()=>{
        if(e.innerHTML=="Clear"){
            dis.innerHTML="";
            ihtml="";
        }
        else if(e.innerHTML==0||e.innerHTML==1){
        ihtml+=e.innerHTML
        dis.innerHTML=ihtml
    }
    else if(e.innerHTML=="DEC"){
            dis.innerHTML="";
            let n=ihtml.length
            let s=0
            for(let i=0;i<n;i++){
                s+=(Number.parseInt(ihtml[n-i-1]))*(2**(i))
            }
            dis.innerHTML=s;
        }
    else if(e.innerHTML=="HEX"){
        dis.innerHTML="";
        let n=ihtml.length
        let s=0
        for(let i=0;i<n;i++){
            s+=(Number.parseInt(ihtml[n-i-1]))*(2**(i))
        }
        let a=s
        let z=""
        let k=""
        while(a){
        let r=a%16
        if(r>9){
            if(r==10) z=z+"A"
            if(r==11) z=z+"B"
            if(r==12) z=z+"C"
            if(r==13) z=z+"D"
            if(r==14) z=z+"E"
            if(r==15) z=z+"F"
        }
        else{
            z=z+r
        }
        a=a/16
        a=Number.parseInt(a)
    }   
    for(let i=z.length-1;i>=0;i--){
    k=k+z[i];
    }
    dis.innerHTML=k;
}
else if(e.innerHTML=="OCT"){
    dis.innerHTML="";
        let n=ihtml.length
        let s=0
        for(let i=0;i<n;i++){
            s+=(Number.parseInt(ihtml[n-i-1]))*(2**(i))
        }
        let a=s
        let z=""
        let k=""
        while(a){
        let r=a%8
        z=z+r
        a=a/8
        a=Number.parseInt(a)
    }   
    for(let i=z.length-1;i>=0;i--){
    k=k+z[i];
    }
    dis.innerHTML=k;
}
})
})
