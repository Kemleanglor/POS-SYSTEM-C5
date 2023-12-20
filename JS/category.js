
let dialog_category = document.getElementById("category-dialog");
let searchCategory = document.getElementById("search");

let nameCategory = document.querySelector("#idcategory")
let namegategory = document.querySelector("#CategoryName");


// -----------Buthon that we use-------------
let btnAddCategory = document.getElementById("btn-add");
btnAddCategory.addEventListener("click", addCategory);


// ------------------------Show and hid daialong ------------------------
function showCategory(element) {
    element.style.display = "block";
}
function hideCategory(element) {
    element.style.display = "none";
}

// -----------------save and store category reload in localstorage ---------------

function saveCategory() {
    localStorage.setItem("categoryData",JSON.stringify(categoryData));

}

function reloadCategory() {
    let reload =JSON.parse(localStorage.getItem("category"));
    if (reload !== null){
        categoryData.category = reload;
    }
}

function storeCategory() {
    let listCategory = {};
}

// ------------------create and cancell when create element--------
function onCancel() {
    hideCategory(dialog_category);
}

function addCategory() {
    showCategory(dialog_category);

}

// -----------------Remove and edite category-----------

function removeCategory() {

}

function editCategory() {

}
//  -----------------create category-----------------

function onCreate() {
    let categoryID = categoryData.latestId;
    if (categoryID === null) {
        categoryID = 1;
    } else {
        categoryID += 1
    }
    categoryData.latestId = categoryID;
    let storeObject = {
        id:categoryID ,
        name:CategoryName.value,
    };
    categoryData.category.push(storeObject);

    saveCategory()

    getCategory()
}

function getCategory(){

    tbody.remove();
    let newTbody = document.createElement("tbody");
    for (let data of categoryData.category){
        // console.log(data)
        let trow = document.createElement("tr");
        let tdId = document.createElement("td");
        let tdName = document.createElement("td");
        let tdAction = document.createElement("td");
// -----------icon delete---------------
        let icondelete = document.createElement("i");
        icondelete.classList.add("material-icons");
        icondelete.textContent="delete";
// ------------icon edit --------------------
        let iconedite = document.createElement("i");
        iconedite.classList.add("material-icons");
        iconedite.textContent="edit";
        tdId.textContent = data.id;
        tdName.textContent = data.name;

        tdAction.appendChild(iconedite);
        tdAction.appendChild(icondelete);
        trow.appendChild(tdId)
        trow.appendChild(tdName)
        trow.appendChild(tdAction)
        newTbody.appendChild(trow)
        console.log(tbody)
        // table.appendChild(tbody)
        categoryData.category.push(newTbody)

    }
    hideCategory(dialog_category);
}
// main
let idcategory = document.getElementById("idcategory");
let categoryName = document.getElementById("categoryName");
let action = document.getElementById("action");
let tbody = document.querySelector("tbody");

let categoryData = {
    category: [],
    latestId: null
}

getCategory()
