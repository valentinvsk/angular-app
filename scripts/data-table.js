$(document).ready(function() {
  console.log($("#example"))
    $('#example').DataTable( {
        "ajax": 'scripts/ajax/array.txt'
    } );
} );
