// Toggle class active untuk hamburger menu
const navbarNav = document.querySelector(".navbar-nav");
document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

// Modal detail item (lihat detail)
const itemDetailModal = document.querySelector("#item-detail-modal");
const itemDetailButtons = document.querySelectorAll(".item-detail-button");

itemDetailButtons.forEach((button) => {
  button.onclick = (e) => {
    e.preventDefault();
    itemDetailModal.style.display = "flex";
  };
});

// Tombol close modal detail
document.querySelector(".modal .close-icon").onclick = (e) => {
  itemDetailModal.style.display = "none";
};

// Klik di luar modal detail
window.onclick = (e) => {
  if (e.target === itemDetailModal) {
    itemDetailModal.style.display = "none";
  }
};

// ---------------------------------------------------------
//                    SISTEM KERANJANG
// ---------------------------------------------------------

let cart = [];

// Update jumlah keranjang di navbar
function updateCartCount() {
  document.getElementById("cart-count").textContent = cart.length;
}

// Ketika tombol plus-circle ditekan
document.querySelectorAll(".add-cart-button").forEach((button) => {
  button.addEventListener("click", function (e) {
    e.preventDefault();

    const name = this.dataset.name;
    const price = parseInt(this.dataset.price);

    cart.push({ name, price });

    updateCartCount();
    alert(name + " ditambahkan ke keranjang!");
  });
});

// Modal Keranjang
const cartModal = document.getElementById("cart-modal");
const cartBtn = document.querySelector(".shopping-cart");
const closeCartBtn = document.getElementById("close-cart");
const cartList = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");

// Buka modal keranjang saat ikon cart diklik
cartBtn.addEventListener("click", () => {
  updateCartModal();
  cartModal.style.display = "flex";
});

// Tutup modal keranjang
closeCartBtn.addEventListener("click", () => {
  cartModal.style.display = "none";
});

// Klik luar modal menutup modal
window.addEventListener("click", (e) => {
  if (e.target === cartModal) {
    cartModal.style.display = "none";
  }
});

// Update tampilan isi keranjang
function updateCartModal() {
  cartList.innerHTML = "";
  let total = 0;

  cart.forEach((item) => {
    const li = document.createElement("li");
    li.textContent = `${item.name} - Rp${item.price}`;
    cartList.appendChild(li);
    total += item.price;
  });

  cartTotal.textContent = "Rp" + total;
}
