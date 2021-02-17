function sortTable() {
  var table, rows, switching, i, x, y, shouldSwitch;
  table = document.getElementById("myTable");
  console.log(table);
  switching = true;

  while (switching) {
    switching = false;
    rows = table.rows;
    console.log(rows.length);

    for (i = 1; i < rows.length - 1; i++) {
      shouldSwitch = false;

      x = rows[i].getElementsByTagName("TD")[0];
      console.log(x);
      y = rows[i + 1].getElementsByTagName("TD")[0];
      if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) {
        shouldSwitch = true;
        break;
      }
    }
    if (shouldSwitch) {
      rows[i].parentNode.insertBefore(rows[i + 1], rows[i]);
      switching = true;
    }
  }
}
table = document.getElementById("myTable");

function myFunction() {
  var input, filter, table, tr, td, i, txtValue;
  input = document.getElementById("myInput");
  filter = input.value.toUpperCase();
  table = document.getElementById("myTable");
  tr = table.getElementsByTagName("tr");

  for (i = 1; i < tr.length; i++) {
    td = tr[i].getElementsByTagName("td")[0];
    if (td) {
      txtValue = td.textContent || td.innerText;
      if (txtValue.toUpperCase().indexOf(filter) > -1) {
        tr[i].style.display = "";
      } else {
        tr[i].style.display = "none";
      }
    }
  }
}

submit = document.getElementById("submit");
submit.addEventListener("click", () => {
  nameval = document.getElementById("name").value;
  titleval = document.getElementById("title").value;
  handleval = document.getElementById("handle").value;
  emailval = document.getElementById("email").value;
  numberval = document.getElementById("tel").value;
  console.log(nameval, titleval, handleval, emailval, numberval);
  let len = document.getElementsByTagName("tr").length;
  let tr = document.createElement("tr");
  let td2 = document.createElement("td");
  td2.innerHTML = nameval;
  let td3 = document.createElement("td");
  td3.innerHTML = titleval;
  let td4 = document.createElement("td");
  td4.innerHTML = handleval;
  let td5 = document.createElement("td");
  td5.innerHTML = numberval;
  let td6 = document.createElement("td");
  td6.innerHTML = emailval;
  let td7 = document.createElement("td");
  let btn1 = document.createElement("btn");
  btn1.setAttribute("class", "btn btn-secondary");
  btn1.innerHTML = "delete";
  btn1.setAttribute("id", "delete");
  btn1.setAttribute("onclick", "deleteRow(this)");
  td7.append(btn1);
  tr.append(td2, td3, td4, td5, td6, td7);
  let tbody = document.getElementById("tbody");
  tbody.append(tr);
});

function deleteRow(r) {
  let data = window.prompt("Do you want to delete permanently (yes/no)?");
  console.log(data);
  if (data.trim().toLowerCase() == "yes") {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("myTable").deleteRow(i);
  }
}
