// variable
let ProcductData = {
    product: [],
    lastestId: null,
};
function loadData() {
    let loaded = localStorage.getItem("product");
    if (loaded === null) {
        ProcductData.product = [];
    } else {
        ProcductData.product = JSON.parse(loaded);
    }
    localStorage.setItem("product", JSON.stringify(ProcductData.product));
}
loadData();

// grapContent
const dailogBtn = document.getElementById("add-products");
const addBtn = document.getElementById("add-product");
const cancelBtn = document.getElementById("cancel");
const addProductForm = document.getElementById("product-dialog");
const viewDialog = document.getElementById("view-dialog");
const productName = document.getElementById("name");
const productCategory = document.getElementById("category-select");
const productQuantity = document.getElementById("quantity");
const productPrice = document.getElementById("unit-price");
const editBtn = document.getElementById("edit-product");
const tbody = document.querySelector("tbody");
const view = document.getElementById("view-dialog");
const TagName = document.querySelector(".name span");
const Tagcategory = document.querySelector(".category span");
const Tagquantity = document.querySelector(".quantity span");
const TagNetPrice = document.querySelector(".view-price span");
const TagSoldOut = document.querySelector(".view-sold span");

// ======================= HIDE / SHOW ====================
function show(element) {
    element.style.display = "block";
}
function hide(element) {
    element.style.display = "none";
}

function viewProduct(index) {
    show(view);
    TagName.textContent = allProduct[index].name;
    Tagcategory.textContent = allProduct[index].category;
    Tagquantity.textContent = allProduct[index].quantity;
    TagNetPrice.textContent = allProduct[index].price;
    TagSoldOut.textContent = "Hello World";
}
function getData() {
    let data = {};
    data.name = productName.value;
    data.category = productCategory.value;
    data.quantity = productQuantity.value;
    data.price = productPrice.value;
    ProcductData.product.push(data);
    window.location.reload()
    localStorage.setItem("product", JSON.stringify(ProcductData.product));
}
function renderProduct(data, id) {
    let tRows = document.createElement("tr");
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
    iconDelete.classList.add("remove");
    iconDelete.id = id;

    let iconEdit = document.createElement("i");
    iconEdit.classList.add("material-icons");
    iconEdit.textContent = "edit";
    iconEdit.classList.add("edit");
    iconEdit.id = id;

    let iconView = document.createElement("i");
    iconView.classList.add("material-icons");
    iconView.textContent = "visibility";
    iconView.id = id;
    iconView.classList.add("view");

    tdAction.appendChild(iconDelete);
    tdAction.appendChild(iconEdit);
    tdAction.appendChild(iconView);

    tdId.textContent = id + 1;
    tdName.textContent = data.name;
    tdCategory.textContent = data.category;
    tdQuntity.textContent = data.quantity;
    tdPrice.textContent = data.price;
    tdTotalPrice.textContent = parseInt(data.quantity) * parseInt(data.price);

    tRows.appendChild(tdId);
    tRows.appendChild(tdName);
    tRows.appendChild(tdCategory);
    tRows.appendChild(tdQuntity);
    tRows.appendChild(tdPrice);
    tRows.appendChild(tdTotalPrice);
    tRows.appendChild(tdAction);
    tbody.appendChild(tRows);
}

let allProduct = ProcductData.product;
function edit(index) {
    productName.value = ProcductData.product[index].name;
    productCategory.value = ProcductData.product[index].category;
    productQuantity.value = ProcductData.product[index].quantity;
    productPrice.value = ProcductData.product[index].price;
    editBtn.addEventListener("click", () => {
        ProcductData.product[index].name = productName.value;
        ProcductData.product[index].category = productCategory.value;
        ProcductData.product[index].quantity = productQuantity.value;
        ProcductData.product[index].price = productPrice.value;
        window.location.reload()
        localStorage.setItem("product", JSON.stringify(ProcductData.product));
        hide(addProductForm);
    });
}
for (let i = 0; i < allProduct.length; i++) {
    renderProduct(allProduct[i], i);
}
const removeBtn = document.querySelectorAll(".remove");
const editBtns = document.querySelectorAll(".edit");
const viewBtn = document.querySelectorAll(".view");
// =========research product=======

function searchListproduct() {
    let trs = document.querySelectorAll("tbody tr");
    let input = search.value.toLowerCase();
    for (let tr of trs) {
        let listProduct = tr.firstElementChild.nextElementSibling.textContent;
        if (listProduct.includes(input.toLowerCase())) {
            tr.style.display = "";
        } else {
            tr.style.display = "none";
        }
    }

}

let search = document.querySelector("#searchProduct");
search.addEventListener("keyup", searchListproduct)


for (let btn of viewBtn) {
    btn.addEventListener("click", () => {
        viewProduct(btn.id);
    });
}
// edit product
for (let btn of editBtns) {
    btn.addEventListener("click", () => {
        hide(addBtn);
        show(editBtn);
        show(addProductForm);
        edit(btn.id);
    });
}

// remove btn

for (let remove of removeBtn) {

    remove.addEventListener("click", () => {
        let ifConfirm = window.confirm("Are you sur you want to delete?");
        if (ifConfirm == true) {
            allProduct.splice(remove.id, 1);
            remove.parentElement.parentElement.remove();
            localStorage.setItem("product", JSON.stringify(allProduct));
            location.reload();
        }
    });



    // remove.addEventListener("click", () => {
    //   allProduct.splice(remove.id, 1);
    //   remove.parentElement.parentElement.remove();
    //   localStorage.setItem("product", JSON.stringify(allProduct));
    //   location.reload();
    // });
} 
dailogBtn.addEventListener("click", () => {
    show(addBtn);
    hide(editBtn);
    show(addProductForm);
});
addBtn.addEventListener("click", () => {
    getData();
    hide(addProductForm);
});
cancelBtn.addEventListener("click", () => {
    hide(addProductForm);
});

function cancel() {
    hide(view)
}
const backBtn = document.querySelector(".back");
backBtn.addEventListener("click", goBack);

function goBack() {
    hide(viewDialog);

}

// remove
// edit
// view
