// Select color input
// Select size input
var height, width, shade;
// When size is submitted by the user, call makeGrid()

$('#sizePicker').submit(function(event){
    event.preventDefault();
    height = $('#inputHeight').val();
    width = $('#inputWidth').val();
    makeGrid(height,width);
    //console.log('Height = ' +height+ ' and Width='+width)
})

function makeGrid(h,w) {

    $('tr').remove();

    for(let i=1; i<=h; i++){
        $('#pixelCanvas').append('<tr id=table' + i + '></tr>');
        for(let j=0; i<w; j++){
            $('#table' + i).append('<td></td>');
        }
    }

    $('td').click(function addShade(){
        shade = $('#colorPiker').val();
        if ($(this).att('style')){
            $(this).removeAtt('style');
        }
    })

}
