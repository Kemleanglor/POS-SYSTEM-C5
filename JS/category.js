let dialog_catagory = document.getElementById("category-dialog");
let searchCategory = document.getElementById("search");
let tbody = document.querySelectorAll("tbody");
let btnAddcategory = document.getElementById("btn-add");

btnAddcategory.addEventListener("click",createcategory);


function hidCategory(element){
    dialog_catagory.style.display ="none";
    
}
function showCategory(element){
    dialog_catagory.style.display ="block";
    
}
function storeCategory(){
    let lisCategory = []
}
function Oncancell(){}
function Oncreate(){}

function createcategory(){
    let tr = document.createElement("tr");
    let tdcategoryID = document.createElement("td");
    let tdcategoryName = document.createElement("td");
    let tdAction = document.createElement("td");
    let actionedite = document.createElement("div");
    let actiondelate = document.createElement("div");
    
    tdcategoryID.textContent =idcategory.value;
    tdcategoryName.textContent =CategoryName.value;
    actionedite.src = "";
    actiondelate.src = "";
}
// main
let idcategory = document.getElementById("idcategory");
let CategoryName = document.getElementById("Category Name");
let Action = document.getElementById("Action");
