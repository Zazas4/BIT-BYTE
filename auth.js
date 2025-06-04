document.addEventListener('DOMContentLoaded', function() {
    // Элементы интерфейса
    tryAutoLogin();
    const authBtn = document.getElementById('auth-btn');
    const authDropdown = document.getElementById('auth-dropdown');
    const showRegister = document.getElementById('show-register');
    const registerModal = document.getElementById('register-modal');
    const loginForm = document.getElementById('login-form');
    const registerForm = document.getElementById('register-form');
    const closeModalButtons = document.querySelectorAll('.close-modal');
    const cartModal = document.getElementById('cart-modal');
    
    // Создаем модальное окно личного кабинета
    const accountModal = document.createElement('div');
    accountModal.id = 'account-modal';
    accountModal.className = 'modal hidden';
    accountModal.innerHTML = `
        <div class="modal-content">
            <span class="close-modal">&times;</span>
            <h2>Личный кабинет</h2>
            <div id="account-info"></div>
            <div class="order-history">
                <h3>История заказов</h3>
                <div id="orders-list"></div>
            </div>
            <button id="logout-btn" class="logout-btn">Выйти</button>
        </div>
    `;
    document.body.appendChild(accountModal);

    // Очистка localStorage от некорректных данных
    function cleanLocalStorage() {
        try {
            const userData = localStorage.getItem('currentUser');
            if (userData && userData !== "undefined") {
                JSON.parse(userData);
            }
        } catch (e) {
            localStorage.removeItem('currentUser');
        }
    }

    // Безопасное получение данных пользователя
    let currentUser = null;
    cleanLocalStorage();
    
    try {
        const userData = localStorage.getItem('currentUser');
        if (userData) {
            currentUser = JSON.parse(userData);
            // Инициализируем историю заказов, если ее нет
            if (!currentUser.orders) {
                currentUser.orders = [];
                localStorage.setItem('currentUser', JSON.stringify(currentUser));
            }
        }
    } catch (e) {
        console.error("Ошибка чтения данных:", e);
    }

    // Обновление вида кнопки
    function updateAuthButton() {
        if (currentUser && currentUser.email) {
            authBtn.textContent = currentUser.name || currentUser.email.split('@')[0];
            authBtn.classList.add('authenticated');
            authDropdown.classList.remove('show');
        } else {
            authBtn.textContent = 'Войти';
            authBtn.classList.remove('authenticated');
        }
    }

    // Отображение информации в личном кабинете
    function showAccountInfo() {
        const accountInfo = accountModal.querySelector('#account-info');
        const ordersList = accountModal.querySelector('#orders-list');
        
        if (!accountInfo || !ordersList) {
            console.error('Элементы личного кабинета не найдены');
            return;
        }

        if (currentUser) {
            accountInfo.innerHTML = `
                <div class="user-info">
                    <p><strong>Имя:</strong> ${currentUser.name || 'Не указано'}</p>
                    <p><strong>Email:</strong> ${currentUser.email}</p>
                    <p><strong>Дата регистрации:</strong> ${currentUser.registrationDate || new Date().toLocaleDateString()}</p>
                </div>
            `;
            
            if (currentUser.orders && currentUser.orders.length > 0) {
                ordersList.innerHTML = currentUser.orders.map(order => `
                    <div class="order-item">
                        <p><strong>Заказ #${order.id}</strong> (${new Date(order.date).toLocaleDateString()})</p>
                        <p>Сумма: ${order.total} ₽</p>
                        <p>Статус: ${order.status || 'Завершен'}</p>
                    </div>
                `).join('');
            } else {
                ordersList.innerHTML = '<p>У вас пока нет заказов</p>';
            }
        }
    }

    // Инициализация
    updateAuthButton();

    // ===== ОБРАБОТЧИКИ СОБЫТИЙ =====

    // Кнопка входа/выхода/кабинета
authBtn.addEventListener('click', function(e) {
  e.stopPropagation();

  if (currentUser) {
    showAccountInfo();
    accountModal.style.display = 'block';
  } else {
    authDropdown.classList.toggle('show'); // ✅ это покажет или скроет
  }
});

    // Кнопка выхода в личном кабинете
    accountModal.querySelector('#logout-btn').addEventListener('click', function() {
        currentUser = null;
        localStorage.removeItem('currentUser');
        updateAuthButton();
        accountModal.style.display = 'none';
        alert('Вы успешно вышли из системы');
    });

    // Закрытие модальных окон
    closeModalButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            this.closest('.modal').style.display = 'none';
        });
    });

    // Закрытие личного кабинета
    accountModal.querySelector('.close-modal').addEventListener('click', function() {
        accountModal.style.display = 'none';
    });

    // Показать форму регистрации
    showRegister.addEventListener('click', function(e) {
        e.preventDefault();
        authDropdown.classList.add('show');
        registerModal.style.display = 'block';
    });
async function tryAutoLogin() {
    const token = localStorage.getItem('token');
    if (!token) return;

    try {
        const res = await fetch('https://bit-byte-3vxa.onrender.com/api/me', {
            headers: {
                'Authorization': `Bearer ${token}`
            }
        });

        if (!res.ok) throw new Error('Токен просрочен или недействителен');

        const user = await res.json();
        localStorage.setItem('currentUser', JSON.stringify(user));
        currentUser = user;
        updateAuthButton();
        console.log('🔐 Пользователь восстановлен из токена:', user);
    } catch (err) {
        console.warn('⛔ Не удалось восстановить сессию:', err.message);
        localStorage.removeItem('token');
        localStorage.removeItem('currentUser');
        currentUser = null;
        updateAuthButton();
    }
}
    // Форма входа
loginForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const email = this.querySelector('[type="email"]').value;
    const password = this.querySelector('[type="password"]').value;

    if (!validateEmail(email)) return alert('Некорректный email');
    if (password.length < 6) return alert('Пароль слишком короткий');

    try {
        const res = await fetch('https://bit-byte-3vxa.onrender.com/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email, password })
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message || 'Ошибка входа');
        }

        const data = await res.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        currentUser = data.user;

        updateAuthButton();
        authDropdown.classList.add('show');
        this.reset();
        alert(`Добро пожаловать, ${currentUser.name}!`);
    } catch (err) {
        alert('Ошибка входа: ' + err.message);
    }
});

    // Форма регистрации
   registerForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const name = this.querySelector('[type="text"]').value;
    const email = this.querySelector('[type="email"]').value;
    const password = this.querySelector('[type="password"]').value;

    if (!name || name.length < 2) return alert('Имя слишком короткое');
    if (!validateEmail(email)) return alert('Некорректный email');
    if (password.length < 6) return alert('Пароль должен быть минимум 6 символов');

    try {
        const res = await fetch('https://bit-byte-3vxa.onrender.com/api/register', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ name, email, password })
        });

        if (!res.ok) {
            const err = await res.json();
            throw new Error(err.message || 'Ошибка регистрации');
        }

        const data = await res.json();
        localStorage.setItem('token', data.token);
        localStorage.setItem('currentUser', JSON.stringify(data.user));
        currentUser = data.user;

        updateAuthButton();
        registerModal.style.display = 'none';
        this.reset();
        alert(`Регистрация успешна, ${name}!`);
    } catch (err) {
        alert('Ошибка: ' + err.message);
    }
});

    // Оформление заказа
    document.getElementById('checkout-btn')?.addEventListener('click', function() {
const cart = JSON.parse(localStorage.getItem('cart') || '[]');
if (!Array.isArray(cart) || cart.length === 0) {
    alert('Корзина пуста или повреждена.');
    return;
}

        if (!currentUser) {
authDropdown.classList.remove('hidden');
authDropdown.classList.add('show');

// Прокрутка к кнопке входа (по желанию)
document.getElementById('auth-btn')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        // Создаем модальное окно выбора способа доставки
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
        cartModal.classList.add('hidden');

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
            cartModal.classList.remove('hidden');
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
                items: cart
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
            cartModal.classList.add('hidden');
            
            alert(`Заказ #${newOrder.id} успешно оформлен! ${deliveryType === 'pickup' 
                ? 'Вы можете забрать его в нашем магазине.' 
                : 'Курьер свяжется с вами для уточнения деталей.'}`);
        });
    });

    // Валидация email
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }

    // Закрытие dropdown при клике вне его
document.addEventListener('click', function(e) {
    if (!authDropdown.contains(e.target) && e.target !== authBtn) {
        authDropdown.classList.remove('show');
    }
});

    // Предотвращение закрытия dropdown при клике внутри
    authDropdown.addEventListener('click', function(e) {
        e.stopPropagation();
    });
});
