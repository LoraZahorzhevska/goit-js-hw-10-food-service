const bodyRef = document.body;
const checkboxRef = document.querySelector('#theme-switch-toggle');

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
checkboxRef.addEventListener('change', onThemeChange);

checkCurrentTheme();
checkboxType();

function checkCurrentTheme() {
  const currentTheme = localStorage.getItem('theme');
  if (!currentTheme) {
    bodyRef.classList.add(Theme.LIGHT);
  } else {
    bodyRef.classList.add(currentTheme);
  }
}

function checkboxType() {
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === Theme.DARK) {
    checkboxRef.checked = true;
  }
}

function onThemeChange(e) {
  if (e.target.checked) {
    localStorage.setItem('theme', Theme.DARK);
    bodyRefClassListChange(Theme.DARK, Theme.LIGHT);

    // bodyRef.classList.remove(Theme.LIGHT);
    // bodyRef.classList.add(Theme.DARK);
  } else {
    localStorage.setItem('theme', Theme.LIGHT);
    bodyRefClassListChange(Theme.LIGHT, Theme.DARK);

    // bodyRef.classList.remove(Theme.DARK);
    // bodyRef.classList.add(Theme.LIGHT);
  }
}

function bodyRefClassListChange(addTheme, removeTheme) {
  bodyRef.classList.add(addTheme);
  bodyRef.classList.remove(removeTheme);
}
