var theme = "light";

let language = "en";

const maxNotifications = 50;
function updateTheme(newTheme) {
  theme = newTheme;
  console.log(`Тема оформления обновлена на: ${theme}`);
}

function updateLanguage(newLanguage) {
  language = newLanguage;
  console.log(`Язык интерфейса обновлен на: ${language}`);
}

const displaySettings = function () {
  console.log(`Тема оформления: ${theme}`);
  console.log(`Язык интерфейса: ${language}`);
  console.log(`Максимальное количество уведомлений: ${maxNotifications}`);
};

updateTheme("dark");
updateLanguage("fr");
displaySettings();

//Переменные:

//var имеет функциональную область видимости и может быть изменена в любой части функции или в глобальном контексте.
//let имеет блочную область видимости и может быть изменена в любой части блока, где она объявлена.
//const имеет блочную область видимости и не может быть изменена после первоначального присвоения.
