const container = document.querySelector('.container')
const search = document.querySelectorAll('.options')



const mans = "men's clothing";
const womans = "women's clothing";
const electronics = "electronics";
const jewerly = "jewelery";

const clearChoice = () => {
  container.innerHTML = `<div></div>`
}
async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();
    data.forEach(product => {
      
      const discountWorth = 20;
      const discount = (product.price * discountWorth) / 100

        const showProducts = (product) => {

          container.innerHTML += `
                          <div class="products">
                              <div class="product-info">
                                          <p class="product-category">Kategoria produktu: ${product.category}</p>
                                            <p class="product-title">Nazwa produktu: ${product.title}</p>
                                            <p class="product-description">Opis produktu: ${product.description}</p>
                                            <p class="product-price">Cena produktu: ${product.price} zł</p>
                                            <p class="discount">Wartość zniżki: ${discount.toFixed(2)} zł</p>
                                            <p class="product-discount">Cena produktu z rabatem: ${(product.price - discount).toFixed(2)} zł</p>
                                          </div>

                                          <div class="product-image">
                                            <img src="${product.image}" alt="">
                                          </div>
                                        </div>
                              </div> 
                          </div>
                          `
          }
          
     showProducts(product)

     search.forEach((option) => {

          option.addEventListener('click', (e) => {
          console.log('działam')
            switch (e.target.value) {
              case 'all':
                showProducts(product);
                break;
              case 'mans':
                if (product.category === mans) {
                  clearChoice();
                  showProducts(product);
                }
                break;
              case 'womans':
                if (product.category === womans) {
                  clearChoice();
                  showProducts(product);
                }
                break;
              case 'jewerly':
                if (product.category === jewerly) {
                  clearChoice();
                  showProducts(product);
                }
                break;
              case 'electronics':
                if (product.category === electronics) {
                  clearChoice();
                  showProducts(product);
                }
                break;
              default: alert('Wybrany asortyment jest nieprawidłowy')
                break;
            }
          });


     }) 
  })
    
  } catch (error) {
    console.log('Wystąpił błąd podczas pobierania danych:', error);
  }
}

fetchProducts();









