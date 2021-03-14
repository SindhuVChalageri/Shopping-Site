fetch("Cosmetic.json")
.then((response)=>{
   return response.json();
    
})
.then((data)=>{
    var sin=data;
    // document.getElementById("sindhu").innerHTML=data[0].id;
    // console.log(data[0]);
    appendData(data);
})


function appendData(data){
    var main=document.getElementById("list");
    
    for(var i=0;i<data.length;i++){
    
        var p=document.createElement("div");
        p.classList.add("p-3","cards")
        let product=`
        <a onclick="setId(${data[i].id})"> 
        <div class="card" style="width: 18rem;">
        <img class="card-img-top" src="${data[i].image}" alt="image">
        <div class="card-body">
          <h5 class="card-title">${data[i].name}</h5>
          <p class="card-text">MRP: ${data[i].price}</p>
        </div>
        </div>
      </a>`
        p.innerHTML+=product;
        main.appendChild(p);
        
    }    
}    
function setId(id){
    // localStorage.setItem("prdId",id);
    window.document.location="Landing.html"+"?id="+id;
}    


function applyFilters(){
    let b=document.getElementsByClassName("category");
    let categoryArray=[];
    let colorArray=[];
    let finishArray=[];
    let coverageArray=[];

    let categoryListingArray=[];
    let colorListingArray=[];
    let finishListingArray=[];
    let coverageListingArray=[];

  let mainArray=[];

  let listingArray=[];

  for(let x of b){
      if(x.checked){
        categoryArray.push(x.value);
      }
  }

  let c=document.getElementsByClassName("color");
  for(let x of c){
      if(x.checked){
          colorArray.push(x.value);
      }
  }

  let p=document.getElementsByClassName("finish");
  for(let x of p){
      if(x.checked){
        finishArray.push(x.value);
      }
  }

  let p=document.getElementsByClassName("coverage");
  for(let x of p){
      if(x.checked){
        coverageArray.push(x.value);
      }
  }
  console.log(coverageArray);

  if(categoryArray.length!==0){
      for(let i=0;i<categoryArray.length;i++){
          for(let j=0;j<data.length;j++){
              if(categoryArray[i]===data[j].category){
                  categoryListingArray.push(data[j].id);
              }
          }
      }
      console.log(categoryListingArray);
  }

  if(colorArray.length!==0)
  {
      for(let i=0;i<colorArray.length;i++){
          for(let j=0;j<data.length;j++){
             if(colorArray[i]===data[j].color){
                 colorListingArray.push(data[j].id);
            }
          }
      }
      console.log(colorListingArray);
  }

  if(finishArray.length!==0){
      for(let i=0;i<finishArray.length;i++){
          for(let j=0;j<data.length;j++){
              if(finishArray[i]===data[j].finish){
                finishListingArray.push(data[j].id);

              }
             
          }
      }
      console.log(finishListingArray);
  }

  if(categoryArray.length!==0){
    for(let i=0;i<categoryArray.length;i++){
        for(let j=0;j<data.length;j++){
            if(categoryArray[i]===data[j].finish){
              categoryListingArray.push(data[j].id);

            }
           
        }
    }
    console.log(categoryListingArray);
}
// ------------------------------------ from here
  let temp=0;

  if (categoryListingArray.length !== 0 && colorListingArray.length !== 0 && categoryListingArray.length!==0) {
      for(let i=0;i<categoryListingArray.length;i++){
          for(let j=0;j<colorListingArray.length;j++){
              for(let l=0;l<categoryListingArray.length;l++){
              if((brandListingArray[i]==colorListingArray[j])&&(colorListingArray[j]==priceListingArray[l])){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===brandListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp===0){
                      mainArray.push(brandListingArray[i]);
                  }
              }
          }
      }
      }
  }
  else if (brandListingArray.length !== 0 && colorListingArray.length !== 0) {
      for(let i=0;i<brandListingArray.length;i++){
          for(let j=0;j<colorListingArray.length;j++){
              if(brandListingArray[i]==colorListingArray[j]){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===brandListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp===0){
                      mainArray.push(brandListingArray[i]);
                  }
              }
          }
      }
  }
  else if (brandListingArray.length !== 0 && priceListingArray.length !== 0) {
      for(let i=0;i<brandListingArray.length;i++){
          for(let j=0;j<priceListingArray.length;j++){
              if(brandListingArray[i]==priceListingArray[j]){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===brandListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp===0){
                      mainArray.push(brandListingArray[i]);
                  }
              }
          }
      }
  }
  else if (priceListingArray.length !== 0 && colorListingArray.length !== 0) {
      for(let i=0;i<priceListingArray.length;i++){
          for(let j=0;j<colorListingArray.length;j++){
              if(priceListingArray[i]==colorListingArray[j]){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===priceListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp===0){
                      mainArray.push(priceListingArray[i]);
                  }
              }
          }
      }
  }
  else if(brandListingArray.length!==0){
      for(let i=0;i<brandListingArray.length;i++){
          mainArray.push(brandListingArray[i]);
      }
  }
  else if(colorListingArray.length!==0){
      for(let i=0;i<colorListingArray.length;i++){
          mainArray.push(colorListingArray[i]);
      }
  }
  else if(priceListingArray.length!==0){
      for(let i=0;i<priceListingArray.length;i++){
          mainArray.push(priceListingArray[i]);
      }
  }

  console.log(mainArray);

  for(let i=0;i<mainArray.length;i++){
      let elem=data.find((e)=>{
          if(mainArray[i]===e.id){
              return true;
          }
      })
      listingArray.push(elem);
  }
  console.log(listingArray);
  document.getElementById("mainId").innerHTML=""; 
  display(listingArray);
  if(listingArray.length===0){
      if(brandListingArray.length!==0 || colorListingArray.length!==0){
      let res=document.getElementById("mainId");
      res.innerHTML="Product Not Found";
      res.style.color="red";
      res.style.fontWeight="bolder";
      res.style.fontSize="20px";
      }
      else{
          display(data);
      }
  }
     
}

//-----------------------------------
var input=document.getElementById("myInput");
console.log(input);
input.addEventListener('onKeyUp',(data)=>{
    console.log(data);
});

var char=document.getElementById("CharacterList");
var searchbar=document.getElementById("myInput");
 sin=[];

searchbar.addEventListener('keyup', (e)=>{
    var searchString=e.target.value;
    var filteredCharacters=sin.filter((element)=>{
        return element.name.includes(searchString);
        
    });
    console.log(filteredCharacters);
})