var selectedRow = null

function onFormSubmit() {
    if (validate()) {
        var formData = readFormData();
        if (selectedRow == null)
            insertNewRecord(formData);
        else
            updateRecord(formData);
        resetForm();
    }
}

function readFormData() {
    var formData = {};
    formData["Nombre"] = document.getElementById("Nombre").value;
    formData["Cantidad"] = document.getElementById("Cantidad").value;
    formData["Precio"] = document.getElementById("Precio").value;
    //formData["city"] = document.getElementById("city").value;
    return formData;
}

function insertNewRecord(data) {
    var table = document.getElementById("listaProductos").getElementsByTagName('tbody')[0];
    var newRow = table.insertRow(table.length);
    cell1 = newRow.insertCell(0);
    cell1.innerHTML = data.Nombre;
    cell2 = newRow.insertCell(1);
    cell2.innerHTML = data.Cantidad;
    cell3 = newRow.insertCell(2);
    cell3.innerHTML = data.Precio;
    cell4 = newRow.insertCell(3);
    //cell4.innerHTML = data.city;
    //cell4 = newRow.insertCell(4);
    cell4.innerHTML = `<a style="marigin-rigt: 10px" onClick="onEdit(this)">Editar</a>
                       <a onClick="onDelete(this)">Eliminar</a>`;
}

function resetForm() {
    document.getElementById("Nombre").value = "";
    document.getElementById("Cantidad").value = "";
    document.getElementById("Precio").value = "";
    //document.getElementById("city").value = "";
    selectedRow = null;
}

function onEdit(td) {
    selectedRow = td.parentElement.parentElement;
    document.getElementById("Nombre").value = selectedRow.cells[0].innerHTML;
    document.getElementById("Cantidad").value = selectedRow.cells[1].innerHTML;
    document.getElementById("Precio").value = selectedRow.cells[2].innerHTML;
   // document.getElementById("city").value = selectedRow.cells[3].innerHTML;
}
function updateRecord(formData) {
    selectedRow.cells[0].innerHTML = formData.Nombre;
    selectedRow.cells[1].innerHTML = formData.Cantidad;
    selectedRow.cells[2].innerHTML = formData.Precio;
    //selectedRow.cells[3].innerHTML = formData.city;
}

function onDelete(td) {
    if (confirm('¿Seguro que quieres eliminar?')) {
        row = td.parentElement.parentElement;
        document.getElementById("listaProductos").deleteRow(row.rowIndex);
        resetForm();
    }
}
function validate() {
    isValid = true;
    if (document.getElementById("Nombre").value == "") {
        isValid = false;
        document.getElementById("NombreValidacionError").classList.remove("hide");
    } else {
        isValid = true;
        if (!document.getElementById("NombreValidacionError").classList.contains("hide"))
            document.getElementById("NombreValidacionError").classList.add("hide");
    }
    return isValid;
}