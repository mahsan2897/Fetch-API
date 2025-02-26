let getDiv = document.getElementById('main')

fetch('https://fakestoreapi.com/products')
.then(data => data.json())
.then(data => {
    data.map((val , index) =>{
        getDiv.innerHTML += `<div class="card m-3 container" style="width: 18rem;">
  <img src="${val.image}" class="card-img-top" alt="...">
  <div class="card-body">
    <p class="card-text"><strong>Id:</strong> ${val.id}</p>
    <p class="card-text"><strong>Title:</strong> ${val.title}</p>
    <p class="card-text"><strong>Price:</strong> ${val.price}</p>
    <p class="card-text"><strong>Description:</strong> ${val.description}</p>
    <p class="card-text"><strong>Category:</strong> ${val.category}</p>
    <button class="btn btn-outline-success" type="submit">Add to Cart</button>
  </div>
</div>
</div>`})

})