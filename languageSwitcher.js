document.addEventListener('DOMContentLoaded', function() {
  var selector = document.getElementById('languageSwitcher');
  if (selector) {
    // Set the current language as selected based on the page's language.
    const currentLang = document.body.className.match(/lang-(\w+)/);
    if (currentLang && currentLang[1]) {
      selector.value = `index_${currentLang[1]}.html`; // Dependency on the file naming scheme
    }

    // Listen for changes to redirect to the selected language version.
    selector.addEventListener('change', function() {
      window.location.href = this.value;
    });
  }
});
