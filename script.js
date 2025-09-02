function showForm(role) {    
  // Hide all forms    
  document.querySelectorAll(".form").forEach(f => f.classList.remove("active"));    
  document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));  

  // Show selected form  
  document.getElementById(role + "Form").classList.add("active");  
  event.target.classList.add("active");  
}


