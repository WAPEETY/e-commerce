$(document).ready(function () {
        $('.sidenav').sidenav();
});
$(document).ready(function () {
        $('.collapsible').collapsible();
});
$(document).ready(function () {
        $('.datepicker').datepicker();
});
$(document).ready(function () {
        $('.timepicker').timepicker({
                "twelveHour": false
        });
});
$(document).ready(function () {
	$('modal').modal()
        $('#modalSelectSong').modal({
		'onOpenStart': update_sounds_list
	});
});

$(document).ready(function () {
        M.updateTextFields();
});
