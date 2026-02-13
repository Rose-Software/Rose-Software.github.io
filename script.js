document.getElementById("contactBtn").addEventListener("click", function() {
    document.getElementById("contactPopup").style.display = "flex";
  });
  
  document.querySelector(".popup .close").addEventListener("click", function() {
    document.getElementById("contactPopup").style.display = "none";
  });
  
  window.addEventListener("click", function(e) {
    if (e.target === document.getElementById("contactPopup")) {
      document.getElementById("contactPopup").style.display = "none";
    }
  });
  
  var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
  var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
  });



