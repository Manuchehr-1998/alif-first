function manageStock() {
  var currentStock = 100;

  let dailyArrival = 0;

  const maxCapacity = 500;

  function addStock(amount) {
    dailyArrival += amount;

    if (currentStock + dailyArrival > maxCapacity) {
      throw new Error("Ошибка: Превышен максимальный запас на складе!");
    }
    currentStock += dailyArrival;
    console.log(`Товары добавлены: ${amount}. Текущий запас: ${currentStock}.`);
    dailyArrival = 0;
  }

  function sellStock(amount) {
    if (amount > currentStock) {
      throw new Error("Ошибка: Недостаточно товаров на складе!");
    }
    currentStock -= amount;
    console.log(`Товары проданы: ${amount}. Текущий запас: ${currentStock}.`);
  }

  function displayStock() {
    console.log(`Текущий запас на складе: ${currentStock}`);
    console.log(`Максимальная емкость склада: ${maxCapacity}`);
  }

  try {
    addStock(150);
    sellStock(50);
    displayStock();
    addStock(300);
  } catch (error) {
    console.error(error.message);
  }
}

manageStock();
