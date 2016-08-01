//  var more_list = {
// 	init: function() {
// 		$(".more-content").hide();
// 		$('.more-link').click(function(e) {
// 			e.preventDefault();
// 			$(this).hide();
// 			$(this).closest(".row").find(".more-content").slideDown();
// 			return false;
// 		});	
// 	}
// }
//  var overlay = {
// 	init: function() {
// 		$('.play-lists a h5').mouseenter(function(e) {
// 			$(this).closest(".play-lists").find(".featured-detail").addClass("featured-detail-hover");
// 		});	
// 		$('.play-lists a h5').mouseout(function(e) {
// 			$(this).closest(".play-lists").find(".featured-detail").removeClass("featured-detail-hover");
// 		});	
// 	}	
// }
	var topnav_toggle = {
		init: function() {
			$("div.navbar-header button.navbar-toggle").click(function(){
				$(this).toggleClass('expanded');
				$('div.navbar-header').toggleClass('expanded');
			});
		}
	}


 $(document).ready(function() {
 	topnav_toggle.init();
// 	more_list.init();
// 	overlay.init();
 	});


// 	