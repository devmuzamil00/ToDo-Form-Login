let proInpId = document.getElementById("productid");
let prodInpName = document.getElementById("productname");
let proInpQuantity = document.getElementById("quantity");
let proInpPrice = document.getElementById("price");
let listContainer = document.getElementsByClassName("list-container");
let myTable = document.getElementById("myTable");
let tbody = document.querySelector("tbody");
let data = [];

function addproduct() {
  if (
    proInpId.value === "" ||
    prodInpName.value === "" ||
    proInpQuantity.value === "" ||
    proInpPrice.value === ""
  ) {
    alert("required field are missing");
  } else {
    let newRow = myTable.insertRow(myTable.length);
    console.log("newrow", newRow);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);

    cell1.innerHTML = proInpId;
    // console.log("cell1", cell1);

    cell2.innerHTML = prodInpName;
    // console.log("cell2", cell2);
    cell3.innerHTML = proInpQuantity;
    // console.log("cell3", cell3);
    cell4.innerHTML = proInpPrice;
    // console.log("cell4", cell4);

    cell5.innerHTML = `<button class="editBtn" onclick="Edit()">Update</button><button class="deletBtn" onclick="onDelete()">Delete</button>`;
    
    // console.log("cell5", cell5);
    selectedRowToInp();  
}
  

  //   data.push({
  //     proInpId: proInpId.value,
  //     prodInpName: prodInpName.value,
  //     proInpQuantity: proInpQuantity.value,
  //     proInpPrice: proInpPrice.value,
  //   });
  proInpId.value = "";
  prodInpName.value = "";
  proInpQuantity.value = "";
  proInpPrice.value = "";
}

function selectedRowToInp() {
  for (let i = 1; i < myTable.rows.length; i++) {
    myTable.rows[i].onclick = function () {
      myTable = this.rowIndex;
      //   console.log(myTable);
      proInpId.value = this.cells[0].innerHTML;
      prodInpName.value = this.cells[1].innerHTML;
      proInpQuantity.value = this.cells[2].innerHTML;
      proInpPrice.value = this.cells[3].innerHTML;
    };
  }
}
selectedRowToInp();

//Update
function Edit() {
  console.log("edit");
  // Get the row that the clicked delete button belongs to

  // this.cells[0].innerHTML = proInpId.value;
  // this.cells[1].innerHTML = prodInpName.value;
  // this.cells[2].innerHTML = proInpQuantity.value;
  // this.cells[3].innerHTML = proInpPrice.value;
  //   myTable.rows[myTable].cells[1].innerHTML = prodInpName;
  //   myTable.rows[myTable].cells[2].innerHTML = proInpQuantity;
  //   myTable.rows[myTable].cells[3].innerHTML = proInpPrice;

  //   console.log("proInpId is: ", proInpId);
  //   data.forEach((item) => {
  //   myTable.rows[myTable].cells[0].innerHTML = proInpId;
  //   myTable.rows[myTable].cells[1].innerHTML = prodInpName;
  //   myTable.rows[myTable].cells[2].innerHTML = proInpQuantity;
  //   myTable.rows[myTable].cells[3].innerHTML = proInpPrice;

  //   });
}

//delete
function onDelete() {
  console.log("Delete Row");
  console.log("event", event);
  console.log("event.target", event.target);
  console.log("event.target.parentNode", event.target.parentNode);
  console.log(
    "event.target.parentNode.parentNode",
    event.target.parentNode.parentNode
  );

  let row = event.target.parentNode.parentNode;

  // Remove the row from the table
  row.remove();
  //   myTable.rows[myTable].cells[0].innerHTML.proInpId = "";
  //   myTable.rows[myTable].cells[1].innerHTML.prodInpName = "";
  //   myTable.rows[myTable].cells[2].innerHTML.proInpQuantity = "";
  //   myTable.rows[myTable].cells[3].innerHTML.proInpPrice = "";
}
