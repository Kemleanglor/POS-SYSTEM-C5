
//========================= Get Product Data ================

let ProductStorage = JSON.parse(localStorage.getItem("product"));

// ======================= HIDE / SHOW ====================
function hid(element){
    element.style.display ="none";
    
}
function show(element){
    element.style.display ="block";
    
}

//===========================LOCAL STORAGE ==================

function saveCategory() {
    localStorage.setItem("category", JSON.stringify(CategoryData.category));
    
  }
  
  function loadCategory() {
    let categoryStorage = JSON.parse(localStorage.getItem("category"));
    if (categoryStorage !== null) {
        CategoryData.category = categoryStorage;
    }
  }


//========= Update the View======================

function renderCategory(){
    let tbody = document.querySelector("tbody");
    tbody.remove();
    let newTbody = document.createElement("tbody");
    let datas =0;
    for (let data of CategoryData.category){
        let tRows= document.createElement("tr");
        tRows.dataset.index=datas
        let tdId = document.createElement("td");
        let tdName=document.createElement("td");
        let tdAction=document.createElement("td");
        let iconDelete = document.createElement("i");
        iconDelete.classList.add("material-icons");
        iconDelete.textContent="delete";
        iconDelete.addEventListener("click",removeCategory)

        let iconEdit = document.createElement("i");
        iconEdit.classList.add("material-icons");
        iconEdit.textContent="edit";
        iconEdit.addEventListener("click",editCategory)

        let iconView = document.createElement("i");
        iconView.classList.add("material-icons");
        iconView.textContent="visibility";

        tdId.textContent=data.id;
        tdName.textContent=data.name;
        tdAction.appendChild(iconDelete);
        tdAction.appendChild(iconEdit);
        tdAction.appendChild(iconView);

        tRows.appendChild(tdId)
        tRows.appendChild(tdName);
        tRows.appendChild(tdAction);

        newTbody.appendChild(tRows);

        datas+=1
    }

    table.appendChild(newTbody);
}


//=======================Edit  and Remove Procduct==================
function editCategory(event){
    let index = event.target.parentElement.parentElement.dataset.index;
    let categorys = CategoryData.category[index];
    document.getElementById("name").value=categorys.name;
    document.getElementById("dct").value=categorys.discription;

    show(dialog_catagory);
    let editHeader = document.querySelector("header");
    editHeader.textContent="Edit Category";
    let btnEdit = document.querySelector("footer").lastElementChild;
    btnEdit.textContent="Edit";
    
    editIndex=index

}

function removeCategory(event){
    let index = event.target.parentElement.parentElement.dataset.index;

    CategoryData.category.splice(index,1);

    saveCategory();

    renderCategory();

}


// ==================Buntton CanCel and Add Category to array==========

function OnCancel(){
    hid(dialog_catagory)
}

function OnAdd(){
    hid(dialog_catagory)

    let categoryId = CategoryData.lastestId;
    if (categoryId === null || CategoryData.category.length === 0) {
        categoryId = 1;

    }
    else if (editIndex === null) {
        categoryId= categoryId + 1
    }
    else  {
        categoryId = categoryId
    }
    //---------------- update lastest ID to the product list----------
    CategoryData.lastestId = categoryId;
    let categories={};
    categories.id=categoryId;
    categories.name=document.getElementById("name").value;
    categories.discription=document.getElementById("dct").value;
    if (editIndex===null){
        CategoryData.category.push(categories);
    }
    else{
        CategoryData.category[editIndex]=categories;
    }
    editIndex=null;

    let addHeader = document.querySelector("header");
    addHeader.textContent="Create Category";
    let btnAdd = document.querySelector("footer").lastElementChild;
    btnAdd.textContent="Add";

    //========= save category===========
    saveCategory()

    //========== Update the view=========
    renderCategory()
}


function Addcategory(){
    show(dialog_catagory)
}


let dialog_catagory = document.getElementById("category-dialog");

let btnAddcategory = document.getElementById("btn-add");
btnAddcategory.addEventListener("click",Addcategory);
let searchCategory = document.getElementById("search");

let table = document.querySelector("table")

let editIndex=null;

let CategoryData={
    category:[],
    lastestId:null,
}

loadCategory()

renderCategory()





