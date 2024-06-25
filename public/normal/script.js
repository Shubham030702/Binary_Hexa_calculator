let a = document.getElementsByClassName("but")
let x = document.getElementsByClassName("answer")[0]
let y = document.getElementsByClassName("record")[0]
let b;
let c;
let o;
Array.from(a).forEach(e => {
    e.addEventListener("click", () => {
        if (e.innerHTML != "=" && e.innerHTML != "CE" && e.innerHTML != "BIN" && e.innerHTML != "HEX" && e.innerHTML != "OCT") {
            if (e.innerHTML != "+" && e.innerHTML != "-" && e.innerHTML != "/" && e.innerHTML != "*" && e.innerHTML != "%" ) {
                x.innerHTML = x.innerHTML + e.innerHTML
            }
            else if (e.innerHTML == "+" || e.innerHTML == "-" || e.innerHTML == "/" || e.innerHTML == "*" || e.innerHTML == "%") {
                b = x.innerHTML;
                o = e.innerHTML;
                y.innerHTML = b;
                y.innerHTML += o;
                x.innerHTML = ""
            }
        }
        else if (e.innerHTML == "CE") {
            x.innerHTML = ""
            y.innerHTML = ""
        }
        else if (e.innerHTML == "BIN") {
            c = x.innerHTML
            console.log(c)
            y.innerHTML = c;
            let num = Number.parseInt(c);
            x.innerHTML = num.toString(2)
        }
        else if (e.innerHTML == "HEX") {
            c = x.innerHTML
            y.innerHTML = c;
            let num = Number.parseInt(c);
            x.innerHTML = num.toString(16)
        }
        else if (e.innerHTML == "OCT") {
            c = x.innerHTML
            y.innerHTML = c;
            let num = Number.parseInt(c);
            x.innerHTML = num.toString(8)
        }
        else if (e.innerHTML == "=") {
            c = x.innerHTML;
            y.innerHTML += c;
            b = Number.parseInt(b);
            c = Number.parseInt(c);
            console.log(b);
            console.log(c);
            if (o == "+") {
                x.innerHTML = b + c
            }
            else if (o == "-") {
                x.innerHTML = b - c
            }
            else if (o == "/") {
                x.innerHTML = b / c
            }
            else if (o == "*") {
                x.innerHTML = b * c
            }
        }
    })
})
//this is a function to calculate
