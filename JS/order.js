
//=================== ProdacutData and CategoryData ===============
let productData = JSON.parse(localStorage.getItem("product"))

for(let data of productData){
    console.log(data.id)
}

function saveOrder() {
    localStorage.setItem("order", JSON.stringify(orderData.order))
    
}
function loadOrder() {
    let OrderStorage = JSON.parse(localStorage.getItem("order"));
    if (OrderStorage !==null){
        orderData.order=OrderStorage
    }
}

//===================== Total Price ===============================
let toTalPrice =0;

//===================================== Display items order to table =================
function addItemOrder() {
    let tbody = document.querySelector("tbody");
    tbody.remove();
    let newTbody = document.createElement("tbody");
    let index = 0;
    // let price =0;

    for (let orderItem of orderData.order) {
        let tRows = document.createElement("tr");
        tRows.dataset.index = index;

        let tdId = document.createElement("td");
        let tdName = document.createElement("td")
        let tdQuantity = document.createElement("td");
        inputQnt = document.createElement("input");
        inputQnt.type="number"
        inputQnt.value=orderItem.orderQuantity
        tdQuantity.appendChild(inputQnt);

        let tdPrice = document.createElement("td");
        let tdAction = document.createElement("td");
        let iconDelete = document.createElement("i");
        iconDelete.classList.add("material-icons");
        iconDelete.textContent="delete";
        iconDelete.addEventListener("click",removeOrder);

        tdAction.appendChild(iconDelete);

        tdId.textContent=orderItem.idOrder;
        tdName.textContent=orderItem.orderName;
        tdPrice.textContent=orderItem.orderPrice+"$";

        tRows.appendChild(tdId);
        tRows.appendChild(tdName);
        tRows.appendChild(tdQuantity);
        tRows.appendChild(tdPrice);
        tRows.appendChild(tdAction);

        newTbody.appendChild(tRows);
        index +=1
        toTalPrice+=parseInt(orderItem.orderQuantity)*parseInt(orderItem.orderPrice);

    }
    table.appendChild(newTbody);
    
    total.textContent=toTalPrice+"$";

    inputID.value=""
    p_Name.textContent ="";
    p_Quantity.textContent ="";
    p_Price.textContent ="";
    span.textContent ="";
}

//======================== remove order ===============================
function removeOrder(event){
    let index = event.target.parentElement.parentElement.dataset.index;

    let isRemoved = window.confirm('Are you sure you want to remove it?');
    if (isRemoved) {
        orderData.order.splice(index,1);
        // row.remove();
    }
    toTalPrice =0;

    saveOrder();

    addItemOrder();
}

//========================== Search ID of Products ==================
function searchIdProduct() {
    let value_input = inputID.value;
    for (let data of productData) {
        if (value_input == data.id) {

            p_Name.textContent = data.name;
            p_Quantity.textContent = "Quantity: ";
            p_Price.textContent = data.price + "$";
            span.textContent = data.quantity;

            p_Quantity.appendChild(span);
            headerBox.appendChild(p_Name);
            bodyBox.appendChild(p_Quantity);
            bodyBox.appendChild(p_Price);

            let orderProducts = {
                idOrder: data.id,
                orderName: data.name,
                orderCategory: data.category,
                orderQuantity: data.quantity,
                orderPrice: data.price,
            }
            orderData.order.push(orderProducts)
            saveOrder()
        }
    }
    
}



let p_Name = document.createElement("p");
let p_Quantity = document.createElement("p");
let p_Price = document.createElement("p");
let span = document.createElement("span");

let inputID = document.querySelector("#input-id");
let btnSearch = document.querySelector("#search-id");
btnSearch.addEventListener("click", searchIdProduct)

let headerBox = document.querySelector(".header-box");
let bodyBox = document.querySelector(".body-box");

let table = document.querySelector("table")


let btnAddtoCard = document.querySelector("#add-to-card");
btnAddtoCard.addEventListener("click", addItemOrder)

let total = document.querySelector("span");
let btnCheckout = document.querySelector("#check-out");
let removeIndex=null;

let orderData = {
    order: [],
}


loadOrder()
addItemOrder()