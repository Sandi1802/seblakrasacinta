   // Hamburger menu functionality
   const menuBtn = document.getElementById("menu-btn");
   const menuOverlay = document.getElementById("menu-overlay");
   const nav = menuOverlay.querySelector("nav");
   let isMenuOpen = false;

   menuBtn.addEventListener("click", () => {
     isMenuOpen = !isMenuOpen;

     if (isMenuOpen) {
       menuBtn.classList.add("menu-open");
       menuOverlay.classList.remove("hidden");
       setTimeout(() => {
         nav.style.transform = "translateX(0)";
       }, 10);
     } else {
       menuBtn.classList.remove("menu-open");
       nav.style.transform = "translateX(100%)";
       setTimeout(() => {
         menuOverlay.classList.add("hidden");
       }, 300);
     }
   });

   // Close menu when clicking overlay
   menuOverlay.addEventListener("click", (e) => {
     if (e.target === menuOverlay) {
       menuBtn.click();
     }
   });

const carousel = document.getElementById("carouselImages");
const prevSlide = document.getElementById("prevSlide");
const nextSlide = document.getElementById("nextSlide");

let currentIndex = 0;
const totalSlides = carousel.children.length;
const displayDuration = 2000; // Waktu tampilan per gambar (5 detik)
let slideTimeout;

// Fungsi untuk memperbarui posisi carousel
function updateCarousel() {
  const offset = -currentIndex * 100;
  carousel.style.transform = `translateX(${offset}%)`;
}

// Fungsi untuk berpindah ke slide berikutnya
function goToNextSlide() {
  currentIndex = (currentIndex + 1) % totalSlides;
  updateCarousel();
  restartAutoSlide(); // Restart auto-slide setiap berpindah slide
}

// Fungsi untuk berpindah ke slide sebelumnya
function goToPrevSlide() {
  currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
  updateCarousel();
  restartAutoSlide(); // Restart auto-slide setiap berpindah slide
}

// Fungsi untuk memulai perpindahan otomatis
function startAutoSlide() {
  slideTimeout = setTimeout(() => {
    goToNextSlide();
  }, displayDuration);
}

// Fungsi untuk menghentikan perpindahan otomatis
function stopAutoSlide() {
  clearTimeout(slideTimeout);
}

// Fungsi untuk restart perpindahan otomatis
function restartAutoSlide() {
  stopAutoSlide();
  startAutoSlide();
}

// Event listener tombol panah
prevSlide.addEventListener("click", goToPrevSlide);
nextSlide.addEventListener("click", goToNextSlide);

// Mulai perpindahan otomatis saat halaman dimuat
startAutoSlide();
 // Fungsi untuk menambah item ke keranjang
        function addToCart(item) {
            let cart = JSON.parse(localStorage.getItem('cart')) || [];
        
            // Periksa apakah item sudah ada di keranjang
            const existingItemIndex = cart.findIndex(cartItem => cartItem.name === item.name);
        
            if (existingItemIndex > -1) {
                cart[existingItemIndex].quantity += 1;
            } else {
                cart.push({ ...item, quantity: 1 });
            }
        
            // Simpan kembali ke localStorage
            localStorage.setItem('cart', JSON.stringify(cart));
        
            // Perbarui jumlah item di navbar dan mobile
            updateCartCount();
        }
        
        // Fungsi untuk memperbarui jumlah item di navbar dan mobile
        function updateCartCount() {
            const cart = JSON.parse(localStorage.getItem('cart')) || [];
            const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
        
            // Update untuk navbar desktop
            const cartCountNavbar = document.getElementById('cart-count-navbar');
            // Update untuk mobile
            const cartCountMobile = document.getElementById('cart-count-mobile');
        
            if (totalItems > 0) {
                // Update desktop counter
                cartCountNavbar.textContent = totalItems;
                cartCountNavbar.classList.remove('hidden');
        
                // Update mobile counter
                cartCountMobile.textContent = totalItems;
                cartCountMobile.classList.remove('hidden');
            } else {
                // Sembunyikan counter jika tidak ada item
                cartCountNavbar.classList.add('hidden');
                cartCountMobile.classList.add('hidden');
            }
        }
        
        // Category buttons functionality
        const categoryButtons = document.querySelectorAll('.category-btn');
        
        categoryButtons.forEach(button => {
            button.addEventListener('click', () => {
                // Remove active class from all buttons
                categoryButtons.forEach(btn => {
                    btn.classList.remove('active');
                    btn.classList.remove('text-red-600');
                    btn.classList.remove('bg-red-50');
                });
                
                // Add active class to clicked button
                button.classList.add('active');
                button.classList.add('text-red-600');
                button.classList.add('bg-red-50');
            });
        });
        // Close menu when clicking overlay
        menuOverlay.addEventListener('click', (e) => {
            if (e.target === menuOverlay) {
                menuBtn.click();
            }
        });
        
        // Inisialisasi jumlah item saat halaman dimuat
        document.addEventListener('DOMContentLoaded', updateCartCount);
