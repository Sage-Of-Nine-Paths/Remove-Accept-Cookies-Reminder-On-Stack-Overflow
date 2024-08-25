// Function to remove the popup
function removePopup() {
    var popup = document.getElementById('onetrust-banner-sdk');
    if (popup) {
      popup.style.display = 'none';
    }
  }
  
  // Run the function when the DOM is fully loaded
  document.addEventListener('DOMContentLoaded', removePopup);
  
  // Observe changes in the DOM to handle dynamically added popups
  const observer = new MutationObserver(removePopup);
  observer.observe(document.body, { childList: true, subtree: true });
  