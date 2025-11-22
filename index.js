// function potomcard() {
//     const nam = document.getElementById("card-1-name").innerText
//     const dam = document.getElementById("card-1-price").innerText
//     console.log(nam, dam);
// }
// function secondcard() {
//     const nam = document.getElementById("card-2-name").innerText
//     const dam = document.getElementById("card-2-price").innerText
//     console.log(nam, dam);
// }
// function thirdcard() {
//     const nam = document.getElementById("card-3-name").innerText
//     const dam = document.getElementById("card-3-price").innerText
//     console.log(nam, dam);
// }




let totalPrice = 0;
var discountPrice = 0;

const displayElement = document.getElementById("displayName")
const totalPriceElement = document.getElementById("totalPrice") 
const totalElement = document.getElementById("total")
const totalDiscount = document.getElementById("discount")


function getProductData(card) {
    const name = card.dataset.name
    const price = parseInt(card.dataset.price)
    totalPrice += price
    console.log("Tumer sob milaia tk hoilo", totalPrice);
    console.log(name, price);
    let protomeDiscountThakbo = totalPrice;
// make li in appendchild
    const li =document.createElement("li");
        li.innerText = name;
    li.classList.add("list-decimal");
    displayElement.appendChild(li);

    totalPriceElement.innerText=totalPrice;
    totalElement.innerText = protomeDiscountThakbo;
}

function discuuntCal(){
    const inputDiscount = document.getElementById("discountValue").value
    console.log("inputDiscount");
    console.log("totalPrice");
    discountPrice = parseInt(totalPrice*(inputDiscount/100));
    totalDiscount.innerText=discountPrice;
    console.log("discount price", discountPrice);
    totalElement.innerHTML= totalPrice-discountPrice

}


