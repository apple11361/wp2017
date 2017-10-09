$(document).ready(function(){
    $('#movie_input').css('zIndex', '20');
	$('#hint').css('zIndex', '19');
	$('#loading').hide();
	$('#magic_str').hide();
	$('#wrong').hide();
	$('#right').hide();
	$('#player').hide();
	$('#content .magic').hide();
	//$('#movie_input').hide();
	//$('#hint').hide();
});

function change_login_page(click_obj)
{

	var movie_input = $('#movie_input');
	var hint = $('#hint');

	
	if(click_obj.id==movie_input.attr('id') && movie_input.css('z-index')<hint.css('z-index'))
	{
		hint.animate({
			'z-index': '19'
		},50);
		
		movie_input.animate({
			'z-index': '20'
		},50);
		
		hint.animate({			
			'width': '400px',
			'left': '150px',
			'border-radius': '20px',
			'padding': '0'
		}, 150);
		
		movie_input.animate({
			'top': '0px',
			'width': '500px',
			'height': '350px',
			'left': '100px',
			'border-radius': '30px'
		}, 150);
	}
	else if(click_obj.id==hint.attr('id') && movie_input.css('z-index')>hint.css('z-index'))
	{
		movie_input.animate({
			'z-index': '19'
		},50);
		
		hint.animate({
			'z-index': '20'
		},50);
		
		movie_input.animate({
			'top': '50px',
			'width': '400px',
			'height': '300px',
			'left': '150px',
			'border-radius': '20px'
		}, 150);
		
		hint.animate({
			'width': '500px',
			'left': '100px',
			'border-radius': '30px',
			'padding': '50px 0 0 0'
		}, 150);
	}
}

function alohomora()
{
	var movie_input = $('#movie_input');
	var hint = $('#hint');
	var loading = $('#loading');
	//去空白，轉小寫
	var pwd = removeAllSpace($('#pwd').val()).toLowerCase();
	
	movie_input.hide();
	hint.hide();
	loading.show();
	
	loading_animation(pwd);
}

var is_loading_animation = false;
function loading_animation(pwd)
{
	var loading = $('#loading');
	
	if(!is_loading_animation)
	{
		is_loading_animation = true;
		
		loading.animate({
			'top': '170px',
			'left': '250px',
			'width': '200px',
			'height': '200px',
			'border-radius': '200px'
		}, 200);
		
		loading.animate({
			'top': '70px',
			'left': '150px',
			'width': '400px',
			'height': '400px',
			'border-radius': '400px'
		}, 200);
		
		loading.animate({
			'top': '170px',
			'left': '250px',
			'width': '200px',
			'height': '200px',
			'border-radius': '200px'
		}, 200);
		
		loading.animate({
			'top': '70px',
			'left': '150px',
			'width': '400px',
			'height': '400px',
			'border-radius': '400px'
		}, 200);
		
		loading.animate({
			'top': '170px',
			'left': '250px',
			'width': '200px',
			'height': '200px',
			'border-radius': '200px'
		}, 200);
		
		loading.animate({
			'top': '70px',
			'left': '150px',
			'width': '400px',
			'height': '400px',
			'border-radius': '400px'
		}, 200, function(){after_animation(pwd)});
	}
	
}

function after_animation(pwd)
{
	var loading = $('#loading');
	var wrong = $('#wrong');
	var right = $('#right');
	
	
	if(pwd=='harrypotter')
	{
		var player = $('#player');
		
		right.fadeIn(2000);
		player.fadeIn(2000, function(){
			player[0].play();
			$('#content .normal').hide(3000);
			$('#content .normal').fadeOut(3000);
			$('#content .magic').fadeIn(3000);
			$('html,body').animate({scrollTop: 300}, 2000);
		});
	}
	else
	{
		wrong.fadeIn(2000, function(){
			wrong.fadeOut(500);
			loading.fadeOut(500);
			$('#movie_input').fadeIn(500);
			$('#hint').fadeIn(500, function(){is_loading_animation = false;});
		});
	}

}

var is_lumos_animation = false;
function lumos()
{
	if(!is_lumos_animation)
	{
		is_lumos_animation = true;
		$('#magic_str').fadeIn(1000, function(){$('#magic_str').hide();is_lumos_animation = false;});
	}
}

function removeAllSpace(str)
{
	return str.replace(/\s+/g, "");
}


