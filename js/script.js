$(document).ready(function(){

  const MVC = function MVC() {
    let self = this;

    self.name = ko.observable('Ryan M. Waite');

    self.card_links = [

    ];

    self.slack_images = [
      { title: "", alt: "", src: "img/slack-moments/sm-1.JPG" },
      { title: "", alt: "", src: "img/slack-moments/sm-2.JPG" },
      { title: "", alt: "", src: "img/slack-moments/sm-3.JPG" },
      { title: "", alt: "", src: "img/slack-moments/sm-4.JPG" },
      { title: "", alt: "", src: "img/slack-moments/sm-5.JPG" },
      { title: "", alt: "", src: "img/slack-moments/sm-6.JPG" },
      { title: "", alt: "", src: "img/slack-moments/sm-7.JPG" },
    ];
  }

  ko.applyBindings(new MVC());

  //

  // $('.fade').slick({
  //   dots: true,
  //   infinite: true,
  //   speed: 500,
  //   fade: true,
  //   cssEase: 'linear'
  // });

  $('.autoplay').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1205,
				settings: {
					arrows: true,
					centerMode: true,
					// centerPadding: '50px',
					slidesToShow: 2,
          slidesToScroll: 1
				}
      },
      {
        breakpoint: 825,
				settings: {
					arrows: true,
					centerMode: true,
					// centerPadding: '50px',
					slidesToShow: 1,
          slidesToScroll: 1
				}
      }
    ]
  });

});
