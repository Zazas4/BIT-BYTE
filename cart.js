const currentUser = JSON.parse(localStorage.getItem('currentUser'));

// Проверка и инициализация массива products
if (typeof products === 'undefined') {
    console.error('Products array is not defined!');
    window.products = [];
}

let cart = [];

// Функция загрузки корзины из localStorage
function loadCart() {
    try {
        const savedCart = JSON.parse(localStorage.getItem('cart') || '[]');
        if (Array.isArray(savedCart)) {
            cart = savedCart;
        } else {
            throw new Error();
        }
    } catch {
        console.warn('Корзина повреждена, сброшена');
        cart = [];
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function addToCart(productId, buyNow = false) {
    const product = products.find(p => p.id === productId);

    if (!product) {
        console.error('Product not found with ID:', productId);
        return;
    }

    const existingItem = cart.find(item => item.id === productId);

    if (existingItem) {
        existingItem.quantity++;
    } else {
        cart.push({ ...product, quantity: 1 });
    }

    updateCart();
    saveCart();

    if (buyNow) {
        document.getElementById('cart-modal').style.display = 'block';
    } else {
        showAddToCartAnimation(productId);
    }
}

// вызвать в начале
loadCart();

// Функция удаления из корзины
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    updateCart();
    saveCart();
}

// Функция обновления отображения корзины
function updateCart() {
    // Обновляем счетчик
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    const cartCounter = document.getElementById('cart-counter');
    if (cartCounter) cartCounter.textContent = totalItems;

    // Обновляем содержимое корзины
    const cartItemsElement = document.getElementById('cart-items');
    if (cartItemsElement) {
        cartItemsElement.innerHTML = '';

        if (cart.length === 0) {
            cartItemsElement.innerHTML = '<p>Корзина пуста</p>';
            const totalPriceElement = document.getElementById('cart-total-price');
            if (totalPriceElement) totalPriceElement.textContent = '0';
            return;
        }

        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image || 'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik0xOCA2SDZhMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNnptMCA0VjZhMiAyIDAgMCAwLTItMkg2YTIgMiAwIDAgMC0yIDJ2NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNCAxM2EzIDMgMCAxIDEtNiAwIj48L3BhdGg+PC9zdmc+'}" 
                     alt="${item.name}"
                     onerror="this.src='data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MDAiIGhlaWdodD0iNTAwIiB2aWV3Qm94PSIwIDAgMjQgMjQiIGZpbGw9Im5vbmUiIHN0cm9rZT0iI2NjYyIgc3Ryb2tleHBvciBvYmplY3Q9InJvdW5kIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjxwYXRoIGQ9Ik0xOCA2SDZhMiAyIDAgMCAwLTIgMnYxMGEyIDIgMCAwIDAgMiAyaDEyYTIgMiAwIDAgMCAyLTJWNnptMCA0VjZhMiAyIDAgMCAwLTItMkg2YTIgMiAwIDAgMC0yIDJ2NCI+PC9wYXRoPjxwYXRoIGQ9Ik0xNCAxM2EzIDMgMCAxIDEtNiAwIj48L3BhdGg+PC9zdmc+'">
                <div class="cart-item-info">
                    <div>${item.name}</div>
                    <div>${item.quantity} × ${item.price.toLocaleString()} ₽</div>
                </div>
                <div class="cart-item-price">${(item.quantity * item.price).toLocaleString()} ₽</div>
                <button class="cart-item-remove" onclick="removeFromCart(${item.id})">×</button>
            `;
            cartItemsElement.appendChild(cartItemElement);
        });

        // Обновляем итоговую сумму
        const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
        const totalPriceElement = document.getElementById('cart-total-price');
        if (totalPriceElement) totalPriceElement.textContent = totalPrice.toLocaleString();
    }
}

// Функция анимации добавления в корзину
function showAddToCartAnimation(productId) {
    const button = document.querySelector(`.add-to-cart[onclick*="addToCart(${productId})"]`);
    if (button) {
        button.textContent = '✓ Добавлено';
        button.style.backgroundColor = '#2ecc71';
        setTimeout(() => {
            button.textContent = 'В корзину';
            button.style.backgroundColor = '#3498db';
        }, 2000);
    }
}

// Инициализация корзины при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
    loadCart();

    // Открытие/закрытие модального окна
    const cartIcon = document.getElementById('cart-icon');
    if (cartIcon) {
        cartIcon.addEventListener('click', () => {
            document.getElementById('cart-modal').style.display = 'block';
        });
    }

    const closeModal = document.querySelector('.close-modal');
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            document.getElementById('cart-modal').style.display = 'none';
        });
    }

    // Оформление заказа
    const checkoutBtn = document.getElementById('checkout-btn');
    if (checkoutBtn) {
        checkoutBtn.addEventListener('click', () => {
            const currentUser = JSON.parse(localStorage.getItem('currentUser'));
            if (!currentUser) {
                alert('Для оформления заказа необходимо войти в систему.');
                document.getElementById('auth-btn').click(); // Кликаем по кнопке входа
                return;
            }

            const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
            if (cartItems.length === 0) {
                alert('Ваша корзина пуста');
                return;
            }

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
});
