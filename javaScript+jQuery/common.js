(function (win, $) {
  var $html = $("html");
  var deviceSize = {
    pc: 1009,
    tablet: 801,
    mobile: 800,
  };
  $(win).on("resize", function(){
      var w_size = $(win).width();
      if(w_size >= deviceSize.pc) {
          $html.addClass("pc");
      }else if(w_size < deviceSize.pc && w_size >= deviceSize.tablet) {
          $html.addClass("tablet");
      }else if((w_size <= deviceSize.mobile) {
          $html.addClass("mobile");
      }
  });
})(window, jQuery);
