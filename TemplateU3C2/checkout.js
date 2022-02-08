document.getElementById("submit").addEventListener("click",myfun)
function myfun()
{
    var name = document.getElementById("name").value
    var address = document.getElementById("address").value
    var num = document.getElementById("number").value
 
   setTimeout(function()
   {
       alert("order succefull")
   },3000)

   window.location.href="index.html"
}