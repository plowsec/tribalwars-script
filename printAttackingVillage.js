javascript:
$('#incomings_table tr:eq(0) th:eq(1)').html('Village attaquant');
$('#incomings_table tr').each(function(i)	{
	if(i>0)	{
		$.ajax(	
			{
				type:"GET", 
				url:$(this).children('td:first').children('span:first').children('a:first').attr('href'),
				async:false,
				success:function(e)	{
					village = $('#content_value table tr:contains("Village")',e).children('td:eq(1)').html();
				}
			}
		);
		$(this).children('td:eq(1)').replaceWith(village);
	}
});
void(0);