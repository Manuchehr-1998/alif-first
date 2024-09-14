function createUserSettings() {
  var theme = "light";
  let language = "en";
  const maxNotifications = 50;

  function setTheme(newTheme) {
    theme = newTheme;
    console.log(`Тема оформления обновлена на: ${theme}`);
  }

  function setLanguage(newLanguage) {
    language = newLanguage;
    console.log(`Язык интерфейса обновлен на: ${language}`);
  }

  function displaySettings() {
    console.log(`Тема оформления: ${theme}`);
    console.log(`Язык интерфейса: ${language}`);
    console.log(`Максимальное количество уведомлений: ${maxNotifications}`);
  }

  return {
    setTheme,
    setLanguage,
    displaySettings,
  };
}

const userSettings = createUserSettings();

userSettings.setTheme("dark");
userSettings.setLanguage("fr");
userSettings.displaySettings();

// Переменные var, let, const:

//var: theme объявлена с использованием var, что означает, что она имеет функциональную область видимости и может быть изменена в любой части функции createUserSettings. В случае, если бы theme была объявлена внутри другой функции, ее область видимости была бы ограничена этой функцией.

//let: language объявлена с использованием let, что означает, что она также имеет область видимости внутри функции createUserSettings. Переменная language может быть изменена внутри этой функции, но доступ к ней будет ограничен этой функцией и вложенными функциями.

//const: maxNotifications объявлена с использованием const, что означает, что значение этой переменной не может быть изменено после первоначального присвоения. const имеет такую же область видимости, как и let, но не позволяет изменять значение переменной.
