menuListArray = ["Pizza Vegetariana",
                  "Pizza de frango ",
                  "Pizza portuguesa",
                  "Pizza quatro queijos",
                  "Pizza de calabresa",
                  "Pizza extravaganza"];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0; i<menuListArray.length;i++){
htmldata=htmldata+ menuListArray[i] + '<br>'
 
}
document.getElementById("displaymenu").innerHTML = htmldata;

}

function addItem(){
var htmldata="";
var imgtags='<img id="im1" src="images/pizzaImg.png"/'
varitem=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=htmldata+imgtags+ menuListArray[i]+'<br>';

}
document.getElementById("displayAddedMenu").innerHTML = htmldata

function addTop(){
var item=documet.getElementById("addItem").value;
menuListArray.push(item);
addItem();

}