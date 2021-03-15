var data;
var sin;
fetch("Cosmetic.json")
.then((response)=>{
   return response.json();
    
})
.then((mydata)=>{
    sin=mydata;
    data=mydata;
    // document.getElementById("sindhu").innerHTML=data[0].id;
    // console.log(data[0]);
    // appendData(data);
    display(data);
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
    let categoryArray=[];
    
    let finishArray=[];
    let coverageArray=[];
    
    let categoryListingArray=[];
    
    let finishListingArray=[];
    let coverageListingArray=[];
    
    let mainArray=[];
    
    let listingArray=[];
    
    let b=document.getElementsByClassName("category");
  for(let x of b){
      if(x.checked){
        categoryArray.push(x.value);
      }
  }

  

  let p=document.getElementsByClassName("finish");
  for(let x of p){
      if(x.checked){
        finishArray.push(x.value);
      }
  }

  let cvg=document.getElementsByClassName("coverage");
  for(let x of cvg){
      if(x.checked){
        coverageArray.push(x.value);
      }
  }
//   console.log(coverageArray);

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

  if(coverageArray.length!==0){
    for(let i=0;i<coverageArray.length;i++){
        for(let j=0;j<data.length;j++){
            if(coverageArray[i]===data[j].coverage){
              coverageListingArray.push(data[j].id);

            }
           
        }
    }
    console.log(coverageListingArray);
}
// ------------------------------------ from here

  let temp=0;

  if(categoryListingArray.length !== 0 && finishListingArray.length !== 0 && coverageListingArray.length!==0) {
      for(let i=0;i<categoryListingArray.length;i++){
          for(let j=0;j<finishListingArray.length;j++){
              for(let l=0;l<coverageListingArray.length;l++){
              if((categoryListingArray[i]==finishListingArray[j])&&(finishListingArray[j]==coverageListingArray[l])){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===categoryListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp==0){
                      mainArray.push(finishListingArray[j]);
                  }
                  console.log("cat fin cov")
              }
          }
      }
      }
  }
  else if(categoryListingArray.length!==0 && finishListingArray.length!==0) {
      console.log("inside");
      for(let i=0;i<categoryListingArray.length;i++){
          for(let j=0;j<finishListingArray.length;j++){
              if(categoryListingArray[i]==finishListingArray[j]){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===categoryListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp===0){
                      mainArray.push(categoryListingArray[i]);
                  }
                  console.log("cat fin")
              }
          }
      }
  }
  else if(categoryListingArray.length !== 0 && coverageListingArray.length !== 0) {
      for(let i=0;i<categoryListingArray.length;i++){
          for(let j=0;j<coverageListingArray.length;j++){
              if(categoryListingArray[i]==coverageListingArray[j]){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===categoryListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp===0){
                      mainArray.push(categoryListingArray[i]);
                  }
                  console.log("cat cov")
              }
          }
      }
  }
  else if(coverageListingArray.length !== 0 && finishListingArray.length !== 0) {
      for(let i=0;i<coverageListingArray.length;i++){
          for(let j=0;j<finishListingArray.length;j++){
              if(coverageListingArray[i]==finishListingArray[j]){
                  for(let k=0;k<mainArray.length;k++){
                      if(mainArray[k]===coverageListingArray[i]){
                          temp++;
                      }
                  }
                  if(temp===0){
                      mainArray.push(coverageListingArray[i]);
                  }
                  console.log("fin cov")
              }
          }
      }
  }
  else if(categoryListingArray.length!==0){
      for(let i=0;i<categoryListingArray.length;i++){
          mainArray.push(categoryListingArray[i]);
      }
      console.log("cat")
  }
  else if(finishListingArray.length!==0){
      for(let i=0;i<finishListingArray.length;i++){
          mainArray.push(finishListingArray[i]);
      }
      console.log("fin")
  }
  else if(coverageListingArray.length!==0){
      for(let i=0;i<coverageListingArray.length;i++){
          mainArray.push(coverageListingArray[i]);
      }
      console.log("cov")
  }
  else{
    console.log("empty")
  }

  console.log(mainArray);

  for(let i=0;i<mainArray.length;i++){
      let elem=data.find((e)=>{
          if(mainArray[i]===e.id){
              return true;
          }
      });
      listingArray.push(elem);
  }
  console.log(listingArray);
  document.getElementById("list").innerHTML=""; 
  display(listingArray);
  if(listingArray.length===0){
      if(categoryArray.length!==0 || finishArray.length!==0 || coverageArray.length!==0){
      let res=document.getElementById("list");
      res.innerHTML="Product Not Found";
    //   res.style.color="red";
      res.style.fontWeight="bolder";
      res.style.fontSize="20px";
      }
      else{
          display(data);
      }
  }
   
}

function display(newdata){
    document.getElementById("list").innerHTML=""; 
    appendData(newdata);
}

//-----------------------------------
var input=document.getElementById("myInput");
console.log(input);
input.addEventListener('keyUp',(data)=>{
    console.log(data);
});

var char=document.getElementById("CharacterList");
var searchbar=document.getElementById("myInput");
 sin=[];

searchbar.addEventListener('keyup', (e)=>{
    var searchString=e.target.value;
    var filteredCharacters=sin.filter((element)=>{
        let ele=element.name.toLowerCase()
        return ele.includes(searchString);
        
    });
    console.log(filteredCharacters);
    display(filteredCharacters)
    
})
