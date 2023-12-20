//=================== ProdacutData and CategoryData ===============
function saveOrder() {
    localStorage.setItem("order", JSON.stringify(orderData.order))
    
}
function loadOrder() {
    let OrderStorage = JSON.parse(localStorage.getItem("order"));
    if (OrderStorage !==null){
        orderData.order=OrderStorage
    }
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