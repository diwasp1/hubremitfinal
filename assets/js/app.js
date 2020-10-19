
			window.onscroll = function () {
				scrollFunction();
			};

			function scrollFunction() {
				if (
					document.body.scrollTop > 20 ||
					document.documentElement.scrollTop > 20
				) {
					document.getElementById("navbar").classList.add("active");
				} else {
					document.getElementById("navbar").classList.remove("active");
				}
			}
				
			function openNav() {
				document.getElementById("mySidenav").style.width = "250px";
			}

			function closeNav() {
				document.getElementById("mySidenav").style.width = "0";
			}
			$(".br-dropdown .brBtn").click(function () {
				$(this).siblings().toggle("active");
			});

            $('.notice-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
arrows: false,
  autoplay: true,
  autoplaySpeed: 1500,
  slidesToShow: 2,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
		arrows: false,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
		arrows: false,
        slidesToScroll: 1
      }
    }
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ]
});
		
	