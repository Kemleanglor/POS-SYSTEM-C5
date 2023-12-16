// -------get value ----------

let dialog_category = document.getElementById("category-dialog");
let searchCategory = document.getElementById("search");
let btnAddCategory = document.getElementById("btn-add");

let namegategory = document.querySelector("#CategoryName");
let idcategory = document.getElementById("idcategory");
let action = document.getElementById("action");

// console.log(namegategory,idcategory)

// ------------------------Show and hid daialong ------------------------
function showCategory(element) {
    element.style.display = "block";
}
function hideCategory(element) {
    element.style.display = "none";
}

// -----------------save and store category reload in localstorage ---------------

function saveCategory() {
    localStorage.setItem("saveCategory", JSON.stringify(categoryData.category));
}

// ----------------reload category------------------------

function reloadCategory() {
    let reload = JSON.parse(localStorage.getItem("saveCategory"));
    if (reload !== undefined) {
        category = reload;
    }
    
}

// ------------------create and cancell when create element--------
function onCancel() {
    hideCategory(dialog_category);
}
function addCategory() {
    showCategory(dialog_category);
}

// -----------------Remove and edite category-----------

function removeCategory(){ }
function editCategory(){ }

//  -----------------create category-----------------

function onCreate() {
    let categoryID = categoryData.latestId;
    if (categoryID === null || categoryID === 0) {
        categoryID = 1;
    } else {
        categoryID += 1
    }
    categoryData.latestId = categoryID;

    let storeObject = {
        id: categoryID,
        name: CategoryName.value,
    };

    categoryData.category.push(storeObject);

    saveCategory()
    getCategory()
}

function getCategory() {

    reloadCategory()

    let tbody = document.querySelector("tbody");
    tbody.remove();

    let newTbody = document.createElement("tbody");
    for (let data of  category) {
        console.log(data)
        let trow = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdAction = document.createElement("td");
        
        let iconedite = document.createElement("i");
        iconedite.classList.add("material-icons");
        iconedite.textContent = "edite";
        tdAction.appendChild(iconedite)
        let icondelete = document.createElement("i");
        icondelete.classList.add("material-icons");
        icondelete.textContent = "delete";
        tdAction.appendChild(icondelete)


        tdId.textContent = data.id;
        tdName.textContent = data.name;

        trow.appendChild(tdId)
        trow.appendChild(tdName)
        trow.appendChild(tdAction)
        newTbody.appendChild(trow)
    }
    let table = document.querySelector("table");
    table.appendChild(newTbody)
}
function btnCategory() {
    showCategory(dialog_category);
    idcategory.value = "";
    namegategory.value = "";
}

// -----------Buthon that we use-------------
btnAddCategory.addEventListener("click", btnCategory);

let categoryData = {
    category: [],
    latestId: null
}