//Enviar información

function sendNumeros() {
    var table = document.getElementById("table");
    var row = table.insertRow(-1);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var numero1 =  Number(document.getElementById("numero1").value);
    var numero2 =  Number(document.getElementById("numero2").value);
    var suma = numero1+numero2;
    cell1.innerHTML = numero1;
    cell2.innerHTML = numero2;
    cell3.innerHTML = suma;
    cell4.innerHTML = Status;
}
