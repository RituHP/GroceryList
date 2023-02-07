function onAddToCart() {
    if (document.getElementById('itemTxt').value !== ''
        && document.getElementById('itemTxt').value !== undefined
        && document.getElementById('itemTxt').value !== null) {
        let table = document.getElementById('carTbl');
        let row = table.insertRow(-1);
        let c1 = row.insertCell(0);
        let c2 = row.insertCell(1);
        let c3 = row.insertCell(2);
        c1.innerHTML = document.getElementById('itemTxt').value;
        c2.innerHTML = document.getElementById('sel1').value;
        c3.innerHTML = '<a style="cursor:pointer"><i class="bi bi-trash" onclick="getId(this)"></i></a>'
        document.getElementById('itemTxt').value = '';
    }
}
function onRemoveAll() {
    for (var i = document.getElementById("carTbl").rows.length; i > 1; i--) {
        document.getElementById("carTbl").deleteRow(i - 1);
    }

}

function  getId(element) {
    console.log(element.parentNode.parentNode.rowIndex);
    document.getElementById("carTbl").deleteRow(element.parentNode.parentNode.parentNode.rowIndex);
}

