var main = function() {
  //constants
  var blank = '';
  var results = [blank, blank,
                 blank, blank];
  var row1Parent = $('#parentrow1').val();
  var row2Parent = $('#parentrow2').val();
  var column1Parent = $('#parentColumn1').val();
  var column2Parent = $('#parentColumn2').val();

  function run() {

    results[0] = row1Parent + column1Parent;
    results[1] = row1Parent + column2Parent;
    results[2] = row2Parent + column1Parent;
    results[3] = row2Parent + column2Parent;

    $('sol0').html(results[0]);
    $('sol1').html(results[1]);
    $('sol2').html(results[2]);
    $('sol3').html(results[3]);
  }

  run();

}
