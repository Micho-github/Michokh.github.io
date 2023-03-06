var ImageSources = ["Image/T-shirt.jpg", "Image/T-shirt-front.jpg", "Image/T-shirt-back.jpg"];
var index = 0;

  function cart()
  {
    var currency = document.getElementById("Price-Currency").innerHTML;
    var price = document.getElementById("Price-Value").innerHTML;
    price=parseFloat(price);
    var color =  document.getElementById("Item-Color").value;
    var size = document.getElementById("Item-Size").value;
    var quantity = document.getElementById("Quantity").value;
    quantity= parseInt(quantity);
    var total = price * quantity;
    alert( currency +" "+ total.toFixed(2) + " is the total \n"+ quantity + " " + size + " " + color + " T-shirts added to the cart.\n" );

  }
function AboutDisplay()
{
  var AboutItem= document.getElementById("About-Item")
  if(AboutItem.style.display == "none")
  {
  document.getElementById("About-Item-Button").innerHTML="Hide About This Item:";
  AboutItem.style.display="block";
  }
  else
  {
    document.getElementById("About-Item-Button").innerHTML="Show About This Item:";
    AboutItem.style.display = "none";
  }
}
function leftbt()
{
  if(index === 0){
  index=ImageSources.length-1;
  }
  else
  {
    index=index-1;
  }
    document.getElementById("ShownImage").src=ImageSources[index];
}
function rightbt()
{
  if(index === ImageSources.length-1 )
  {
  index = 0;
  }
  else
  {
    index=index+1;
  }
    document.getElementById("ShownImage").src=ImageSources[index];
}
function imagebutton1()
{
    document.getElementById("ShownImage").src="Image/T-shirt.jpg";
    index=0;
}
function imagebutton2()
{
    document.getElementById("ShownImage").src="Image/T-shirt-front.jpg";
    index=1;
}
function imagebutton3()
{
    document.getElementById("ShownImage").src="Image/T-shirt-back.jpg";
    index=2;
}
function start()
{
    var leftbutton = document.getElementById("leftbutton");
  leftbutton.addEventListener("click",leftbt,false);
  var rightbutton = document.getElementById("rightbutton");
  rightbutton.addEventListener("click",rightbt,false);
  var image1 = document.getElementById("imagebutton1");
  image1.addEventListener("click",imagebutton1,false);
  var image2 = document.getElementById("imagebutton2");
  image2.addEventListener("click",imagebutton2,false);
  var image3 = document.getElementById("imagebutton3");
  image3.addEventListener("click",imagebutton3,false);
  var AboutItemButton = document.getElementById("About-Item-Button");
  AboutItemButton.addEventListener("click",AboutDisplay,false);
}
window.addEventListener("load",start,false);
