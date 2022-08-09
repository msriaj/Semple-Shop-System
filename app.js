let showCollectId = document.querySelector(".add-collection");
let showCostId = document.querySelector(".add-Cost");
let showCustomerId = document.querySelector(".add-customer");
let showDueId = document.querySelector(".add-due");
let showInstId = document.querySelector(".add-inst");
let showCollectID = document.querySelector(".show-collect-list");

//date

const today = new Date();
const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


document.getElementById("cList").addEventListener("click", () => {
    showCollect2List();
    console.log("list ");
});

document.getElementById("cusTomarList").addEventListener("click", () => {
    document.querySelector(".show-customer-list").style.display = "block";
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = "none";
    showInstId.style.display = "none";
    showCollectID.style.display = "none";
    document.querySelector(".bakitaka-list").style.display = "none";
    document.querySelector(".jomataka-list").style.display = "none";
    document.querySelector(".show-Cost-list").style.display = "none";
})


document.getElementById("listOfDue").addEventListener("click", () => {
    document.querySelector(".bakitaka-list").style.display = "block";
    document.querySelector(".show-customer-list").style.display = "none";
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = "none";
    showInstId.style.display = "none";
    showCollectID.style.display = "none";
    document.querySelector(".jomataka-list").style.display = "none";
    document.querySelector(".show-Cost-list").style.display = "none";

})

document.getElementById("lisOfJoma").addEventListener("click", () => {
    document.querySelector(".jomataka-list").style.display = "block";
    document.querySelector(".bakitaka-list").style.display = "none";
    document.querySelector(".show-customer-list").style.display = "none";
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = "none";
    showInstId.style.display = "none";
    showCollectID.style.display = "none";
    document.querySelector(".show-Cost-list").style.display = "none";

})
document.getElementById("listOfCost").addEventListener("click", () => {
    document.querySelector(".show-Cost-list").style.display = "block";
    document.querySelector(".jomataka-list").style.display = "none";
    document.querySelector(".bakitaka-list").style.display = "none";
    document.querySelector(".show-customer-list").style.display = "none";
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = "none";
    showInstId.style.display = "none";
    showCollectID.style.display = "none";

})






// "show-Cost-list"


function showCollect2List() {
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = 'none';
    showInstId.style.display = "none";
    showCollectID.style.display = "block";
    document.querySelector(".show-customer-list").style.display = "none";
    document.querySelector(".bakitaka-list").style.display = "none";
    document.querySelector(".jomataka-list").style.display = "none";
    document.querySelector(".show-Cost-list").style.display = "none";

}

function showCollect() {
    showCollectId.style.display = "block";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = 'none';
    showInstId.style.display = "none";
    showCollectID.style.display = "none";
    document.querySelector(".show-customer-list").style.display = "none";
    document.querySelector(".bakitaka-list").style.display = "none";
    document.querySelector(".jomataka-list").style.display = "none";
    document.querySelector(".show-Cost-list").style.display = "none";

}

function showCost() {
    showCollectId.style.display = "none";
    showCostId.style.display = "block";
    showCustomerId.style.display = "none";
    showDueId.style.display = "none";
    showInstId.style.display = "none";
    showCollectID.style.display = "none";
    document.querySelector(".show-customer-list").style.display = "none";
    document.querySelector(".bakitaka-list").style.display = "none";
    document.querySelector(".jomataka-list").style.display = "none";
    document.querySelector(".show-Cost-list").style.display = "none";
}
function showCustomer() {
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "block";
    showDueId.style.display = "none";
    showInstId.style.display = "none";
    showCollectID.style.display = "none";
    document.querySelector(".show-customer-list").style.display = "none";
    document.querySelector(".bakitaka-list").style.display = "none";
    document.querySelector(".jomataka-list").style.display = "none";
    document.querySelector(".show-Cost-list").style.display = "none";
}
function showDue() {
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = "block";
    showInstId.style.display = "none";
    showCollectID.style.display = "none";
    document.querySelector(".show-customer-list").style.display = "none";
    document.querySelector(".bakitaka-list").style.display = "none";
    document.querySelector(".jomataka-list").style.display = "none";
    document.querySelector(".show-Cost-list").style.display = "none";
}
function showInst() {
    showCollectId.style.display = "none";
    showCostId.style.display = "none";
    showCustomerId.style.display = "none";
    showDueId.style.display = "none";
    showInstId.style.display = "block";
    showCollectID.style.display = "none";
    document.querySelector(".show-customer-list").style.display = "none";
    document.querySelector(".bakitaka-list").style.display = "none";
    document.querySelector(".jomataka-list").style.display = "none";
    document.querySelector(".show-Cost-list").style.display = "none";
}






// Create Customer form and database

function addCustomer(name, phone, address) {

    let customerList = [];

    let customer = {
        CustomerName: name,
        CustomerPhone: phone,
        CustomerAddress: address
    }

    // let database = localStorage.getItem('customerList');
    // let inDatabase = database.includes(phone);

    // if (inDatabase !== true) {
    customerList.push(customer);
    // }
    // else {
    //     console.log("agei ache");
    // }

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



    let CostList = [];

    let Cost = {
        CostAmount: cost,
        TypeOfCost: type,
        CostRemarks: remarks,
        CostDate: date
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

    todaysCollection()
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

function todaysCollection() {
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();


    let showCollect = JSON.parse(localStorage.getItem('CollectList'));
    console.log(showCollect);
    let totalCollectAmount = 0;

    for (let index = 0; index < showCollect.length; index++) {
        console.log(showCollect[index].CollectDate);
        if (showCollect[index].CollectDate == date) {
            const element = parseInt(showCollect[index].CollectAmount);
            totalCollectAmount += element;
        }


    }
    console.log("todays Colect", totalCollectAmount)
    document.getElementById("todaysCollection").innerText = totalCollectAmount;
}
todaysCollection()


// showCollectList list on click 
function showCollectList() {
    let showCollect = JSON.parse(localStorage.getItem('CollectList'));
    let showCollectLi = "";

    for (let index = 0; index < showCollect.length; index++) {
        showCollectLi += `<div class="table-list" ><div> ${showCollect[index].CollectAmount} TK </div> <div class="text-green">  Collect Date:  ${showCollect[index].CollectDate}</div></div>`
    }
    document.getElementById("show-collect-list").innerHTML = showCollectLi;
}
showCollectList();


// show Cost list on click 
function showCostList() {
    let showCost = JSON.parse(localStorage.getItem('CostList'));
    let showCostLi = "";

    for (let index = 0; index < showCost.length; index++) {
        showCostLi += `<div class="table-list" ><div> ${showCost[index].CostAmount} TK </div> <div> ${showCost[index].TypeOfCost}  </div>  <div class="text-green">  Remarks:  ${showCost[index].CostRemarks}</div><div class="text-green">  Cost Date:  ${showCost[index].CostDate}</div></div>`
    }
    document.getElementById("show-Cost-list").innerHTML = showCostLi;
}
showCostList();

// show list on click 
function showCustomerList() {
    let showCustomer = JSON.parse(localStorage.getItem('customerList'));
    let showCustomerLi = "";

    for (let index = 0; index < showCustomer.length; index++) {
        showCustomerLi += `<div class="table-list" ><div> Name :  ${showCustomer[index].CustomerName}   </div> <div> ${showCustomer[index].CustomerPhone}  </div>  <div class="text-green">  Address:  ${showCustomer[index].CustomerAddress}</div> </div>`
    }
    document.getElementById("show-customer-list").innerHTML = showCustomerLi;
}
showCustomerList();

// add due select 
function showCustomerListonSelect() {
    let showCustomer = JSON.parse(localStorage.getItem('customerList'));
    let showCustomerLi = "";

    for (let index = 0; index < showCustomer.length; index++) {




        showCustomerLi += `<option value="${showCustomer[index].CustomerPhone}"> ${showCustomer[index].CustomerName} ${showCustomer[index].CustomerPhone} </option>`
    }
    document.getElementById("customerName").innerHTML = showCustomerLi;
    document.getElementById("customerName2").innerHTML = showCustomerLi;
}
showCustomerListonSelect();



//baki Tk Add to database

document.getElementById("bakiBtn").addEventListener("click", () => {
    let customerName = document.getElementById("customerName").value;
    let bakiAmount = document.getElementById("bakiAmount").value;
    let bakiRemarks = document.getElementById("bakiRemarks").value;



    let bakiList = [];

    let baki = {
        customerPhone: customerName,
        bakiAmount: parseInt(bakiAmount),
        bakiRemarks: bakiRemarks,
        bakiDate: date
    }

    bakiList.push(baki);

    //get and concat baki details
    bakiList = bakiList.concat(JSON.parse(localStorage.getItem('bakiList') || '[]'));

    //set to  baki  list
    localStorage.setItem("bakiList", JSON.stringify(bakiList));
    console.log("c");

})



//joma Tk Add to database

document.getElementById("jomaBtn").addEventListener("click", () => {
    let customerName2 = document.getElementById("customerName2").value;
    let jomaAmount = document.getElementById("jomaAmount").value;
    let jomaRemarks = document.getElementById("jomaRemarks").value;



    let jomaList = [];

    let joma = {
        customerPhone: customerName2,
        jomaAmount: parseInt(jomaAmount),
        jomaRemarks: jomaRemarks,
        JomaDate: date
    }

    jomaList.push(joma);

    //get and concat joma details
    jomaList = jomaList.concat(JSON.parse(localStorage.getItem('jomaList') || '[]'));

    //set to  joma  list
    localStorage.setItem("jomaList", JSON.stringify(jomaList));
    console.log("c");

})

// show joma taka list 


function showJomataka() {
    let jomaList = JSON.parse(localStorage.getItem('jomaList'));
    let jomaListLi = "";
    console.log(jomaList);


    for (let index = 0; index < jomaList.length; index++) {
        jomaListLi += ` <p style="background:#fff;border-bottom:1px solid green; padding :20px"> Amount : ${jomaList[index].jomaAmount} <br> Phone :  ${jomaList[index].customerPhone}<br> Remarks :${jomaList[index].jomaRemarks} <br>Date : ${jomaList[index].JomaDate}</p>  `
    }

    console.log(jomaListLi);
    document.getElementById("jomataka-list").innerHTML = jomaListLi;
}

showJomataka();


// show baki taka list 


function showbakitaka() {
    let bakiList = JSON.parse(localStorage.getItem('bakiList'));
    let bakiListLi = "";
    console.log(bakiList);


    for (let index = 0; index < bakiList.length; index++) {
        bakiListLi += ` <p style="background:#fff;border-bottom:1px solid green; padding :20px"> Amount : ${bakiList[index].bakiAmount} <br> Phone :  ${bakiList[index].customerPhone}<br> Remarks :${bakiList[index].bakiRemarks} <br>Date : ${bakiList[index].bakiDate}</p>  `
    }

    console.log(bakiListLi);
    document.getElementById("bakitaka-list").innerHTML = bakiListLi;
}

showbakitaka();



