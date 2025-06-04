let cartItems = [];
document.addEventListener('DOMContentLoaded', function() {
    // Фильтрация по категориям
    const categoryButtons = document.querySelectorAll('.category-filter button');
    
categoryButtons.forEach(button => {
    button.addEventListener('click', function () {
        categoryButtons.forEach(btn => btn.classList.remove('active'));
        this.classList.add('active');
        displayProducts(this.dataset.category);

        // Закрытие мобильного меню при выборе категории
        const menu = document.getElementById('mobile-category-menu');
        const overlay = document.getElementById('mobile-menu-overlay');
        if (menu && overlay) {
            menu.classList.remove('active');
            overlay.classList.remove('active');
        }
    });
});
    // Функция отображения товаров
    function displayProducts(category = 'all') {
        const productsContainer = document.getElementById('products-container');
        if (!productsContainer) return;
        
        productsContainer.innerHTML = '';

        const filteredProducts = category === 'all' 
            ? products 
            : products.filter(product => product.category === category);

        if (filteredProducts.length === 0) {
            productsContainer.innerHTML = '<p class="no-products">Товары не найдены</p>';
            return;
        }

        filteredProducts.forEach(product => {
            const card = document.createElement('div');
            card.className = 'product-card';
            card.innerHTML = `
                <div class="product-image">
                    <img src="${product.image || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOCA2SDZhMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNnptMCA0VjZhMiAyIDAgMCAwLTItMkg2YTIgMiAwIDAgMC0yIDJ2NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNCAxM2EzIDMgMCAxIDEtNiAwIj48L3BhdGg+PC9zdmc+'}" 
                     alt="${product.name}"
                     onerror="this.onerror=null;this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOCA2SDZhMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNnptMCA0VjZhMiAyIDAgMCAwLTItMkg2YTIgMiAwIDAgMC0yIDJ2NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNCAxM2EzIDMgMCAxIDEtNiAwIj48L3BhdGg+PC9zdmc+'">
                </div>
                <div class="product-info">
                    <h3>${product.name}</h3>
                    <div class="product-specs">${product.specs || 'Характеристики не указаны'}</div>
                    <div class="product-price">${product.price.toLocaleString()} ₽</div>
                    <span class="product-category">${product.category}</span>
                    <div class="product-actions">
                        <button class="buy-now" data-id="${product.id}" data-buy-now="true">Купить сейчас</button>
                        <button class="add-to-cart" data-id="${product.id}">В корзину</button>
                    </div>
                </div>
            `;
            productsContainer.appendChild(card);
        });

        // Добавляем обработчики событий для новых кнопок
        document.querySelectorAll('.add-to-cart, .buy-now').forEach(button => {
            button.addEventListener('click', function() {
                const productId = parseInt(this.dataset.id);
                const buyNow = this.dataset.buyNow === 'true';
                addToCart(productId, buyNow);
            });
        });
    }
    
    // Инициализация
    displayProducts();

    // Проверка авторизации
    function checkAuth() {
        const currentUser = JSON.parse(localStorage.getItem('currentUser')) || null;
        if (!currentUser) {
            alert('Для выполнения этого действия необходимо войти в систему');
            document.getElementById('auth-btn').click();
            return false;
        }
        return true;
    }

    // Обработчик оформления заказа

    // Обработчик для кнопки "Показать вход"
    document.getElementById('show-register')?.addEventListener('click', function(e) {
        e.preventDefault();
        document.getElementById('register-modal').classList.remove('hidden');
        document.getElementById('auth-dropdown').classList.add('hidden');
    });
});
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.getElementById('burger-toggle');
    const menu = document.getElementById('mobile-category-menu');
    const overlay = document.getElementById('mobile-menu-overlay');

    if (burger && menu && overlay) {
        burger.addEventListener('click', () => {
            menu.classList.add('active');
            overlay.classList.add('active');
        });

        overlay.addEventListener('click', () => {
            menu.classList.remove('active');
            overlay.classList.remove('active');
        });
    }
});
