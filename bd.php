<?php 
$connection = mysql_connect("localhost","rwb","123457");
$db = mysql_select_db("rwbstudio");
mysql_query("SET_NAMES 'utf8' ");


if(!$connection || !$db)
{
    exit(mysql_error());
}




?>