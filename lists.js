
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

// function clearBox(result)
// {
//     document.getElementById(result).innerHTML = "";
// };


    $(document).ready(function(){



    $("#myform").submit(function(e){

      e.preventDefault();



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
        var review='';


        console.log("Search for "+search);


        $.get("https://www.googleapis.com/books/v1/volumes?q="+ search + "&key=" + googleBooksKey ,function(response){
            $("#result").empty();
              for(i=0;i<response.items.length;i++){

                  title=$('<h5>'+response.items[i].volumeInfo.title + '</h5>');
                  author=$('<h5>'+response.items[i].volumeInfo.authors + '</h5>');

                  img=$('<img><a href=' + response.items[i].volumeInfo.infoLink + "><br><br><br><button width='100%' text-align='center' display='block'>Read More</button></a>");

                  url=response.items[i].volumeInfo.imageLinks.thumbnail;
                  review=$('<h5>' + response.items[i].volumeInfo.description + '</h5>');

                  img.attr('src',url);

                  title.appendTo("#result");
                  author.appendTo("#result");
                  img.appendTo("#result");

                  review.appendTo("#result");




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
        };


      // delete(search); //should delete search variable.  should also clear search results
      // console.log(search);

    });
