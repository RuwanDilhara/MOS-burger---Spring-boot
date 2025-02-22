// import { customerArray } from "../../db/customer.js";



let totalItemHTML = document.getElementById("totalItems");
let cart_list = document.getElementById("cart-list");
let order_summary = document.getElementById("order-summary");

let cart_body = ``;
let cart_set = ``;

let subTotel=0;
let totalPrice = 0;
let totalDescount = 0;

let tempItemcodearray = [];

function add_to_card(itemcode, itemname, price, discount,category) {
  let boolean = tempItemcodearray.find(item => item.CODE === itemcode);

  if (!boolean) {
    tempItemcodearray.push({ 
      CODE: itemcode, 
      NAME: itemname, 
      PRICE: price, 
      DISCOUNT: discount, 
      INDEX: 1 
    });
  } else {
    boolean.INDEX += 1;
  }
  render_cart();
}

function delete_cart(itemcode) {
  tempItemcodearray = tempItemcodearray.filter(item => item.CODE !== itemcode);

  render_cart();
}

function render_cart() {
  cart_set = ``;

  tempItemcodearray.forEach(e => {
    cart_set += `
      <div class="d-flex justify-content-between align-items-center">
        <div class="d-flex">
          <p class="mb-0">${e.NAME}</p>
          <p>${e.CODE}</p>
        </div>
        <div class="d-flex align-items-center">
          <button type="button" class="btn btn-outline-secondary btn-sm">-</button>
          <input type="text" class="form-control form-control-sm mx-2 text-center" style="width: 50px;" value="${e.INDEX}" readonly>
          <button type="button" class="btn btn-outline-secondary btn-sm">+</button>
        </div>
        <div>Rs ${e.PRICE}</div>
        <button onClick='delete_cart("${e.CODE}")' type="button" class="btn btn-sm"><img style="width: 15px;" src="../assets/icon/delete.png" alt=""></button>
      </div>`;
  });

  cart_body = `
    <div id="cart-list" class="mb-3">
      <h5>Total Items: <label id="totalItems">${tempItemcodearray.length}</label>
      <a class="d-flex justify-content-end text-danger ms-3" href="">Clear all</a></h5>
      ${cart_set}
    </div>`;

  cart_list.innerHTML = cart_body;

  tempItemcodearray.forEach(element=>{
    subTotel+=element.INDEX*element.PRICE;
    totalDescount+=(element.DISCOUNT / 100) * element.PRICE;
    
  });

  totalPrice=subTotel-totalDescount;

  order_summary.innerHTML=`<div id="order-summary" class="mb-3">
          <h5 class="text-end">Price: <label style="color: orange;">Rs ${totalPrice}</label></h5>
          <p   class="text-end mb-0">Sub Total: Rs ${subTotel}</p>
          <p class="text-end">Discount:Rs ${totalDescount}</p>
        </div>`;
  console.log(subTotel);
  subTotel=0;
}

function generatePDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();

  doc.text('Order Summary', 10, 10);

  let yPosition = 30;

  if (Array.isArray(tempItemcodearray)) {
    tempItemcodearray.forEach(item => {
      doc.setFontSize(12);
      doc.text(`${item.NAME} (x${item.INDEX})`, 10, yPosition);
      doc.text(`Rs ${item.PRICE.toFixed(2)} x ${item.INDEX} = Rs ${(item.PRICE * item.INDEX).toFixed(2)}`, 10, yPosition + 10);
      yPosition += 20;
    });
  } else {
    console.error("tempItemcodearray is not properly defined or not an array.");
  }

  if (subTotal !== undefined && totalDiscount !== undefined && totalPrice !== undefined) {
    doc.setFontSize(14);
    doc.text(`Sub Total: Rs ${subTotal.toFixed(2)}`, 10, yPosition);
    doc.text(`Discount: Rs ${totalDiscount.toFixed(2)}`, 10, yPosition + 10);
    doc.text(`Total Price: Rs ${totalPrice.toFixed(2)}`, 10, yPosition + 20);
  } else {
    console.error("subTotal, totalDiscount, or totalPrice are not defined.");
  }

  const fileName = 'Order_Summary.pdf';

  doc.save(fileName);
}



let phoneNumber = document.getElementById("phoneNumber");
// -------------------------Customer set--------------

// customerArray.forEach(d=>{

// })

function searchCustomers(){
  document.getElementById("customerName").value  = "df";
  document.getElementById("custLocation").value  = "df";
  let phoneNumber = document.getElementById("custPhoneNumber").value;

  customerArray.forEach(element => {
    if(element.contact === phoneNumber){
      document.getElementById("customerName").value  = "dfdfd";
      document.getElementById("custLocation").value  = "dfdfd";
      console.log(element.name);
      
    }
  });



  
  
  
}
