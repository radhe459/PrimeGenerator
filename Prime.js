
function res(str, a) {
    str = str + " " + a;
    return str
}
function Printprime() {
    let a = document.getElementById("first").value;
    let b = document.getElementById("last").value;
    a = Number.parseInt(a)
    b = Number.parseInt(b)
    let str = "";
    let count = 0;

    if (a < 0 || b < a) {
        str = "Enter valid start and end"
        resultSet(str, count)
        return
    }

    if (a < 2)
        a = 2

    for (let i = a; i <= b; i++) {
        let k = 0;
        for (let j = 2; j <= Math.floor(Math.sqrt(i)); j++) {
            if (i % j == 0) {
                k = 1;
                break;
            }
        }
        if (k == 0) {
            str = res(str, i);
            count++;
        }
    }
    resultSet(str, count)
}

function reset() {
    document.getElementById("first").value = "";
    document.getElementById("last").value = "";
    document.getElementById("result").value = "";
    document.getElementById("count").value = "";
}

function resultSet(str, count) {
    document.getElementById("result").value = str;
    document.getElementById("count").value = count;
}


