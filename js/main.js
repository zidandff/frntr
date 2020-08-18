const mySwiper = new Swiper('.swiper-testi', {
    // Optional parameters
    spaceBetween: 30,
    loop: true,
    autoplay: {
        delay: 5000,
      },
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar

  })

const productSwiper = new Swiper('.swiper-product', {
	  // Optional parameters
    
      // If we need pagination
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
        dynamicBullets: true,
      },
    
      // Navigation arrows
    
      breakpoints: {
		320: {
			slidesPerView: 'auto',
			spaceBetween: 10
		  },
		  // when window width is >= 480px
		  480: {
			slidesPerView: 2,
			spaceBetween: 20
		  },
		  // when window width is >= 640px
		  640: {
			slidesPerView: 3,
			spaceBetween: 25
		  },
		  990: {
			  slidesPerView: 4,
			  spaceBetween: 30
		  }
		
		  
	  },
})