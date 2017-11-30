//$('h1#heading1').hide();
//$('h1').hide();
//$('.heading2').hide();
//$('p span').css('color', 'red');
$('ul#list li:first').css('color', 'red');
$('ul#list li:last').css('color', 'blue');
$('ul#list li:even').css('background-color', 'yellow'); //odd as well
//hex values also work
$('ul#list li:nth-child(3n)').css('list-style', 'none'); //select specific child
//$(':button').hide(); colon for type selector
$('[href]').css('color', 'red');
$('a[href="http://yahoo.com"]').css('color', 'green'); //select by href value
//$('*').hide(); selects all