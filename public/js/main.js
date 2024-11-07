
   window.addEventListener("scroll", function() {
      const navbar = document.querySelector("nav");
      const mobileNavOpen = document.body.classList.contains("mobile-nav-open");

      if (window.scrollY > 100 && !mobileNavOpen) {
        navbar.classList.add("navbar-scrolled");
      } else {
        navbar.classList.remove("navbar-scrolled");
      }
    });

    document.addEventListener("DOMContentLoaded", () => {
      const mobileNav = document.querySelector("[x-on\\:click='mobileNavOpen = !mobileNavOpen']");
      mobileNav.addEventListener("click", function() {
        document.body.classList.toggle("mobile-nav-open"); // Lock body scroll on mobile menu open
      });
    new Swiper('.swiper-container', {
        loop: true, 
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
        autoplay: {
          delay: 5000, 
          disableOnInteraction: false,
        },
      });
    const cards = document.querySelectorAll(".card");
    let currentIndex = 0;
    
    function animateCards() {
      cards.forEach((card, index) => {
        card.classList.remove("scale-125", "bg-[#4A2C2A]");
        card.querySelector(".icon").classList.remove("active-icon");
        card.querySelector("h3").classList.remove("active-title");
        card.querySelector("p").classList.remove("active-text");
  
        if (index === currentIndex) {
          card.classList.add("scale-125", "bg-[#4A2C2A]");
          card.querySelector(".icon").classList.add("active-icon");
          card.querySelector("h3").classList.add("active-title");
          card.querySelector("p").classList.add("active-text");
          const img = card.querySelector(".icon");
          const h3 = card.querySelector("h3");
          const p = card.querySelector("p");

          img.classList.remove("animate__animated", "animate__flipInX");
          h3.classList.remove("animate__animated", "animate__fadeInLeft");
          p.classList.remove("animate__animated", "animate__fadeInUp");
  
          void img.offsetWidth; 
          void h3.offsetWidth;
          void p.offsetWidth;
  
          setTimeout(() => {
            img.classList.add("animate__animated", "animate__flipInX");
            h3.classList.add("animate__animated", "animate__fadeInLeft");
            p.classList.add("animate__animated", "animate__fadeInUp");
          }, 0);
        }
      });
  
      currentIndex = (currentIndex + 1) % cards.length;
    }

    setInterval(animateCards, 5000);
  });
  
  function toggleReadMore() {
    const moreText = document.getElementById("moreText");
    const readMoreLink = document.getElementById("readMoreLink");

    if (moreText.style.display === "none") {
      moreText.style.display = "inline";
      readMoreLink.innerText = "Read less";
    } else {
      moreText.style.display = "none";
      readMoreLink.innerText = "Read more";
    }
  }

  AOS.init({ once: false }); 