var cartNumber = document.getElementById('cartNumber')
var tbody = document.getElementById('tbody')


var cart = JSON.parse(localStorage.getItem("cart"))
if (cart) {

    cartNumber.innerHTML = cart.length

} else {
    cartNumber.innerHTML = 0
}

function show() {

    var products = JSON.parse(localStorage.getItem("proudcts"))
    var cart = JSON.parse(localStorage.getItem("cart"))
    tbody.innerHTML = " "
    cart.forEach((elem, i) => {

        tbody.innerHTML += `
        <tr>
  <td>
  <div class="row">
  <div class="col-6">
  <img class="img-test" src="assets/img/${products[elem.id].img}" >
  </div>
  <div class="col-6" style="text-align:start;">
  <h5>${products[elem.id].pname}</h5>
  </div>
  </div>
  </td>
  <td>${products[elem.id].price}$</td>
  <td class="td-width">
    <div class="row">
      <div class="col-4"><button type="button"  class="btn btn-primary">plus</button></div>
      <div class="col-4"><input type="number" class="form-control w-100 " value="${elem.Quantity}"></div>
      <div class="col-4"><button type="button"  class="btn btn-primary">minus</button></div>
    </div>
  </td>
  <td> ${products[elem.id].price * elem.Quantity}</td>
  </tr>
        `

    })

}