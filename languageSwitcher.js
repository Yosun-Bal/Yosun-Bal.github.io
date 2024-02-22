document.addEventListener('DOMContentLoaded', function() {
  var selector = document.getElementById('languageSwitcher');
  if (selector) {
    // Dynamically construct the filename based on the <html lang=""> attribute
    const currentLang = document.documentElement.lang; // Get the language code

    // Construct the value to select based on the current language
    let valueToSelect = `index${currentLang === 'en' ? '' : '_' + currentLang}.html`;

    // Set the selector to the correct value
    Array.from(selector.options).forEach(option => {
      if(option.value === valueToSelect) {
        selector.value = valueToSelect;
      }
    });

    // Listen for changes to redirect to the selected language version.
    selector.addEventListener('change', function() {
      window.location.href = this.value;
    });
  }
});
