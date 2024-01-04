let dis = document.getElementsByClassName("display")[0]
let but = document.getElementsByClassName("but")

Array.from(but).forEach((e) => {
    ihtml = "";
    e.addEventListener("click", () => {
        if (e.innerHTML == "Clear") {
            dis.innerHTML = "";
            ihtml = "";
        }
        else if (e.innerHTML == 1 || e.innerHTML == 2 || e.innerHTML == 3 || e.innerHTML == 4 || e.innerHTML == 5 || e.innerHTML == 6 || e.innerHTML == 7 || e.innerHTML == 8 || e.innerHTML == 9 || e.innerHTML == "A" || e.innerHTML == "B" || e.innerHTML == "C" || e.innerHTML == "D" || e.innerHTML == "E" || e.innerHTML == "F") {
            ihtml += e.innerHTML
            dis.innerHTML = ihtml
        }
        else if (e.innerHTML == "DEC") {
            dis.innerHTML = "";
            let n = ihtml.length
            let s = 0
            for (let i = 0; i < n; i++) {
                let z = ihtml[n - i - 1];
                if (z == "A") z = 10;
                if (z == "B") z = 11;
                if (z == "C") z = 12;
                if (z == "D") z = 13;
                if (z == "E") z = 14;
                if (z == "F") z = 15;
                s += (Number.parseInt(z) * (16 ** (i)))
            }
            dis.innerHTML = s;
        }
        else if (e.innerHTML == "OCT") {
            dis.innerHTML = "";
            let n = ihtml.length
            let s = 0
            for (let i = 0; i < n; i++) {
                let z = ihtml[n - i - 1];
                if (z == "A") z = 10;
                if (z == "B") z = 11;
                if (z == "C") z = 12;
                if (z == "D") z = 13;
                if (z == "E") z = 14;
                if (z == "F") z = 15;
                s += (Number.parseInt(z) * (16 ** (i)))
            }
            let a = s
            let z = ""
            let k = ""
            while (a) {
                let r = a % 8
                z = z + r
                a = a / 8
                a = Number.parseInt(a)
            }
            for (let i = z.length - 1; i >= 0; i--) {
                k = k + z[i];
            }
            dis.innerHTML = k;
        }
        else if (e.innerHTML == "BIN") {
            dis.innerHTML = "";
            let n = ihtml.length
            let s = 0
            for (let i = 0; i < n; i++) {
                let z = ihtml[n - i - 1];
                if (z == "A") z = 10;
                if (z == "B") z = 11;
                if (z == "C") z = 12;
                if (z == "D") z = 13;
                if (z == "E") z = 14;
                if (z == "F") z = 15;
                s += (Number.parseInt(z) * (16 ** (i)))
            }
            let a = s
            let z = ""
            let k = ""
            while (a) {
                let r = a % 2
                z = z + r
                a = a / 2
                a = Number.parseInt(a)
            }
            for (let i = z.length - 1; i >= 0; i--) {
                k = k + z[i];
            }
            dis.innerHTML = k;
        }

    })
})

