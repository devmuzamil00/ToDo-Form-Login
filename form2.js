let regForm = document.querySelector("form");
let allInputs = regForm.querySelectorAll("input");
let regList = document.querySelector(".reg-list");
// let suBmit = regForm.querySelector(".submit");
let submitBtn = document.querySelector("#submit-btn");
let editBtn = document.querySelector("#edit-btn");
let allInputData = [];

// console.log("regForm",regForm );
// console.log(allInputs);
// console.log(regList);
// console.log( suBmit);
// console.log(allInputData);
if (localStorage.getItem("allInputData") != null) {
  allInputData = JSON.parse(localStorage.getItem("allInputData"));
}
// console.log("allinputsdata=", allInputData);

regForm.onsubmit = (e) => {
  e.preventDefault();
  //     let checkId = allInputData.find((data)=>data.idproductCode == allInputs[0].value ||
  //    data.product == allInputs[1].value || data.qty == allInputs[2].value || data.perPrice == allInputs[3].value)
  //   console.log(checkId);
  //   if(checkId == undefined){
  //     allInputData.push({
  //       idproductCode: allInputs[0].value,
  //       product: allInputs[1].value,
  //       qty: allInputs[2].value,
  //       perPrice: allInputs[3].value,
  //     });
  //     localStorage.setItem("allInputData", JSON.stringify(allInputData));
  //   }
  //   else{
  // alert("id already exist")
  //   }
  //   if (
  //         allInputs[0].value === "" ||
  //         allInputs[1].value === "" ||
  //         allInputs[2].value === "" ||
  //         allInputs[3].value === ""
  //       ) {
  //         alert("required field are missing");
  //       }
  //       else{
  allInputData.push({
    productid: allInputs[0].value,
    product: allInputs[1].value,
    qty: allInputs[2].value,
    perPrice: allInputs[3].value,
  });
  //   }
  localStorage.setItem("allInputData", JSON.stringify(allInputData));
  //   console.log("allInputData",allInputData);
  regForm.reset("");
  getRegData();
};

let getRegData = () => {
  console.log("All input");
  regList.innerHTML = "";
  allInputData.forEach((data, index) => {
    let dataStr = JSON.stringify(data);
    let finalData = dataStr.replace(/"/g, "'");
    regList.innerHTML += `
      <tr>
      <td>${data.productid}</td>
      <td>${data.product}</td>
      <td>${data.qty}</td>
      <td>${data.perPrice}</td>
      <td>
          <button data= "${finalData}" index="${index}" class="edit-btn edt">Update</button>
          <button index="${index}" class="del-btn btn">Delete</button>
      </td>
  </tr>`;
    console.log(data, index);
  });
  action();
};

function action() {
  console.log("Delete....!");
  let allDeleteBtn = regList.querySelectorAll(".del-btn");

  for (let btn of allDeleteBtn) {
    btn.onclick = () => {
      let index = btn.getAttribute("index");
      allInputData.splice(index, 1);
      localStorage.setItem("allInputData", JSON.stringify(allInputData));
      getRegData();
    };
  }
  // console.log("deleteBtn",deleteBtn);
  console.log("update....!");
  let allEditBtn = regList.querySelectorAll(".edit-btn");
  for (let btn of allEditBtn) {
    btn.onclick = () => {
      let index = btn.getAttribute("index");
      let dataStr = btn.getAttribute("data");
      let finalData = dataStr.replace(/'/g, '"');
      let data = JSON.parse(finalData);
      // console.log("index:", index);
      // console.log("datastr:", dataStr);
      //   console.log("finalData:",finalData);
      // console.log("data:",data);
      allInputs[0].value = data.productid;
      allInputs[1].value = data.product;
      allInputs[2].value = data.qty;
      allInputs[3].value = data.perPrice;


  submitBtn.style.display = "none"; // Hide Submit
  editBtn.style.display = "inline-block"; // Show Edit

      // suBmit.disabled = false;
      editBtn.onclick = (e) => {
        e.preventDefault();
        allInputData[index] = {
          productid: allInputs[0].value,
          product: allInputs[1].value,
          qty: allInputs[2].value,
          perPrice: allInputs[3].value,
        };

        localStorage.setItem("allInputData", JSON.stringify(allInputData));
        regForm.reset("");
        getRegData();
        editBtn.style.display = "none";
        submitBtn.style.display = "inline-block";
        // suBmit.disabled = true;
      };
    };
  }
}
getRegData();
