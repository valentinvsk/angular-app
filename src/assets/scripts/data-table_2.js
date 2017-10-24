var myTable;

myTable = $('#example1').DataTable({
  "sPaginationType": "full_numbers",
  dom: 'Bfrtip',        // Needs button container
        select: 'single',
        responsive: true,
        altEditor: true,     // Enable altEditor
        buttons: [{
          text: 'Add',
          name: 'add'        // do not change name
        },
        {
          extend: 'selected', // Bind to Selected row
          text: 'Edit',
          name: 'edit'        // do not change name
        },
        {
          extend: 'selected', // Bind to Selected row
          text: 'Delete',
          name: 'delete'      // do not change name
       }]
});
