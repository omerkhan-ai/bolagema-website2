




document.addEventListener('DOMContentLoaded', function () {
  

    // Navbar links staggered fade-in
    gsap.from("nav ul li", {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: 0.2, // Delays each item
        ease: "power2.out",
    });
    
    // Animate Category Cards when the page loads
    gsap.from(".category-card", {
      opacity: 0,      // Start with opacity 0 (hidden)
      y: 50,           // Slide up from 50px below
      duration: 1,     // Duration of the animation
      stagger: 0.3,    // Add stagger to the cards for cascading effect
      ease: "power3.out" // Smooth easing function
    });
  
    // Animate View Buttons
    gsap.from(".view-button", {
      opacity: 0,      // Start with opacity 0 (hidden)
      y: 50,           // Slide up from 50px below
      duration: 1,     // Duration of the animation
      delay: 0.5,      // Add delay for better effect
      stagger: 0.2,    // Stagger the buttons for a nice delay
      ease: "power3.out" // Smooth easing
    });
  
    // Hover effects for Category Cards: Scale on hover
    document.querySelectorAll('.category-card').forEach(card => {
      card.addEventListener('mouseenter', function () {
        gsap.to(card, { scale: 1.05, duration: 0.3 });  // Scale up on hover
      });
      card.addEventListener('mouseleave', function () {
        gsap.to(card, { scale: 1, duration: 0.3 });    // Scale back to normal on mouse leave
      });
    });
  
    // Hover effects for Buttons: Scale effect on hover
    document.querySelectorAll('.view-button').forEach(button => {
      button.addEventListener('mouseenter', function () {
        gsap.to(button, { scale: 1.05, duration: 0.3 }); // Scale up button on hover
      });
      button.addEventListener('mouseleave', function () {
        gsap.to(button, { scale: 1, duration: 0.3 });    // Scale back to normal on mouse leave
      });
    });
  
  });
  const burger = document.getElementById("burger");
  const menu = document.getElementById("menu");
  
  burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
  });
  document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    // Football slides in from the left
    gsap.from(".product-card:nth-child(1)", {
        x: -200,
        opacity: 0,
        duration: 0.4,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".product-card:nth-child(1)",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Padel rackets fade in
    gsap.from(".product-card:nth-child(2)", {
        opacity: 0,
        duration: 1.5,
        ease: "power2.out",
        scrollTrigger: {
            trigger: ".product-card:nth-child(2)",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });

    // Industry setup pops in
    gsap.from(".product-card:nth-child(3)", {
        scale: 0.5,
        opacity: 0,
        duration: 1,
        ease: "elastic.out(1, 0.5)",
        scrollTrigger: {
            trigger: ".product-card:nth-child(3)",
            start: "top 80%",
            toggleActions: "play none none reverse"
        }
    });
});
  
function initMap() {
  // Define the location of Bola Gema in Sialkot, Pakistan
  const location = { lat: 32.0875, lng: 74.4853 };
  
  // Create a map centered on Bola Gema's location
  const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 15,
      center: location,
  });
  
  // Create a marker to pinpoint the exact location
  const marker = new google.maps.Marker({
      position: location,
      map: map,
      title: "Bola Gema - Sialkot, Pakistan"
  });
}

