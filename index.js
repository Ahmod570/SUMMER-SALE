// function potomcard () {
//     const nam = document.getElementById("card-1-name").innerText
//     const dam = document.getElementById("card-1-price").innerText
//     console.log(nam,dam);
// }
// function secondcard () {
//     const nam = document.getElementById("card-2-name").innerText
//     const dam = document.getElementById("card-2-price").innerText
//     console.log(nam,dam);
// }
// function thirdcard () {
//     const nam = document.getElementById("card-3-name").innerText
//     const dam = document.getElementById("card-3-price").innerText
//     console.log(nam,dam);
// }


let totalPrice = 0;
function getProductData(card){

    const name = card.dataset.name
    const price = parseInt(card.dataset.price)

    totalPrice+=price
console.log(totalPrice,"totalPrice");
    console.log(name,price);
}