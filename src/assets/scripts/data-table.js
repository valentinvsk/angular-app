$(document).ready(function() {
  console.log($("#example"))
    $('#example').DataTable( {
        "ajax": 'assets/ajax/array.txt'
    } );
    // console.log($("#example"));
    // addClickToEdit();
} );

// function addClickToEdit() {
//     document.getElementById('example').on('click', function() {
//     var trArray = this.children;
//     for(var i = 0; i < trArray.length; i++) {
//       for(var j = 0; j < trArray[i].length; j++) {
//         // document.getElementsByTagName(trArray[i][j]).on('click', function() {
//         //   console.log()
//         // })
//         console.log(trArray[i][j]);
//       }
//     }
//   });
// }
