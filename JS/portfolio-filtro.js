$(function() {

    $('.toggles div').click(function(){
      var get_id = this.id;
      var get_current = $('.posts .' + get_id);
  
        $('.post').not( get_current ).hide(500);
        get_current.show(500);
    });
    
    
    $('#todos').click(function() {
        $('.post').show(500);
    });


}); 