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
    function handleCheckout() {
        const checkoutBtn = document.getElementById('checkout-btn');
        if (!checkoutBtn) return;

        checkoutBtn.addEventListener('click', function() {
        try {
    const rawCart = JSON.parse(localStorage.getItem('cart') || '[]');
    cartItems = Array.isArray(rawCart) ? rawCart : [];
} catch (e) {
    console.warn('Ошибка чтения корзины:', e);
    cartItems = [];
    localStorage.setItem('cart', '[]');
}
            if (cartItems.length === 0) {
                alert('Ваша корзина пуста');
                return;
            }

            if (!checkAuth()) return;

            // Создаем модальное окно выбора способа получения
            const deliveryModal = document.createElement('div');
            deliveryModal.id = 'delivery-modal';
            deliveryModal.className = 'modal';
            deliveryModal.innerHTML = `
                <div class="modal-content">
                    <span class="close-modal">&times;</span>
                    <h2>Способ получения</h2>
                    <div class="delivery-options">
                        <div class="delivery-option">
                            <input type="radio" id="pickup" name="delivery" value="pickup" checked>
                            <label for="pickup">
                                <h3>Самовывоз</h3>
                                <p>Заберите ваш заказ из нашего магазина</p>
                                <p class="price">Бесплатно</p>
                            </label>
                        </div>
                        <div class="delivery-option">
                            <input type="radio" id="delivery" name="delivery" value="delivery">
                            <label for="delivery">
                                <h3>Доставка</h3>
                                <p>Курьерская доставка до двери</p>
                                <p class="price">500 ₽</p>
                            </label>
                        </div>
                    </div>
                    <div id="delivery-address-container" class="hidden">
                        <h3>Адрес доставки</h3>
                        <input type="text" id="delivery-address" placeholder="Введите ваш адрес" required>
                    </div>
                    <button id="confirm-order-btn" class="confirm-order-btn">Подтвердить заказ</button>
                </div>
            `;
            document.body.appendChild(deliveryModal);

            // Показываем модальное окно
            deliveryModal.style.display = 'block';
            document.getElementById('cart-modal').classList.add('hidden');

            // Обработка выбора способа доставки
            deliveryModal.querySelectorAll('input[name="delivery"]').forEach(radio => {
                radio.addEventListener('change', function() {
                    const addressContainer = deliveryModal.querySelector('#delivery-address-container');
                    addressContainer.classList.toggle('hidden', this.value !== 'delivery');
                });
            });

            // Закрытие модального окна
            deliveryModal.querySelector('.close-modal').addEventListener('click', function() {
                deliveryModal.style.display = 'none';
                document.body.removeChild(deliveryModal);
                document.getElementById('cart-modal').classList.remove('hidden');
            });

            // Подтверждение заказа
            deliveryModal.querySelector('#confirm-order-btn').addEventListener('click', function() {
                const deliveryType = deliveryModal.querySelector('input[name="delivery"]:checked').value;
                let deliveryAddress = '';
                let deliveryCost = 0;

                if (deliveryType === 'delivery') {
                    deliveryAddress = deliveryModal.querySelector('#delivery-address').value.trim();
                    if (!deliveryAddress) {
                        alert('Пожалуйста, укажите адрес доставки');
                        return;
                    }
                    deliveryCost = 500;
                }

                const cartTotal = parseInt(document.getElementById('cart-total-price').textContent) || 0;
                const totalWithDelivery = cartTotal + deliveryCost;

                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if (!currentUser) {
                    alert('Ошибка авторизации. Пожалуйста, войдите снова.');
                    deliveryModal.style.display = 'none';
                    document.body.removeChild(deliveryModal);
                    document.getElementById('auth-btn').click();
                    return;
                }

                const newOrder = {
                    id: Date.now(),
                    date: new Date().toISOString(),
                    total: totalWithDelivery,
                    deliveryType: deliveryType,
                    deliveryAddress: deliveryAddress,
                    deliveryCost: deliveryCost,
                    status: deliveryType === 'pickup' ? 'Готов к выдаче' : 'В обработке',
                    items: cartItems
                };

                // Обновляем данные пользователя
                currentUser.orders = currentUser.orders || [];
                currentUser.orders.unshift(newOrder);
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
                
                // Очищаем корзину
                localStorage.removeItem('cart');
                document.getElementById('cart-counter').textContent = '0';
                deliveryModal.style.display = 'none';
                document.body.removeChild(deliveryModal);
                document.getElementById('cart-modal').classList.add('hidden');
                
                alert(`Заказ #${newOrder.id} успешно оформлен! ${deliveryType === 'pickup' 
                    ? 'Вы можете забрать его в нашем магазине.' 
                    : 'Курьер свяжется с вами для уточнения деталей.'}`);
            });
        });
    }

    // Инициализация обработчиков
    handleCheckout();

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
