<<<<<<< HEAD
// ======================= HIDE / SHOW ====================
function hid(element) {
    element.style.display = "none";

}
function show(element) {
    element.style.display = "block";

}

//===========================LOCAL STORAGE ==================

function saveProduct() {
    localStorage.setItem("product", JSON.stringify(ProcductData.product));
}

function loadProduct() {
    let ProductStorage = JSON.parse(localStorage.getItem("product"));
    if (ProductStorage !== null) {
        ProcductData.product = ProductStorage;
    }
}



function OnCancel() {
    hid(dialog_products)
}


//========= Update the View======================

function renderProduct() {
    let tbody = document.querySelector("tbody");
    tbody.remove();
    let newTbody = document.createElement("tbody");
    let datas = 0;
    for (let data of ProcductData.product) {
        let tRows = document.createElement("tr");
        tRows.dataset.index = datas
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdCategory = document.createElement("td");
        let tdQuntity = document.createElement("td");
        let tdPrice = document.createElement("td");
        let tdTotalPrice = document.createElement("td");
        let tdAction = document.createElement("td");

        let iconDelete = document.createElement("i");
        iconDelete.classList.add("material-icons");
        iconDelete.textContent = "delete";
        iconDelete.addEventListener("click",removeProduct)

        let iconEdit = document.createElement("i");
        iconEdit.classList.add("material-icons");
        iconEdit.textContent = "edit";
        iconEdit.addEventListener("click",editProduct)

        let iconView = document.createElement("i");
        iconView.classList.add("material-icons");
        iconView.textContent = "visibility";

        tdAction.appendChild(iconDelete);
        tdAction.appendChild(iconEdit);
        tdAction.appendChild(iconView);

        tdId.textContent = data.id;
        tdName.textContent = data.name;
        tdCategory.textContent = data.category;
        tdQuntity.textContent = data.quantity;
        tdPrice.textContent = data.price;
        tdTotalPrice.textContent = parseInt(data.quantity) * parseInt(data.price);



        tRows.appendChild(tdId)
        tRows.appendChild(tdName);
        tRows.appendChild(tdCategory);
        tRows.appendChild(tdQuntity);
        tRows.appendChild(tdPrice);
        tRows.appendChild(tdTotalPrice);
        tRows.appendChild(tdAction);

        newTbody.appendChild(tRows);

        datas += 1
    }

    table.appendChild(newTbody);
}


// //=======================Edit Procduct==================
function editProduct(event){
    let index = event.target.parentElement.parentElement.dataset.index;
    let pdct = ProcductData.product[index];
    // let idEdit =1
    // idEdit=pdct.id-idEdit;
    // console.log
    document.getElementById("name").value=pdct.name;
    document.getElementById("category").value=pdct.category;
    document.getElementById("quanity").value=pdct.quantity;
    document.getElementById("unit-price").value=pdct.price;

    show(dialog_products);
    let editHeader = document.querySelector("header");
    editHeader.textContent="Edit Category";
    let btnEdit = document.querySelector("footer").lastElementChild;
    btnEdit.textContent="Edit";

    editIndex=index

}

function removeProduct(event){
    let index = event.target.parentElement.parentElement.dataset.index;

    ProcductData.product.splice(index,1);

    saveProduct();

    renderProduct();

}

function OnAdd() {
    hid(dialog_products)

    let productId = ProcductData.lastestId;
    if (productId === null || ProcductData.product.length === 0) {
        productId = 1;

    }
    
    else if (editIndex===null){
        productId = productId + 1
    }
    else {
        productId = productId
    }
    //---------------- update lastest ID to the product list----------
    ProcductData.lastestId = productId;

    let products = {};
    products.id = productId;
    products.name = document.getElementById("name").value;
    products.category = document.getElementById("category").value;
    products.quantity = document.getElementById("quanity").value;
    products.price = document.getElementById("unit-price").value;

    if (editIndex === null) {
        ProcductData.product.push(products);
    }
    else {
        ProcductData.product[editIndex] = products;
    }
    editIndex = null;

    let addHeader = document.querySelector("header");
    addHeader.textContent = "Add Products";
    let btnAdd = document.querySelector("footer").lastElementChild;
    btnAdd.textContent = "Add";

    //========= save category===========
    saveProduct()

    //========== Update the view=========
    renderProduct()
}

function AddProduct() {
    show(dialog_products)
=======
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
>>>>>>> fe31b647f168743d7dfa4b94eba53aeebdfef76b
}



<<<<<<< HEAD
let dialog_products = document.getElementById("product-dialog");

let btnAddProduct = document.getElementById("add-product");
btnAddProduct.addEventListener("click", AddProduct);




let table = document.querySelector("table")

let editIndex = null;

let ProcductData = {
    product: [],
    lastestId: null,
}

loadProduct()
renderProduct()



=======
//-----------------------Show Form to Add prodcut funtion-------------------
function btnAddproduct() {
    show(dom_product_dialog);
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
>>>>>>> fe31b647f168743d7dfa4b94eba53aeebdfef76b
