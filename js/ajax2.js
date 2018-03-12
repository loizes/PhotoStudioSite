$.ajax({
    url: 'send.php',
    method: 'post',
    dataType: 'json',
    success: function (res) {
       console.log(res.mess)
    }
})