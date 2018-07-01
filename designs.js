// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()


$('#sizePicker').submit((event)=>{
	// get the value of row and column to display the N*M grid
    var rows = $('#inputHeight').val();
    var columns = $('#inputWeight').val();
    makeGrid(rows, columns);
    // retain the grid when the submit button is cicked
    event.preventDefault()
})

function makeGrid(row, column) {
    // clears previously created grid when new values is set
    $('table tr').remove();
    //nested loop to create the rows and column
    for(var i = 1; i <= row; i++){
        $('#pixelCanvas').append("<tr id=table" + i + "></tr>");

        for (var j = 1; j <= column; j++){
            $('#table' + i).append('<td></td>')            
        }
    }
    // Apply colour to the selected grid cells.
    $('td').click(function() {
        var selector =  $('#colorPicker').val()
        $(this).attr('style') ?  $(this).removeAttr('style') : $(this).attr('style', 'background:' + selector);        
    });
   
}




























