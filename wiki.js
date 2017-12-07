window.onload = function() {
    $('input[type=search]').focus();
};
$('input[type=submit]').click(
    function() {
        var key = "https://en.wikipedia.org//w/api.php?action=opensearch&format=json&search="
        var searchTerm = $('input[type=search]').val();
                     $.ajax({
                    url: key+searchTerm,
                    dataType: 'jsonp',
                    success: function(data) {
            console.log(data[1]);
            var i = 0,
                title = data[1],
                description = data[2],
                link = data[3];

            for (i; i < data[3].length; i++) {
                var linkList = '<a href="' + link[i] + '">' + title[i] + '</a>',
                    listDesc = '<li>' + linkList + '<br>' + description[i] + '</li>';

                $('div:last').append(listDesc);
                
            };
                     
        }
                    
                         });
       $("input[type=search]").val('');
        $("div:last").text('');
        });
      
                        
$("input[type=search]").keyup(function(event) {
    if (event.keyCode == 13) {
        $("input[type=submit]").click();
    }
});

$('button').click(function() {
    window.open("https://en.wikipedia.org/wiki/Special:Random");
})