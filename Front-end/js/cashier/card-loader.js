import { itemArray } from "../../db/item.js";


let burgercards="";
let submarinecards="";
let friescards="";
let pastacards="";
let chickencards="";
let bevarages_cards="";

let burgercard_pack="";
let submarinecard_pack="";
let friescard_pack="";
let pastacard_pack="";
let chickencard_pack="";
let bevaragescard_pack="";


let burger_card = document.getElementById("burger-cards");
let submarine_card = document.getElementById("submarine-cards");
let fries_card = document.getElementById("fries-cards");
let pasta_card =document.getElementById("pasta-cards");
let chicken_card =document.getElementById("chicken-cards");
let bevarages_card=document.getElementById("bevarages-cards");

itemArray.forEach(element => {
    if(element.category==="Burger"){
     let card =`<div class="col">
                  <div class="card h-100">
                    <img style="width: 70%;" src="${element.url}"
                      alt="...">
                    <hr>
                    <div class="card-body m-auto  w-100">
                      <h4 class="card-title text-center">${element.itemName}</h4>
                      <div class="detail mt-3  d-flex justify-content-around ">
                        <p class="m-auto">#1</p>
                        <h5 class="d-flex m-auto"
                          style=" color: #FFA500; font-size: larger; font-family: Arial, Helvetica, sans-serif; font-weight: 700;">
                          Rs : ${element.price} /=</h5>
                        <button  onclick="add_to_card('${element.itemCode}', '${element.itemName}', ${element.price}, ${element.discount})" class="bg-transparent border-0 m-auto"><img style="width:50px;"
                            src="../../img/img/cart/cart.png.png" alt=""></button>
                      </div>
                    </div>
                  </div>
                </div>`;

                burgercards+= card;
    }
    
    
});

burgercard_pack = `<div id="burger-cards" class="card p-5">
                    <div class="row row-cols-1 row-cols-md-3 g-4">
                      ${burgercards}
                     </div>
                  </div>`;


burger_card.innerHTML=burgercard_pack;

itemArray.forEach(element=>{
  if(element.category==="Submarines"){
    let card =`<div class="col">
                 <div class="card h-100">
                   <img style="width: 70%;" src="${element.url}"
                     alt="...">
                   <hr>
                   <div class="card-body m-auto  w-100">
                     <h4 class="card-title text-center">${element.itemName}</h4>
                     <div class="detail mt-3  d-flex justify-content-around ">
                       <p class="m-auto">#1</p>
                       <h5 class="d-flex m-auto"
                         style=" color: #FFA500; font-size: larger; font-family: Arial, Helvetica, sans-serif; font-weight: 700;">
                         Rs : ${element.price} /=</h5>
                       <button onclick="add_to_card('${element.itemCode}', '${element.itemName}', ${element.price}, ${element.discount})" class="bg-transparent border-0 m-auto"><img style="width:50px;"
                           src="../../img/img/cart/cart.png.png" alt=""></button>
                     </div>
                   </div>
                 </div>
               </div>`;

               submarinecards+= card;
   }
});
submarinecard_pack = `<div id="submarine-cards" class="card p-5">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    ${submarinecards}
                   </div>
                </div>`;
submarine_card.innerHTML=submarinecard_pack;


// fries

itemArray.forEach(element=>{
  if(element.category==="Fries"){
    let card =`<div class="col">
                 <div class="card h-100">
                   <img style="width: 70%;" src="${element.url}"
                     alt="...">
                   <hr>
                   <div class="card-body m-auto  w-100">
                     <h4 class="card-title text-center">${element.itemName}</h4>
                     <div class="detail mt-3  d-flex justify-content-around ">
                       <p class="m-auto">#1</p>
                       <h5 class="d-flex m-auto"
                         style=" color: #FFA500; font-size: larger; font-family: Arial, Helvetica, sans-serif; font-weight: 700;">
                         Rs : ${element.price} /=</h5>
                       <button onclick="add_to_card('${element.itemCode}', '${element.itemName}', ${element.price}, ${element.discount})" class="bg-transparent border-0 m-auto"><img style="width:50px;"
                           src="../../img/img/cart/cart.png.png" alt=""></button>
                     </div>
                   </div>
                 </div>
               </div>`;

               friescards+= card;
   }
});
friescard_pack = `<div id="fries-cards" class="card p-5">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    ${friescards}
                   </div>
                </div>`;
fries_card.innerHTML=friescard_pack;

// pasta

itemArray.forEach(element=>{
  if(element.category==="Pasta"){
    let card =`<div class="col">
                 <div class="card h-100">
                   <img style="width: 70%;" src="${element.url}"
                     alt="...">
                   <hr>
                   <div class="card-body m-auto  w-100">
                     <h4 class="card-title text-center">${element.itemName}</h4>
                     <div class="detail mt-3  d-flex justify-content-around ">
                       <p class="m-auto">#1</p>
                       <h5 class="d-flex m-auto"
                         style=" color: #FFA500; font-size: larger; font-family: Arial, Helvetica, sans-serif; font-weight: 700;">
                         Rs : ${element.price} /=</h5>
                       <button onclick="add_to_card('${element.itemCode}', '${element.itemName}', ${element.price}, ${element.discount})" class="bg-transparent border-0 m-auto"><img style="width:50px;"
                           src="../../img/img/cart/cart.png.png" alt=""></button>
                     </div>
                   </div>
                 </div>
               </div>`;

               pastacards+= card;
   }
});
pastacard_pack = `<div id="fries-cards" class="card p-5">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    ${pastacards}
                   </div>
                </div>`;
pasta_card.innerHTML=pastacard_pack;

// chicken

itemArray.forEach(element=>{
  if(element.category==="Chicken"){
    let card =`<div class="col">
                 <div class="card h-100">
                   <img style="width: 70%;" src="${element.url}"
                     alt="...">
                   <hr>
                   <div class="card-body m-auto  w-100">
                     <h4 class="card-title text-center">${element.itemName}</h4>
                     <div class="detail mt-3  d-flex justify-content-around ">
                       <p class="m-auto">#1</p>
                       <h5 class="d-flex m-auto"
                         style=" color: #FFA500; font-size: larger; font-family: Arial, Helvetica, sans-serif; font-weight: 700;">
                         Rs : ${element.price} /=</h5>
                       <button onclick="add_to_card('${element.itemCode}', '${element.itemName}', ${element.price}, ${element.discount})" class="bg-transparent border-0 m-auto"><img style="width:50px;"
                           src="../../img/img/cart/cart.png.png" alt=""></button>
                     </div>
                   </div>
                 </div>
               </div>`;

               chickencards += card;
   }
});
chickencard_pack = `<div id="fries-cards" class="card p-5">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    ${chickencards}
                   </div>
                </div>`;
chicken_card.innerHTML=chickencard_pack;

// pasta

itemArray.forEach(element=>{
  if(element.category==="Beverages"){
    let card =`<div class="col">
                 <div class="card h-100">
                   <img style="width: 70%;" src="${element.url}"
                     alt="...">
                   <hr>
                   <div class="card-body m-auto  w-100">
                     <h4 class="card-title text-center">${element.itemName}</h4>
                     <div class="detail mt-3  d-flex justify-content-around ">
                       <p class="m-auto">#1</p>
                       <h5 class="d-flex m-auto"
                         style=" color: #FFA500; font-size: larger; font-family: Arial, Helvetica, sans-serif; font-weight: 700;">
                         Rs : ${element.price} /=</h5>
                       <button onclick="add_to_card('${element.itemCode}', '${element.itemName}', ${element.price}, ${element.discount})" class="bg-transparent border-0 m-auto"><img style="width:50px;"
                           src="../../img/img/cart/cart.png.png" alt=""></button>
                     </div>
                   </div>
                 </div>
               </div>`;

               bevarages_cards += card;
   }
});
bevaragescard_pack = `<div id="fries-cards" class="card p-5">
                  <div class="row row-cols-1 row-cols-md-3 g-4">
                    ${bevarages_cards}
                   </div>
                </div>`;
bevarages_card.innerHTML=bevaragescard_pack;




  


