(function ($) {
	"use strict";

	//Preloader

	$(window).on('load', function (e) { // makes sure the whole site is loaded
		$(".loader__figure").fadeOut(); // will first fade out the loading animation
		$(".loader").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.


		// Typing animation
		var elements = document.getElementsByClassName('txt-rotate');
		for (var i = 0; i < elements.length; i++) {
			var toRotate = elements[i].getAttribute('data-rotate');
			var period = elements[i].getAttribute('data-period');
			if (toRotate) {
				new TxtRotate(elements[i], JSON.parse(toRotate), period);
			}
		}
		// INJECT CSS
		var css = document.createElement("style");
		css.type = "text/css";
		css.innerHTML = ".txt-rotate > .wrap { border-right: 0.1em solid orange; box-sizing: border-box; }";
		document.body.appendChild(css);
	})

	var TxtRotate = function (el, toRotate, period) {
		this.toRotate = toRotate;
		this.el = el;
		this.loopNum = 0;
		this.period = parseInt(period, 10) || 2000;
		this.txt = '';
		this.tick();
		this.isDeleting = false;
	};

	TxtRotate.prototype.tick = function () {
		var i = this.loopNum % this.toRotate.length;
		var fullTxt = this.toRotate[i];

		if (this.isDeleting) {
			this.txt = fullTxt.substring(0, this.txt.length - 1);
		} else {
			this.txt = fullTxt.substring(0, this.txt.length + 1);
		}

		this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

		var that = this;
		var delta = 100;
		// var delta = 300 - Math.random() * 100;

		if (this.isDeleting) { delta /= 2; }

		if (!this.isDeleting && this.txt === fullTxt) {
			delta = this.period;
			this.isDeleting = true;
		} else if (this.isDeleting && this.txt === '') {
			this.isDeleting = false;
			this.loopNum++;
			delta = 500;
		}

		setTimeout(function () {
			that.tick();
		}, delta);
	};

	/*! Popover */

	$('a.ticket-link').webuiPopover({
		url: '#ticket-wrap',
		width: 300,
		animation: 'pop',
		arrow: true
	});


	$(document).ready(function () {

		/*! Nicescroll */

		$("#boxscroll-1").niceScroll("#boxscroll-in-1", {
			cursorcolor: "#000",
			cursoropacitymax: 0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});
		$("#boxscroll-2").niceScroll("#boxscroll-in-2", {
			cursorcolor: "#000",
			cursoropacitymax: 0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});
		$("#boxscroll-3").niceScroll("#boxscroll-in-3", {
			cursorcolor: "#000",
			cursoropacitymax: 0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});
		$("#boxscroll-4").niceScroll("#boxscroll-in-4", {
			cursorcolor: "#000",
			cursoropacitymax: 0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});
		$("#boxscroll-5").niceScroll("#boxscroll-in-5", {
			cursorcolor: "#000",
			cursoropacitymax: 0.5,
			cursorwidth: "6px",
			cursorborder: "0px solid #fff",
			dblclickzoom: false,
			scrollspeed: 60,
			mousescrollstep: 60,
			autohidemode: false,
			bouncescroll: false,
			railpadding: { top: 20, right: 5, left: 0, bottom: 20 }
		});


		//Countdown

		$('.countdown').downCount({
			date: '07/27/2019 12:00:00'
		}, function () {
			// alert('WOOT WOOT, done!');
		});

		// $("#contactForm").on("submit", function(e) {
		// 	e.preventDefault();
		// 	saveRegisters();
		// });

		// function saveRegisters(){
		// 	$.ajax({
		// 		dataType: 'jsonp',
		// 		url: "http://getsimpleform.com/messages/ajax?form_api_token=56965532e4412eb7f085658f6ea01148",
		// 		data: {
		// 		  email: $("#email").val(),
		// 		  name: $("#name").val(),
		// 		  city: $("#message").val(),
		// 		}
		// 	  }).done(function() {
		// 		//callback which can be used to show a thank you message
		// 		//and reset the form
		// 		$('#response').html('Success! We will contact you soon').addClass('success').fadeIn('fast');
		// 	  }).error(function(){
		// 		$('#response').html('Uh Oh, something went wrong! Please try again.').addClass('error').fadeIn('fast');
		// 	  });
		// }


		//Animated Icons

		var options = {
			duration: 150,
			type: 'oneByOne',
			animTimingFunction: Vivus.EASE
		};

		// var vivus = new Vivus('svg-ticket', options, onComplete);
		// var i = 0;
		// var txt = 'Brand Loyalty'; /* The text */
		// var speed = 200; /* The speed/duration of the effect in milliseconds */

		// function typeWriter() {
		// 	if (i < txt.length) {
		// 		console.log($("#hero-main-title"));
		// 		$(".hero-main-title")[0].innerHTML += txt.charAt(i);
		// 		i++;
		// 		setTimeout(typeWriter, speed);
		// 	}
		// }

		// typeWriter()

		function onComplete() { }


	});

})(jQuery); 