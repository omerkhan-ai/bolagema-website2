document.addEventListener("DOMContentLoaded", () => {
    // Navbar links staggered fade-in
    gsap.from("nav ul li", {
        opacity: 0,
        y: -20,
        duration: 1,
        stagger: 0.2, // Delays each item
        ease: "power2.out",
    });

    // Hero section background fade-in
    gsap.from("#hero", {
        opacity: 0,
        scale: 1.1,
        duration: 1.5,
        ease: "power3.out",
    });

    // Hero text animations
  //  gsap.from(".hero-content h1", {
    //    opacity: 0,
      //  y: -50,
        //duration: 1,
       // ease: "power3.out",
    //});

//gsap.from(".hero-content p", {
  //      opacity: 0,
    //    y: -30,
      //  duration: 1,
        //delay: 0.3,
       // ease: "power3.out",
    //});

    //gsap.from(".hero-content button", {
      //  opacity: 0,
        //scale: 0.8,
        //duration: 1,
        //delay: 0.6,
       // ease: "back.out(1.7)",
   // });

    // Floating logo effect
    gsap.to(".logo img", {
        y: -10,
        repeat: -1,
        yoyo: true,
        duration: 2,
        ease: "sine.inOut",
    });

    // Button hover pulse effect
    document.querySelector(".hero-content button").addEventListener("mouseenter", () => {
        gsap.to(".hero-content button", { scale: 1.1, duration: 0.2 });
    });

    document.querySelector(".hero-content button").addEventListener("mouseleave", () => {
        gsap.to(".hero-content button", { scale: 1, duration: 0.2 });
    });

    // Scroll animations for the contact section
    gsap.from("#contact", {
        opacity: 0,
        y: 50,
        duration: 0.6,
        scrollTrigger: {
            trigger: "#contact",
            start: "top 80%",
            toggleActions: "play none none reverse",
        },
    });

    // Smooth scrolling effect
    querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            gsap.to(window, { scrollTo: target, duration: 1.2, ease: "power2.inOut" });
        });
    });
});
document.addEventListener("DOMContentLoaded", () => {
    // 3D Rotating Hero Title
    gsap.from(".hero-content h1", {
        opacity: 0,
        rotationX: -90,
        duration: 1,
        ease: "expo.out",
    });

    // Wavy Punchline Effect
    gsap.from(".hero-content p", {
        opacity: 0,
        y: -20,
        duration: 1,
        delay: 0.5,
        ease: "sine.out",
        stagger: {
            each: 0.1,
            from: "start",
        },
    });

    // Magnetic Button Effect
    const button = document.querySelector(".hero-content button");
    button.addEventListener("mousemove", (e) => {
        const { left, top, width, height } = button.getBoundingClientRect();
        const x = e.clientX - (left + width / 2);
        const y = e.clientY - (top + height / 2);
        gsap.to(button, { x: x * 0.3, y: y * 0.3, duration: 0.3 });
    });

    button.addEventListener("mouseleave", () => {
        gsap.to(button, { x: 0, y: 0, duration: 0.3 });
    });

    // Parallax Background Effect
    gsap.to("#hero", {
        backgroundPositionY: "20%",
        scrollTrigger: {
            trigger: "#hero",
            start: "top top",
            scrub: true,
        },
    });

    // Glitch Effect on Title Hover
    document.querySelector(".hero-content h1").addEventListener("mouseenter", () => {
        gsap.timeline()
            .to(".hero-content h1", { x: 5, y: -3, skewX: 10, duration: 0.05 })
            .to(".hero-content h1", { x: -5, y: 3, skewX: -10, duration: 0.05 })
            .to(".hero-content h1", { x: 0, y: 0, skewX: 0, duration: 0.05 });
    });
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
  gsap.registerPlugin(ScrollTrigger);

  gsap.from(".cert-card-wrapper", {
    scrollTrigger: {
      trigger: ".cert-grid",
      start: "top 80%",
      toggleActions: "play none none none",
    },
    opacity: 0,
    y: 50,
    duration: 1,
    stagger: 0.2,
    ease: "power3.out"
  });

  const slides = document.querySelectorAll(".carousel-slide");
  const dots = document.querySelectorAll(".dot");
  const prevBtn = document.querySelector(".carousel-arrow.prev");
  const nextBtn = document.querySelector(".carousel-arrow.next");
  
  let currentSlide = 0;
  let slideInterval = setInterval(nextSlide, 5000); // Auto play every 5 sec
  
  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
      dots[i].classList.toggle("active", i === index);
    });
    currentSlide = index;
  }
  
  function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    showSlide(next);
  }
  
  function prevSlide() {
    let prev = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(prev);
  }
  
  nextBtn.addEventListener("click", () => {
    nextSlide();
    resetInterval();
  });
  
  prevBtn.addEventListener("click", () => {
    prevSlide();
    resetInterval();
  });
  
  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      showSlide(index);
      resetInterval();
    });
  });
  
  function resetInterval() {
    clearInterval(slideInterval);
    slideInterval = setInterval(nextSlide, 5000);
  }
  
 
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
    burger.classList.toggle("is-active");
    menu.classList.toggle("is-active");
});

// Optional: Close menu when a link is clicked (on mobile)
document.querySelectorAll("#menu li a").forEach(link => {
    link.addEventListener("click", () => {
        burger.classList.remove("is-active");
        menu.classList.remove("is-active");
    });
});


  