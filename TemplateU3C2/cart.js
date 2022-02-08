let maincartarr = JSON.parse(localStorage.getItem("cart"))
let mainarr=[];

function constructor(n,i,p)
{
    this.Name=n
    this.image=i
    this.price=p
    
}
maincartarr.map(function(elem)
{
      
    let div1=document.createElement("div")
    div1.setAttribute("id","singleDish")

    let name = document.createElement("h4")
    name.textContent=elem.strMeal;

    let image = document.createElement("img")
    image.src=elem.strMealThumb;
    image.setAttribute("id","dishimage")

    let price = document.createElement("h5")
    price.textContent=`${Math.round(Math.random()*500)}`
   
    // let remove = document.createElement("button")
    // remove.setAttribute("id","remove")
    // remove.textContent="Remove Item"
    // remove.addEventListener("click",function()
    // {
    //     removeAttributem(index)
    // })

    

      div1.append(name,image,price)
      var mainobj = new constructor(name.textContent,image.src,price.textContent)
      mainarr.push(mainobj)
      localStorage.setItem("mainarr",JSON.stringify(mainarr))
      document.getElementById("cart").append(div1)
})


var total = mainarr.reduce(function(cv,ac)
{
    document.getElementById("total").textContent=0
    return cv + (+ac.price)
},0)
document.getElementById("total").textContent=`Your Total Bill Is : ${total}`

