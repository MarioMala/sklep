
const container = document.querySelector('.container');
const search = document.querySelectorAll('.options');

const mans = "men's clothing";
const womans = "women's clothing";
const electronics = "electronics";
const jewelry = "jewelery";

const clearChoice = () => {
  container.innerHTML = `<div></div>`;
};

async function fetchProducts() {
  try {
    const response = await fetch('https://fakestoreapi.com/products');
    const data = await response.json();

    const showProducts = (products) => {
      products.forEach((product) => {
        const discountWorth = 20;
        const discount = (product.price * discountWorth) / 100;

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
        `;
      });
    };

    showProducts(data);

    search.forEach((option) => {
      option.addEventListener('click', (e) => {
        clearChoice();
        const selectedOption = e.target.value;
        switch (selectedOption) {
          case 'all':
            showProducts(data);
            break;
          case 'mans':
            showProducts(data.filter((product) => product.category === mans));
            break;
          case 'womans':
            showProducts(data.filter((product) => product.category === womans));
            break;
          case 'jewerly':
            showProducts(data.filter((product) => product.category === jewelry));
            break;
          case 'electronics':
            showProducts(data.filter((product) => product.category === electronics));
            break;
          default:
            alert('Wybrany asortyment jest nieprawidłowy');
            break;
        }
      });
    });
  } catch (error) {
    console.log('Wystąpił błąd podczas pobierania danych:', error);
  }
}

fetchProducts();






