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
        else if (e.innerHTML == 1 || e.innerHTML == 2 || e.innerHTML == 3 || e.innerHTML == 4 || e.innerHTML == 5 || e.innerHTML == 6 || e.innerHTML == 7 || e.innerHTML == 8 || e.innerHTML == 9 || e.innerHTML == "A" || e.innerHTML == "B" || e.innerHTML == "C" || e.innerHTML == "D" || e.innerHTML == "E" || e.innerHTML == "F") {
            ihtml += e.innerHTML
            y.innerHTML = ihtml
        }
        else if (e.innerHTML == "DEC") {
            x.innerHTML = "";
            let num=parseInt(y.innerHTML,16);
            x.innerHTML=num.toString();
        }
        else if (e.innerHTML == "OCT") {
            x.innerHTML = "";
            let num=parseInt(y.innerHTML,16);
            x.innerHTML=num.toString(8);
        }
        else if (e.innerHTML == "BIN") {
            x.innerHTML = "";
            let num=parseInt(y.innerHTML,16);
            x.innerHTML=num.toString(2);
        }

    })
})

