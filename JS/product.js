// -----------------Show and Hid funtions ---------------------
function show(element) {
    element.style.display = "block";
}
function hid(element) {
    element.style.display = "none";
}

//---------------------Save and load Product ---------------------
function saveProducts() {
    localStorage.setItem("products", JSON.stringify(productData.products));
}

function loadProducts() {
    let productsStorage = JSON.parse(localStorage.getItem("products"));
    if (productsStorage !== null) {
        products = productsStorage;
    }
}

//---------------------Cancel and Save funtion ------------------
function cancel() {
    hid(dom_product_dialog);
}

function addProduct() {
    hid(dom_product_dialog);
    if (productName.value==="" || cateGory.value==="" || quanitys.value==="" || unitPrice.value===""){
        alert("You need  to fill all input form")
        return;
    }

    let productId = productData.lastestId;
    if (productId === null || productData.products.length === 0) {
        productId = 1;

    }
    else {
        productId = productId + 1
    }
    //---------------- update lastest ID to the product list----------
    productData.lastestId = productId;

    //---------------- create new product and add product to product list-------
    let prodcut = {
        id: productId,
        name: productName.value,
        categroy: cateGory.value,
        quanity: quanitys.value,
        price: unitPrice.value,
    }

    productData.products.push(prodcut);

    saveProducts();

    getProducts();
}
function getProducts() {
    loadProducts()

    if (localStorage.length===0){
        return;
    }

    let tbody = document.querySelector("tbody");
    tbody.remove();

    let newTbody = document.createElement("tbody");
    for (let data of products){

        let tRows = document.createElement("tr");

        let tdId = document.createElement("td")
        let tdName = document.createElement("td");
        let tdCategory = document.createElement("td");
        let tdQuanity = document.createElement("td");
        let tdUnitprice = document.createElement("td");
        let tdTotbalprice = document.createElement("td");
        let tdAction = document.createElement("td");

        let icondelete = document.createElement("i");
        let iconedit = document.createElement("i");
        let iconvisit = document.createElement("i");
        icondelete.classList.add("material-icons");
        icondelete.textContent="delete";

        iconedit.classList.add("material-icons");
        iconedit.textContent = "edit";

        iconvisit.classList.add("material-icons");
        iconvisit.textContent = "visibility";

        tdAction.appendChild(icondelete);
        tdAction.appendChild(iconedit);
        tdAction.appendChild(iconvisit);

        

        tdId.textContent = data.id;
        tdName.textContent = data.name;
        tdCategory.textContent = data.categroy;
        tdQuanity.textContent = data.quanity;
        tdUnitprice.textContent = data.price;
        tdTotbalprice.textContent = parseInt(data.quanity)*parseInt(data.price);
        // tdAction.textContent = "Hello world";

        tRows.appendChild(tdId);
        tRows.appendChild(tdName);
        tRows.appendChild(tdCategory);
        tRows.appendChild(tdQuanity);
        tRows.appendChild(tdUnitprice);
        tRows.appendChild(tdTotbalprice);
        tRows.appendChild(tdAction);

        newTbody.appendChild(tRows);
    }
    let table = document.querySelector("table");
    table.appendChild(newTbody)
}



//-----------------------Show Form to Add prodcut funtion-------------------
function btnAddproduct() {
    show(dom_product_dialog);
    
    productName.value="";
    cateGory.value="";
    quanitys.value="";
    unitPrice.value="";
}

let btn = document.querySelector("#add-product");
//------------------Get form input-----------------------------
let dom_product_dialog = document.querySelector("#product-dialog")

let productName = document.querySelector("#name");
let cateGory = document.querySelector("#category");
let quanitys = document.querySelector("#quanity");
let unitPrice = document.querySelector("#unit-price");

//---------------------Product Data -----------------------------
let productData = {
    products: [],
    lastestId: null,
}
btn.addEventListener("click", btnAddproduct)
getProducts()