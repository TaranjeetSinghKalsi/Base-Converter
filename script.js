var flag = true;
function calculate() {
    document.getElementById("number").style.backgroundColor = '#ffffff';
    flag = true;
    var result = document.querySelectorAll(".Result");
    var base = document.getElementById("base").value;
    var num = document.getElementById("number").value;
    document.getElementById("bin").style.display = 'block';
    document.getElementById("oct").style.display = 'block';
    document.getElementById("dec").style.display = 'block';
    document.getElementById("hex").style.display = 'block';
    document.getElementById("bin2comp").style.display = 'block';
    document.getElementById("dec2comp").style.display = 'block';

    result.forEach(BaseConverter);

    if (base === '10') {
        if (document.getElementById)
            document.getElementById("bin2").value = (num >>> 0).toString(2);
        document.getElementById("dec2comp").style.display = 'none';
    } else if (base === '2') {
        let dec2 = (~~parseInt(num.padStart(32, num[0]), 2));
        if (dec2 === -1)
            document.getElementById("dec2").value = "N/A";
        else if (flag)
            document.getElementById("dec2").value = (dec2);
        document.getElementById("bin2comp").style.display = 'none';
    }
    else if (base === '8' || base === '16') {
        document.getElementById("dec2comp").style.display = 'none';
        document.getElementById("bin2comp").style.display = 'none';
    }

}
function BaseConverter(element) {
    let base = document.getElementById("base").value;
    let temp = document.getElementById("number").value;
    if (parseInt(temp, base).toString(base) != temp) {
        flag = false;
        document.getElementById("number").style.backgroundColor = '#f0dcdc';
        return;
    }
    element.value = parseInt(temp, base).toString(element.id);
    document.getElementById(base).parentElement.style.display = 'none';
}
function reset() {
    document.getElementById("2").value = '';
    document.getElementById("8").value = '';
    document.getElementById("10").value = '';
    document.getElementById("16").value = '';
    document.getElementById("bin2").value = '';
    document.getElementById("dec2").value = '';
    document.getElementById("number").value = '';
    document.getElementById("number").style.backgroundColor = '#ffffff';
}