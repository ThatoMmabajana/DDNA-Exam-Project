function contactPopUp(){
  alert("Under Development!!")
};

function displaySocialsAlert(){
  alert("Explore my Social Media Profiles!")
};

function showUnderDevelopment(){
  alert("This Section is under development.Please explore my social media profiles instead.")
};

// Alert message when clicking the "Read More" button
document.querySelectorAll('.read-more-btn').forEach(function(button) {
  button.addEventListener('click', function() {
      alert("This section is still under development!!.");
  });
});
