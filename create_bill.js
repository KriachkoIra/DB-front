var goods = [];

var cnt = 0;

var showFormButton = document.getElementById("showFormButton");
var addGoodButton = document.getElementById("addGoodButton");
var table = document.getElementById("goodsTable");

showFormButton.addEventListener("click", function() {
    var div = document.getElementById("addGoodDiv");
    if (div.style.display === "none") {
        div.style.display = "flex";
      } else {
        div.style.display = "none";
      }
});

addGoodButton.addEventListener("click", function() {
    var good = document.getElementById("good").value;
    var price = document.getElementById("price").value;

    if(!good || !price) return;

    var elem = {
        name: good,
        price: price
    }

    goods.push(elem);

    addToTable(good, price);
});

function addToTable(name, price){
    var table_row  = document.createElement('tr'); 
    table_row.id = ("row" + cnt);
    var cell1 = document.createElement('td');
    cell1.innerHTML = name;
    var cell2 = document.createElement('td');
    cell2.innerHTML = price;
    var cell3 = document.createElement('td');
    var btn = "<button type=\"button\"  onclick=\"deleteGood(" + cnt + ")\" class=\"btn btn-outline-dark edit-delete-btn\"><i class=\"fa-solid fa-trash\"></i></button>";
    cnt++;
    cell3.innerHTML = btn;

    table_row.appendChild(cell1);
    table_row.appendChild(cell2);
    table_row.appendChild(cell3);

    table.appendChild(table_row);
}

function deleteGood(num){
    goods[num] = null;
    var row = document.getElementById("row" + num);
    row.remove();

    for(let i=0; i<goods.length; i++){
        if(goods[i])
            console.log(goods[i].name + ", " + goods[i].price);
        else
            console.log("null");
    }
}