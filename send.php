<?php
  include_once("bd.php");
  if (isset($_POST['datetimepicker'])) {
      $dataTime = date("Y-m-d H:i:s", strtotime($_POST['datetimepicker']));
      // следующая строка с return вернет json и дальше нее выполнения не будет, 
      // проверьте ее актуальность, ее не должно быть, иначе mysql_query не выполнится
      //return  json_encode(['type'=> 'success', 'mess' => 'Ok']); 
  }
  else
  {
      return  json_encode(['type'=> 'error', 'mess' => 'Not found']);
  }
  if(mysql_query("INSERT INTO datetime(dateandtime) VALUES ('$dataTime')"))
  {
    mysql_close();
    return  json_encode(['type'=> 'success', 'mess' => 'Ok']);
  }
    ?>