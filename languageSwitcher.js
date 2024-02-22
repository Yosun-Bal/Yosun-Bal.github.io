document.addEventListener('DOMContentLoaded', function() {
  var selector = document.getElementById('languageSwitcher');
  if (selector) {
    selector.addEventListener('change', function() {
      window.location.href = this.value;
    });
  }
});
