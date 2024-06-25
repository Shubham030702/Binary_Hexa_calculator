let x = document.getElementsByClassName("answer")[0]
let y = document.getElementsByClassName("record")[0]
let but = document.getElementsByClassName("but")

Array.from(but).forEach((e) => {
    ihtml = "";
    e.addEventListener("click", () => {
        if (e.innerHTML == "Clear") {
            x.innerHTML = "";
            y.innerHTML = "";
            ihtml = "";
        }
        else if (e.innerHTML == 1 || e.innerHTML == 0 ) {
            ihtml += e.innerHTML
            y.innerHTML = ihtml
        }
        else if (e.innerHTML == "DEC") {
            x.innerHTML = "";
            let num=parseInt(y.innerHTML,2);
            x.innerHTML=num.toString();
        }
        else if (e.innerHTML == "OCT") {
            x.innerHTML = "";
            let num=parseInt(y.innerHTML,2);
            x.innerHTML=num.toString(8);
        }
        else if (e.innerHTML == "HEX") {
            x.innerHTML = "";
            let num=parseInt(y.innerHTML,2);
            x.innerHTML=num.toString(16);
        }

    })
})

