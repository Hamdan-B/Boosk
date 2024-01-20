//Functions
function PageLoad(){
    maxPrice = $('#PriceRange').val()
    $('#PriceRangeText').html("100-" + maxPrice);
}

//Variables
var maxPrice;


$('#PriceRange').on('change', function() {
    maxPrice = $(this).val();
    $('#PriceRangeText').html("100-" + maxPrice);
    });
