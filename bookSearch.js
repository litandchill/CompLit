var googleBooksKey = config.GOOGLE_BOOKS_KEY;
//
// function searchBooks(){
//   fetch('https://www.googleapis.com/books/v1/volumes?q=' + nytimesKey, {
//     method: 'get'
//   })
//   for (var i = 0; i < response.items.length; i++) {
//     var item = response.items[i];
//     // in production code, item.text should have the HTML entities escaped.
//     document.getElementById("content").innerHTML += "<br>" + item.volumeInfo.title;
//   }
// }


    $(document).ready(function(){
    $("#myform").submit(function(e){
      e.preventDefault()
    var search = $("#books").val();
    if(search=='')
    {
     alert("Please enter something in the field");

    }


    else{
        var url='';
        var img='';
        var title='';
        var author='';

        console.log("Search for "+search);

        $.get("https://www.googleapis.com/books/v1/volumes?q="+ search + "&key=" + googleBooksKey ,function(response){

              for(i=0;i<response.items.length;i++){

                  title=$('<h5>'+response.items[i].volumeInfo.title + '</h5>');
                  author=$('<h5>'+response.items[i].volumeInfo.authors + '</h5>');

                  img=$('<img><a href=' + response.items[i].volumeInfo.infoLink + "><button display='block'>Read More</button></a>");
                  url=response.items[i].volumeInfo.imageLinks.thumbnail;

                  img.attr('src',url);

                  title.appendTo("#result");
                  author.appendTo("#result");
                  img.appendTo("#result");


              }

        });

    }
    });
    return false;
    });


    $(window).scroll(function (event) {
        var scroll = $(window).scrollTop();
        if (scroll > 50) {
          $('#masthead').css({'height':'50', 'padding' : '8'})
          $('#nyt-logo').css({'height':'35'})
        } else {
          $('#masthead').css({'height':'100', 'padding':'10'});
          $('#nyt-logo').css({'height':'80'})
        }
    });
