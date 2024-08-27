var typingEffect = new Typed(".multiText", {
    strings: ["Coder", "Designer", "Developer", "Student"],
    loop: true,
  });
  


  var links = document.getElementsByClassName("links");
  var linksContents = document.getElementsByClassName("links-contents");
  
  function opentab(tabname) {
    for (var i = 0; i < links.length; i++) {
      links[i].classList.remove("active-link");
    }
    for (var j = 0; j < linksContents.length; j++) {
      linksContents[j].classList.remove("active-touch");
    }
  
    document.getElementById(tabname).classList.add("active-touch");
  }


  
document.getElementById('newsletterForm').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevents the form from submitting normally
  
  // Get the input field values
  var name = document.getElementById('nameInput').value;
  var email = document.getElementById('emailInput').value;
  
  // Construct the email body
  var body = 'Name: ' + name + '\nEmail: ' + email;
  
  // Create a mailto link with the email address and body
  var mailtoLink = 'mailto:aizayy21@gmail.com?subject=Newsletter Subscription&body=' + encodeURIComponent(body);
  
  // Open the email client with the mailto link
  window.location.href = mailtoLink;
});

// Placeholder text
document.getElementById('nameInput').placeholder = 'Enter Your Name';
document.getElementById('emailInput').placeholder = 'Enter Your Email';
