document.addEventListener('DOMContentLoaded', function() {
  const switcherButton = document.querySelector('.language-switcher button');
  const dropdownContent = document.querySelector('.language-switcher .dropdown-content');

  // Toggle the dropdown on button click
  switcherButton.addEventListener('click', function(event) {
    const isOpen = dropdownContent.style.display === 'block';
    dropdownContent.style.display = isOpen ? 'none' : 'block';
    switcherButton.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    event.stopPropagation(); // Prevent the click from being captured by the window listener
  });

  // Close the dropdown when clicking outside of it
  window.addEventListener('click', function() {
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
      switcherButton.setAttribute('aria-expanded', 'false');
    }
  });

  // Highlight the current language option
  const currentLang = document.documentElement.lang; // Get the current page language
  document.querySelectorAll('.language-switcher .dropdown-content a').forEach(link => {
    if (link.getAttribute('data-lang') === currentLang) {
      link.style.fontWeight = 'bold'; // Highlight the current language
    }
  });
});
