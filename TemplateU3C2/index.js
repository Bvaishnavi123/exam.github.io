
let newdata =[];
let cartarr = JSON.parse(localStorage.getItem("cart"))||[]


async function dish()
{
    let res = await fetch(" https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
    let alldish = await res.json()
 
    
    console.log(alldish.meals)
    displaydish(alldish.meals)
}
dish()

function constructor(n,i,p)
{
    this.Name=n
    this.image=i
    this.price=p
    
}
function displaydish(data){
    // console.log(data)
    data.map(function(el)
    {
       
       let div1=document.createElement("div")
       div1.setAttribute("id","singleDish")

       let name = document.createElement("h4")
       name.textContent=el.strMeal;

       let image = document.createElement("img")
       image.src=el.strMealThumb;
       image.setAttribute("id","dishimage")

       let price = document.createElement("h5")
       price.textContent="Price:" + Math.round(Math.random()*500)


       let cartbutton = document.createElement("button")
       cartbutton.textContent="Add To Cart"
       cartbutton.setAttribute("id","addtocart")
       cartbutton.addEventListener("click",function()
       {
           addtocartelememt(el)
       })

    div1.append(name,image,price,cartbutton)
    // console.log(div1)
    document.getElementById("menu").append(div1)
     
      
  var newdataobject= new  constructor(name.textContent,image.src,price.textContent)
       newdata.push(newdataobject)
    //    console.log(newdataobject)

    
    })

    

    
}

function  addtocartelememt(el)
{
    cartarr.push(el)
    // console.log(cartarr)
    localStorage.setItem("cart",JSON.stringify(cartarr))
    var c =cartarr.length
    document.getElementById("count").textContent=`Items In Cart:${c}`;
}

document.getElementById("goto").addEventListener("click",function()
{
    window.location.href="cart.html"
})