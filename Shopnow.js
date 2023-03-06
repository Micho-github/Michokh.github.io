var ImageSources = ["Image/imgheader1.png", "Image/imgheader2.jpg", "Image/imgheader3.jpg", "Image/imgheader4.jpg", "Image/imgheader5.jpg"];
var ImageTitles = ["Clothes Category","Books Category","Gaming Category","Furniture Category","Home Appliances Category"];
var CategoryLink = ["ShopNow-Clothes-Category.html","ShopNow-Books-Category.html","ShopNow-Gaming-Category.html","ShopNow-Furniture-Category.html","ShopNow-Appliances-Category.html"]
var index = 0;
function leftbt()
{
  if(index === 0){
  index=ImageSources.length-1;
  }
  else
  {
    index=index-1;
  }
    document.getElementById("main-image").src=ImageSources[index];
    document.getElementById("Category-Title-On-hover").innerHTML=ImageTitles[index];
    document.getElementById("category-page-link").href=CategoryLink[index];
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
    document.getElementById("main-image").src=ImageSources[index];
    document.getElementById("Category-Title-On-hover").innerHTML=ImageTitles[index];
    document.getElementById("category-page-link").href=CategoryLink[index];
}
function start()
{
  setInterval (function timer(){
  if (index === ImageSources.length-1) {
    index = 0;
  }
  else
  {
  index=index+1;
  }
  document.getElementById("main-image").src=ImageSources[index];
  document.getElementById("Category-Title-On-hover").innerHTML=ImageTitles[index];
  document.getElementById("category-page-link").href=CategoryLink[index];
} , 5000);

  var leftbutton = document.getElementById("leftbutton");
  leftbutton.addEventListener("click",leftbt,false);
  var rightbutton = document.getElementById("rightbutton");
  rightbutton.addEventListener("click",rightbt,false);


}
window.addEventListener("load",start,false);