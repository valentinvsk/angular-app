$(document).ready(function() {
  console.log($("#example"))
    $('#example').DataTable( {
        "ajax": 'assets/ajax/array.txt'
    } );
    // console.log($("#example"));
    // addClickToEdit();
} );
