function scrollbar(){
$(document).ready(function(){
  $(window).scroll(function(){
    if ($(this).scrollTop()>600){
      document.getElementById("navbar").className = "nav_bar_list";
    }
    else {
      document.getElementById("navbar").className = "nav_bar_list1";
    }
  })
})
}
