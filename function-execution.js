// Основная функция для управления настройками пользователя
function createUserSettings() {
  // Переменные для хранения настроек
  var theme = "light"; // Тема оформления, может изменяться в любой части функции
  let language = "en"; // Язык интерфейса, может изменяться в любой части функции
  const maxNotifications = 50; // Максимальное количество уведомлений, не может изменяться

  // Внутренняя функция для установки темы оформления
  function setTheme(newTheme) {
    theme = newTheme; // Обновляем значение переменной theme
    console.log(`Тема оформления обновлена на: ${theme}`);
  }

  // Внутренняя функция для установки языка интерфейса
  function setLanguage(newLanguage) {
    language = newLanguage; // Обновляем значение переменной language
    console.log(`Язык интерфейса обновлен на: ${language}`);
  }

  // Внутренняя функция для отображения текущих настроек
  function displaySettings() {
    console.log(`Тема оформления: ${theme}`);
    console.log(`Язык интерфейса: ${language}`);
    console.log(`Максимальное количество уведомлений: ${maxNotifications}`);
  }

  // Возвращаем объект с методами для управления настройками
  return {
    setTheme,
    setLanguage,
    displaySettings,
  };
}

// Создаем объект для управления настройками пользователя
const userSettings = createUserSettings();

// Используем методы для обновления и отображения настроек
userSettings.setTheme("dark"); // Обновляем тему оформления
userSettings.setLanguage("fr"); // Обновляем язык интерфейса
userSettings.displaySettings(); // Отображаем текущие настройки
