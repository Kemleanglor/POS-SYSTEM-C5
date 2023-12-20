let productData = JSON.parse(localStorage.getItem("product"))
let categoryData = JSON.parse(localStorage.getItem("category"))
console.log(categoryData)
let orderData =JSON.parse(localStorage.getItem("order"));

//====================== Count Category ==================
let countCategory = 0;
for (let category of categoryData){
    countCategory+=1
}

//=====================  Count Product ================
let countProduct =0;
for (let product of productData){
    countProduct+=parseInt(product.quantity);
}

//=================== Count Number order =================
let countOrder =0;
let price = 0;

function showtheProudctSold(){
    tbody.remove()
    let newTbody = document.createElement("tbody")
    for (let order of orderData){
        let tRows =document.createElement("tr");

        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdCategory = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdAmount = document.createElement("td");
        let tdSellProgress = document.createElement("td");
        let iconProgress = document.createElement("i");
        iconProgress.classList.add("material-icons");
        iconProgress.textContent="call_made";
        tdSellProgress.appendChild(iconProgress)

        tdId.textContent=order.idOrder;
        tdName.textContent=order.orderName;
        tdCategory.textContent=order.orderCategory;
        tdPrice.textContent=order.orderPrice+"$";
        tdAmount.textContent=order.orderQuantity;
        

        tRows.appendChild(tdId);
        tRows.appendChild(tdName);
        tRows.appendChild(tdCategory);
        tRows.appendChild(tdPrice);
        tRows.appendChild(tdAmount);
        tRows.appendChild(tdSellProgress);
        newTbody.appendChild(tRows)

        countOrder+=parseInt(order.orderQuantity)
        price+=parseInt(order.orderQuantity)*parseInt(order.orderPrice);
    }
    table.appendChild(newTbody);

    p_instock.textContent= countProduct-countOrder;
    p_sold.textContent=countOrder;
    p_income.textContent=price +"$";

}
let table = document.querySelector("table");
let tbody = document.querySelector("tbody");


let p_instock=document.createElement("p");
let p_category=document.createElement("p");
p_category.textContent=countCategory;
let p_sold=document.createElement("p");
let p_income=document.createElement("p");

let inStock =document.querySelector(".instock");
inStock.appendChild(p_instock)
let cateGory = document.querySelector(".category");
cateGory.appendChild(p_category)
let soldOut = document.querySelector(".soldout");
soldOut.appendChild(p_sold);
let inCome = document.querySelector(".income");
inCome.appendChild(p_income);


showtheProudctSold()

//done