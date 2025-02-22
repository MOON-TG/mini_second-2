document.querySelector('.robot_input').addEventListener('submit', (e) => {
const bat_fig = e.target.battery.value

bat_prog_bar.style.width = `${bat_fig}%`


if(bat_fig < 21){
bat_prog.style.backgroundColor = "#ff0000";
color_box.value = "#ff0000";
}else if(bat_fig < 41){
bat_prog.style.backgroundColor = "#ff8000";
color_box.value = "#ff8000";
}else if(bat_fig < 61){
bat_prog.style.backgroundColor = "#ffff00";
color_box.value = "#ffff00";
}else if(bat_fig < 81){
bat_prog.style.backgroundColor = "#80ff00";
color_box.value = "#80ff00";
}else if(bat_fig <= 100){
bat_prog.style.backgroundColor = "#00ff00";
color_box.value = "#00ff00";
}
})


    var $setRows = $('#setRows');

$setRows.click(function (e) {
  e.preventDefault();
  var rowPerPage = 7; //한 페이지에 보이는 데이터 개수

  var zeroWarning = 'Sorry, but we cat\'t display "0" rows page. + \nPlease try again.'
  if (!rowPerPage) {
    alert(zeroWarning);
    return;
  }
  $('#review_nav').remove();
  var $products = $('#products');

  $products.after('<div id="review_nav">');

  var $tr = $($products).find('tr');
  var rowTotals = $tr.length;
  console.log(rowTotals);

  var pageTotal = Math.ceil(rowTotals/ rowPerPage);
  var i = 0;

  for (; i < pageTotal; i++) {
    $('<a href="#"></a>')
        .attr('rel', i)
        .html(i + 1)
        .appendTo('#review_nav');
  }

  $tr.addClass('off-screen')
      .slice(0, rowPerPage)
      .removeClass('off-screen');

  var $pagingLink = $('#review_nav a');
  $pagingLink.on('click', function (evt) {
    evt.preventDefault();
    var $this = $(this);
    if ($this.hasClass('active')) {
      return;
    }
    $pagingLink.removeClass('active');
    $this.addClass('active');

    // 0 => 0(0*4), 4(0*4+4)
    // 1 => 4(1*4), 8(1*4+4)
    // 2 => 8(2*4), 12(2*4+4)
    // 시작 행 = 페이지 번호 * 페이지당 행수
    // 끝 행 = 시작 행 + 페이지당 행수

    var currPage = $this.attr('rel');
    var startItem = currPage * rowPerPage;
    var endItem = startItem + rowPerPage;

    $tr.css('opacity', '0.0')
        .addClass('off-screen')
        .slice(startItem, endItem)
        .removeClass('off-screen')
        .animate({opacity: 1}, 300);

  });

  $pagingLink.filter(':first').addClass('active');

});

$setRows.submit();
