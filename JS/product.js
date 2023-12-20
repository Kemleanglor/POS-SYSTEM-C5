// ======================  Get Categoy Data ===============
let categoryData =JSON.parse(localStorage.getItem("category"))

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
        iconView.addEventListener("click",viewProduct)

        tdAction.appendChild(iconDelete);
        tdAction.appendChild(iconEdit);
        tdAction.appendChild(iconView);

        tdId.textContent =data.id;
        tdName.textContent = data.name;
        tdCategory.textContent = data.category;
        tdQuntity.textContent = data.quantity;
        tdPrice.textContent = data.price+"$";
        tdTotalPrice.textContent = parseInt(data.quantity) * parseInt(data.price)+"$";



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
    let ifConfirm = window.confirm("Are you sur you want to delete?");
    if (ifConfirm){
        
        ProcductData.product.splice(index,1);
    }

    saveProduct();

    renderProduct();

}



//====================== Select Category ==========================
function chooseCategory(){
    for(let category of categoryData){
        let option1 = document.createElement("option");
        option1.value=category.name;
        option1.textContent=category.name;
        let option2 = document.createElement("option");
        option2.value=category.name;
        option2.textContent=category.name;
        selectCategory.appendChild(option1)
        selectCategory_toshow_ontable.appendChild(option2)
    }
    
}

//===================== Search =============================
function searchListproduct(){
    let trs = document.querySelectorAll("tbody tr");
 
    for(let tr of trs){
        let title=tr.firstElementChild.nextElementSibling.textContent;
        if(title.toLowerCase().includes(search.value.toLowerCase())){
            tr.style.display="";
        }else{
            tr.style.display="none";
        }
    }

}
searchListproduct()

let search = document.querySelector("#search");
search.addEventListener("keyup", searchListproduct)


function OnAdd() {
    hid(dialog_products)
    if (document.getElementById("name").value ===""|| document.getElementById("quanity").value===""||document.getElementById("unit-price").value==""){
        alert("You need to fill all the form input!")
        return;
    }

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
    document.getElementById("name").value="";
    document.getElementById("category").value="";
    document.getElementById("quanity").value="";
    document.getElementById("unit-price").value="";
}


function viewProduct(event) {
    show(view);
    let index = event.target.closest('tr').dataset.index;
    let product = ProcductData.product[index];
    TagName.textContent = product.name;
    Tagcategory.textContent = product.category;
    Tagquantity.textContent = product.quantity;
    TagNetPrice.textContent = product.price;
    TagSoldOut.textContent = "Hello World";
    saveProduct()
}
function Cancel(event) {
    hid(view);
}

let TagName = document.querySelector(".name span");
let Tagcategory = document.querySelector(".category span");
let Tagquantity = document.querySelector(".quantity span");
let TagNetPrice = document.querySelector(".view-price span");
let TagSoldOut = document.querySelector(".view-sold span");


let dialog_products = document.getElementById("product-dialog");

let btnAddProduct = document.getElementById("add-product");
btnAddProduct.addEventListener("click", AddProduct);

let selectCategory = document.querySelector("#category");

let selectCategory_toshow_ontable = document.querySelector("#category-select")

let table = document.querySelector("table");
let view =document.querySelector("#view-dialog")

let editIndex = null;

let ProcductData = {
    product: [],
    lastestId: null,
}

loadProduct()
renderProduct()
chooseCategory()




