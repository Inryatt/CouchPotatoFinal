//User Settings defaults
var dieta =false;
var vegetariano = true;
let alimentos =[];

$.getJSON( "recipes.json", function( data ) {
  var items = [];
  $.each( data, function( key, val ) {
    items.push(  key + " : " + val  );
  });
  console.log(items);
 
 
});


$('#simveg').on('click change', function() {
 // alert("veg true");
  vegetariano = true;
});
$('#naoveg').on('click change', function() {
 // alert("veg false");
  vegetariano = false;
});

$('#simdiet').on('click change', function() {
 // alert("dieta true");
  dieta = true;
});

$('#naodiet').on('click change', function() {
 // alert("dieta false");
  dieta = false;
});



/* Set the width of the side navigation to 250px */
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }

/* Set the width of the side navigation to 0 */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
} 

  //recipe modal call

$('#theModal').on('show.bs.modal', function (event) {
  var button = $(event.relatedTarget) // Button that triggered the modal
  var recipient = button.data('name') // Extract info from data-* attributes
  // If necessary, you could initiate an AJAX request here (and then do the updating in a callback).
  // Update the modal's content. We'll use jQuery here, but you could use a data binding library or other methods instead.
  var modal = $(this)
  modal.find('#recipeName').text('New message to ' + recipient)
  modal.find('.modal-body input').val(recipient)
})

