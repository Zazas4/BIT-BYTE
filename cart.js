// cart.js
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
    // Обновляем содержимое корзины в модалке
    const cartItemsElement = document.getElementById('cart-items');
    if (cartItemsElement) {
        cartItemsElement.innerHTML = '';  // Очистка корзины в DOM

        if (cart.length === 0) {
            cartItemsElement.innerHTML = '<p>Корзина пуста</p>';  // Сообщение о пустой корзине
            const totalPriceElement = document.getElementById('cart-total-price');
            if (totalPriceElement) totalPriceElement.textContent = '0 ₽';
            return;
        }

        // Отображаем товары в корзине
        cart.forEach(item => {
            const cartItemElement = document.createElement('div');
            cartItemElement.className = 'cart-item';
            cartItemElement.innerHTML = `
                <img src="${item.image || 'data:image/svg+xml;base64,...'}" 
                     alt="${item.name}" 
                     onerror="this.src='data:image/svg+xml;base64,...'">
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
        if (totalPriceElement) totalPriceElement.textContent = totalPrice.toLocaleString() + ' ₽';
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
});


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



    // Добавляем обработчик для кнопки "Продолжить покупки"
    const continueShoppingBtn = document.getElementById('continue-shopping-btn');
    if (continueShoppingBtn) {
        continueShoppingBtn.addEventListener('click', () => {
            document.getElementById('cart-modal').style.display = 'none';
            // Дополнительно: прокрутка к каталогу, если нужно
            // document.getElementById('products-section').scrollIntoView();
        });
    }
});

// Функция для кнопки "Продолжить покупки" (альтернативный вариант)
function continueShopping() {
    document.getElementById('cart-modal').style.display = 'none';
}
