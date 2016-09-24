var App = {
  launch: function ()
   {
       App.getEstimate();
  }, 
  getEstimate: function()
   {
	var favorite = [];
	var total=0;
	$.each($("input[name='item']:checked"), function(){            
                favorite.push($(this).val());
            });
			
	for(var i in favorite) { total += parseFloat(favorite[i]); }
	alert("You have to pay $" + total )
	} 
	};