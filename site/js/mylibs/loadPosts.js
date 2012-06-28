jQuery(function($){
  $.getJSON("http://posterous.com/api/2/sites/siyelo/posts/public/?callback=?", { dataType: 'jsonp'}, function(data) {
    for(var i=0; i<6; i++) {
      if(i == 0) {
        $('.blog_feed').append("<h4><a href=\"" + data[i]['full_url'] + "\">" + data[i]['title'] + "</a></h4><p>" + data[i]['body_full'].replace(/<(?:.|\n)*?>/gm, '').substring(0, 240) + "</p>");
      } else {
        $('.blog_feed').append("<h4><a href=\"" + data[i]['full_url'] + "\">" + data[i]['title'] + "</a></h4>");
      }
    }
    $(".placeholder").hide();
  });
});