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






// Create Customer form and database

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

    // clean form value
    document.getElementById("addCustomerName").value = "";
    document.getElementById("addCustomerPhone").value = "";
    document.getElementById("addCustomerAdd").value = "";
})


// add collections

document.getElementById("addCollectBtn").addEventListener("click", () => {
    addCollect();
    document.querySelector("#addCollectAmount").value = "";
    console.log("add amount clicked");
})


function addCollect() {
    let addCollectAmount = document.querySelector("#addCollectAmount").value;

    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let CollectList = [];

    let Collect = {
        CollectAmount: addCollectAmount,
        CollectDate: date
    }
    console.log(Collect.CollectAmount, "Amount Added")
    // let database = localStorage.getItem('Collect');

    CollectList.push(Collect);

    //get and concat costumer name
    CollectList = CollectList.concat(JSON.parse(localStorage.getItem('CollectList') || '[]'));

    //set customer list
    localStorage.setItem("CollectList", JSON.stringify(CollectList));

    showCollectTotal()
}


// Add Cost

document.getElementById("addCostBtn").addEventListener("click", () => {
    let TypeOfCostValue = document.getElementById("TypeOfCost").value;
    let CostRemarksValue = document.getElementById("CostRemarks").value;
    let CostAmountValue = document.getElementById("CostAmount").value;


    addCost(CostAmountValue, CostRemarksValue, TypeOfCostValue);

    console.log("add Cost clicked", TypeOfCostValue, CostRemarksValue, CostAmountValue);

    document.getElementById("TypeOfCost").value = "";
    document.getElementById("CostRemarks").value = "";
    document.getElementById("CostAmount").value = "";
})

function addCost(cost, remarks, type) {


    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();

    let CostList = [];

    let Cost = {
        CostAmount: cost,
        TypeOfCost: type,
        CostRemarks: remarks,
        CollectDate: date
    }

    // let database = localStorage.getItem('Collect');

    CostList.push(Cost);



    //get and concat costumer name
    CostList = CostList.concat(JSON.parse(localStorage.getItem('CostList') || '[]'));

    //set customer list
    localStorage.setItem("CostList", JSON.stringify(CostList));

    showCostTotal()
}

// showCostTotal 
function showCostTotal() {
    let showCost = JSON.parse(localStorage.getItem('CostList'));
    console.log(showCost);
    let totalCostAmount = 0;

    for (let index = 0; index < showCost.length; index++) {
        const element = parseInt(showCost[index].CostAmount);
        totalCostAmount += element;

    }
    document.getElementById("totalCost").innerText = totalCostAmount;
}
showCostTotal()


// showCollectTotal

function showCollectTotal() {
    let showCollect = JSON.parse(localStorage.getItem('CollectList'));
    console.log(showCollect);
    let totalCollectAmount = 0;

    for (let index = 0; index < showCollect.length; index++) {
        const element = parseInt(showCollect[index].CollectAmount);
        totalCollectAmount += element;

    }
    document.getElementById("totalCollect").innerText = totalCollectAmount;
}

showCollectTotal()

// showProfit
function showProfit() {
    let showCollect = JSON.parse(localStorage.getItem('CollectList'));
    console.log(showCollect);
    let totalCollectAmount = 0;

    for (let index = 0; index < showCollect.length; index++) {
        const element = parseInt(showCollect[index].CollectAmount);
        totalCollectAmount += element;
    }
    let showCost = JSON.parse(localStorage.getItem('CostList'));



    let totalCostAmount = 0;

    for (let index = 0; index < showCost.length; index++) {
        const element = parseInt(showCost[index].CostAmount);
        totalCostAmount += element;

    }

    document.getElementById("profit").innerText = totalCollectAmount - totalCostAmount;

}
showProfit() 