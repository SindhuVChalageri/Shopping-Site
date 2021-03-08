fetch("Cosmetic.json")
.then((response)=>{
    return response.json();
})
.then((data)=>{
    console.log(data);
    appendData(data);
})

function appendData(data){
    
    var index=localStorage.getItem("prdId")-1;
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