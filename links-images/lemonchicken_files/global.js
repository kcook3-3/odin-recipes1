/*
	* Global.js
	*
	* @package      creme
	* @author       Lindsay Humes
	* @since        1.0.0
	* @license      GPL-2.0+
*/
jQuery(function($){$('.menu-toggle').click(function(){$('.search-toggle, .header-search').removeClass('active');$('.menu-toggle, .site-menu').toggleClass('active')});$('.menu-item-has-children > a').click(function(e){$(this).parent().toggleClass('expanded');e.preventDefault()});$('.menu-item-has-children > .sub-menu-toggle').click(function(e){$(this).toggleClass('expanded');e.preventDefault()});$('.search-toggle').click(function(){$('.menu-toggle, .mobile-menu').removeClass('active');$('.search-toggle, .header-search').toggleClass('active');$('.site-header .search-field').focus()});$('a.sub-btn').click(function(e){e.preventDefault();$(this).addClass('active');var href=$.attr(this,'href');$(href).fadeIn();$('#cover').addClass('blurred');$('html,body').css({'overflow':'hidden'})});$('.modal-close').click(function(e){e.preventDefault();that=this;$('a.sub-btn').removeClass('active');$('.modal').fadeOut();$('#cover').removeClass('blurred');$('html,body').css({'overflow':''})});$('.modal').click(function(e){e.preventDefault();$('a.sub-btn').removeClass('active');$('.modal').fadeOut();$('#cover').removeClass('blurred');$('html,body').css({'overflow':''})});$(".modal-inner").click(function(e){e.stopPropagation()})})