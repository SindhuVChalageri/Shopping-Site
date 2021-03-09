var index;

fetch("Cosmetic.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    let param=new URL(document.location).searchParams;
    index=param.get("id")-1;
    appendData(data);
})
.catch(function(err){
    console.log(err);
})

function appendData(data){
    
    // var index=localStorage.getItem("prdId")-1;
    document.getElementById("img1").src=data[index].image;
    document.getElementById("name").innerHTML=data[index].name;
    document.getElementById("weight").innerHTML="("+data[index].weight+"gm)";
    document.getElementById("rating").innerHTML="Rating"+data[index].rating+`<i class="fa fa-star"></i>`;
    document.getElementById("price").innerHTML="MRP: "+data[index].price;
    document.getElementById("color").innerHTML="Color : "+data[index].color;
    document.getElementById("finish").innerHTML="Color : "+data[index].finish;
    document.getElementById("coverage").innerHTML="Coverage : "+data[index].coverage;
    document.getElementById("category").innerHTML="Category : "+data[index].category;


}

function myCart(){

    if (localStorage.getItem('carts') == null) {
        
        let cart=[];
        let size=cart.length;
        cart[size]=index;
        localStorage.setItem("carts",JSON.stringify(cart));
        console.log(cart);

    }
    else{
        let cart=localStorage.getItem("carts");
        //console.log(JSON.parse(cart));
        let m=JSON.parse(cart)
        let p=m.length
        m[p]=index;
        localStorage.setItem("carts",JSON.stringify(m));
        
    }
    window.document.location="Cart.html"+"?id="+(index+1);
}