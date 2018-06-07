$(function()
{
	$('.contenedor-imagen').click(function()
	{
		var src = $(this).find('img').attr('src')
		$('#imagen-modal').attr('src', src)
	})
	
})