let proInpId = document.getElementById("productid");
let prodInpName = document.getElementById("productname");
let proInpQuantity = document.getElementById("quantity");
let proInpPrice = document.getElementById("price");
let listContainer = document.getElementsByClassName("list-container");
let allInputs = document.querySelectorAll("input");
let myTable = document.getElementById("myTable");
let table = document.getElementsByClassName(".table")
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
    // let tr = document.createElement("tr");
    // // console.log(tr);

    // tr.className = "list-Container";
    // tr.innerHTML = `<td>${proInpId.value}</td>
    //           <td>${prodInpName.value}</td>
    //                 <td>${proInpQuantity.value}</td>
    //                 <td>${proInpPrice.value}</td>
    //                 <td><button class="editBtn" onClick="onEdit()">Update</button><button class="deletBtn" onClick="onDelete()">Delete</button></td>`;

    // tbody.appendChild(tr);

    // let obj = {
    //   product_id: proInpId.value,
    //   product_name: prodInpName.value,
    //   product_quantity: proInpQuantity.value,
    //   product_price: proInpPrice.value,
    // };
    // data.push(obj);
    data.push({
      proInpId: allInputs[0].value,
      prodInpName: allInputs[1].value,
      proInpQuantity: allInputs[2].value,
      proInpPrice: allInputs[3].value,
    });

    tbody.innerHTML = "";
    data.forEach((data, index) => {
      let dataStr = JSON.stringify(data);
      let finalData = dataStr.replace(/"/g, "'");
      tbody.innerHTML += `
      <tr>
      <td>${data.proInpId}</td>
      <td>${data.prodInpName}</td>
      <td>${data.proInpQuantity}</td>
      <td>${data.proInpPrice}</td>
      <td>
          <button data= "${finalData}" index="${index}" onclick = "onEdit()" class="edit-btn edt" id="editBtn">Update</button>
          <button  index="${index}" onclick = "onDelete()" class="del-btn btn" id="deletBtn" >Delete</button>
      </td>
  </tr>`;
      console.log("data=", data, "index=", index);
    });
    // console.log("Data=", data);

    // let id = document.createElement("td");
    // let name = document.createElement("td");
    // let quantity = document.createElement("td");
    // let price = document.createElement("td");
    // let btn = document.createElement("td")

    // id.innerHTML = proInpId.value;
    // name.innerHTML = prodInpName.value;
    // quantity.innerHTML = proInpQuantity.value;
    // price.innerHTML = proInpPrice.value;
    // btn.innerHTML = `<button class="editBtn" onClick="onEdit()">Update</button><button class="deletBtn" onClick="onDelete()">Delete</button>`;
    // listContainer.appendChild(id);
    // listContainer.appendChild(name);
    // listContainer.appendChild(quantity);
    // listContainer.appendChild(price);
    // listContainer.appendChild(btn);
  }
  proInpId.value = "";
  prodInpName.value = "";
  proInpQuantity.value = "";
  proInpPrice.value = "";
}



