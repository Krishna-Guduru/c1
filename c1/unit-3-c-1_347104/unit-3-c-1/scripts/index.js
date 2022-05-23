//store the products array in localstorage as "products"
// document.getElementById("products").addEventListener
let arr=JSON.parse(localStorage.getItem("products"))|| []

function Addproducts(e){
event.preventDefault();
    var type=document.getElementById("type").value
    var desc=document.getElementById("desc").value
    var price=document.getElementById("price").value
    var img=document.getElementById("image").value
    console.log(type,desc,price,img)

let productObj={
    type:type,
    desc:desc,
    price:price,
    img:img,

}
arr.push(productObj)
console.log(arr)
localStorage.setItem("products",JSON.stringify(arr))
document.getElementById("type").value=null
document.getElementById("desc").value=null
document.getElementById("price").value=null
document.getElementById("image").value=null
}
