// Функция управления запасами на складе
function manageStock() {
  // Переменная с использованием var для текущего запаса товаров
  var currentStock = 100; // Начальное количество товаров на складе

  // Переменная с использованием let для количества товаров, поступивших за день
  let dailyArrival = 0; // Начальное количество поступивших товаров за день

  // Константа с использованием const для максимальной емкости склада
  const maxCapacity = 500; // Максимальное количество товаров на складе

  // Функция для поступления новых товаров
  function addStock(amount) {
    dailyArrival += amount; // Увеличиваем количество поступивших товаров
    if (currentStock + dailyArrival > maxCapacity) {
      throw new Error("Ошибка: Превышен максимальный запас на складе!");
    }
    currentStock += dailyArrival; // Обновляем текущий запас товаров
    console.log(`Товары добавлены: ${amount}. Текущий запас: ${currentStock}.`);
    dailyArrival = 0; // Сбрасываем количество поступивших товаров
  }

  // Функция для продажи товаров
  function sellStock(amount) {
    if (amount > currentStock) {
      throw new Error("Ошибка: Недостаточно товаров на складе!");
    }
    currentStock -= amount; // Уменьшаем текущий запас товаров
    console.log(`Товары проданы: ${amount}. Текущий запас: ${currentStock}.`);
  }

  // Функция для отображения текущего запаса и максимальной емкости
  function displayStock() {
    console.log(`Текущий запас на складе: ${currentStock}`);
    console.log(`Максимальная емкость склада: ${maxCapacity}`);
  }

  // Примеры использования функций
  try {
    addStock(150); // Добавляем 150 товаров
    sellStock(50); // Продаем 50 товаров
    displayStock(); // Показываем текущий запас и максимальную емкость
    addStock(300); // Добавляем 300 товаров (вызывает ошибку)
  } catch (error) {
    console.error(error.message);
  }
}

// Запуск функции управления запасами
manageStock();
