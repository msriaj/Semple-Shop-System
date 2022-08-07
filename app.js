let showCollectId = document.querySelector(".add-collection");
let showCostId = document.querySelector(".add-Cost");
let showCustomerId = document.querySelector(".add-customer");
let showDueId = document.querySelector(".add-due");
let showInstId = document.querySelector(".add-inst");





function showCollect() {
    showCollectId.style.display = "block";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = 'none';
    showInstId.style.display = "none";
    console.log("working");
    console.log(showCustomerId[0])


}

function showCost() {
    showCollectId.style.display = "none";
    showCostId.style.display = "block";
    showCustomerId.style.display = "none";
    showDueId.style.display = "none";
    showInstId.style.display = "none";
}
function showCustomer() {
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "block";
    showDueId.style.display = "none";
    showInstId.style.display = "none";
}
function showDue() {
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = "block";
    showInstId.style.display = "none";
}
function showInst() {
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = "none";
    showInstId.style.display = "block";
}







function addCustomer(name, phone, address) {

    let customerList = [];

    let customer = {
        CustomerName: name,
        CustomerPhone: phone,
        CustomerAddress: address
    }

    let database = localStorage.getItem('customerList');
    let inDatabase = database.includes(phone);

    if (inDatabase !== true) {
        customerList.push(customer);
    }
    else {
        console.log("agei ache");
    }

    //get and concat costumer name
    customerList = customerList.concat(JSON.parse(localStorage.getItem('customerList') || '[]'));

    //set customer list
    localStorage.setItem("customerList", JSON.stringify(customerList));
}

document.getElementById("addNewCustomer").addEventListener("click", () => {
    let addCustomerName = document.getElementById("addCustomerName").value;
    let addCustomerPhone = document.getElementById("addCustomerPhone").value;
    let addCustomerAdd = document.getElementById("addCustomerAdd").value;
    addCustomer(addCustomerName, addCustomerPhone, addCustomerAdd);

    addCustomerName = "";
    addCustomerPhone = "";
    addCustomerAdd = "";
})
