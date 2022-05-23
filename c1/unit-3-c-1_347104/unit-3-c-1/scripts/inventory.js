var product=JSON.parse(localStorage.getItem("products"))
product.map(function(elem){
    var box=document.createElement("div")
    var img=document.createElement("img")
    img.src=elem.img
    var type=document.createElement("p")
    type.innerText=elem.type
    var desc=document.createElement("p")
    desc.innerText=elem.desc
   var price=document.createElement("p")
    price.innerText=elem.price
    var btn=document.createElement("button")
    btn.innerText="remove_products"
      btn.setAttribute("id","remove_product")
    btn.addEventListener("click",function(){
        removeitem(elem.index)
    });
    btn.addEventListener("click",function(){
        localStorage.setItem("remove",index)
    })
    box.append(img,type,desc,price,btn)
    document.querySelector("#all_products").append(box)
})
function removeitem(elem,index){
    product.splice(index,1);
    console.log(product)
    localStorage.setItem("products",JSON.stringify(product))
    window.location.reload()
}
removeitem(elem,index)