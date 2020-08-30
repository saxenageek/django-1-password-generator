function pad(n, width, z) {
	  z = z || '0';
	  n = n + '';
	  return n.length >= width ? n : new Array(width - n.length + 1).join(z) + n;
  }
  $(document).ready(function(){
    $('#timepicker').mdtimepicker({
    	format: 'hh:mm tt',
    	setValue: 'now'
    });
    $("#latelogin").hide();
    $("#earlylogin").hide();
    $("#errormsg").hide();
    $('#timepicker').mdtimepicker().on('timechanged', function(e){
	    var entered_time = $("#timepicker").val();
	    var d = new Date();
	    var current_date = d.getFullYear() + "-" + pad(parseInt(d.getMonth())+1, 2) + "-" + pad(d.getDay(), 2);
	    var entered_datetime = new Date(current_date + entered_time);
	    var entered_hours = entered_datetime.getHours();
	    var entered_minutes = entered_datetime.getMinutes();

	    if((parseInt(entered_hours) < 7 && parseInt(entered_minutes) < 15) || 
	    	(parseInt(entered_hours) > 16 && parseInt(entered_minutes) > 30)){
	    	$("#errormsg").show();
	    }else if(parseInt(entered_hours) > 7 || (parseInt(entered_hours) == 7 && parseInt(entered_minutes) >= 45)){
	    	$("#latelogin").show();
	    	$("#earlylogin").hide();
	    	$("#errormsg").hide();
	    }
	    else if(parseInt(entered_hours) <= 7 && parseInt(entered_minutes) < 15){
	    	$("#earlylogin").show();
	    	$("#latelogin").hide();
	    	$("#errormsg").hide();
	    }else {
	    	$("#latelogin").hide();
    		$("#earlylogin").hide();
    		$("#errormsg").hide();
	    }
  	});
  });