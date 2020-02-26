(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){


$(document).ready(function(){

    $('.burger').on('click', function(){
        $('header nav').toggleClass('active')
    });

    $('.anchor').on('click', function(event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('html, body').animate({scrollTop: top}, 800);
		setTimeout(function() {
			window.location = id;
		}, 700);
    });

    $('.input .inputit').on('blur', function(){
        if($(this).val().length > 0){
            $(this).parent().find('label').addClass('active');
        } else $(this).parent().find('label').removeClass('active');
    });

        $('.select select').select2({
         minimumResultsForSearch: -1
        });
        
        $(".js-range-slider").ionRangeSlider({
            grid: true,
            min: 0,
            max: 4,
            step: 1,
            prefix: ""
        });

        // var go = false;
        // $('.js-range-slider').on('change', function(){
           
        //     if($(this).val() >= 3){
        //         go = true;
        //     } else go = false;
        //     console.log(go); 
        // });


            
        $('main .holder .box .range-box .range-text .item:nth-child(1) span').on('click', function(){
            $(".js-range-slider").data('ionRangeSlider').update({
                grid: true,
                min: 0,
                max: 4,
                step: 1,
                prefix: "",
                from:0
            });
        });
        $('main .holder .box .range-box .range-text .item:nth-child(2) span').on('click', function(){
            $(".js-range-slider").data('ionRangeSlider').update({
                grid: true,
                min: 0,
                max: 4,
                step: 1,
                prefix: "",
                from:1
            });
        });
        $('main .holder .box .range-box .range-text .item:nth-child(3) span').on('click', function(){
            $(".js-range-slider").data('ionRangeSlider').update({
                grid: true,
                min: 0,
                max: 4,
                step: 1,
                prefix: "",
                from:2
            });
        });
        $('main .holder .box .range-box .range-text .item:nth-child(4) span').on('click', function(){
            $(".js-range-slider").data('ionRangeSlider').update({
                grid: true,
                min: 0,
                max: 4,
                step: 1,
                prefix: "",
                from:4
            });
        });





});
},{}]},{},[1]);
