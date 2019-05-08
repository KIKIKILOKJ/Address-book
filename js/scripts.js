function contact(first, last){
  this.firstName = first;
  this.lastName = last;
}


$(document).ready(function(){
  $("form#new-contact").submit(function(event){
    event.preventDefault();

    var inputtedFirstName = $("input#new-first-name").val();
    var inputtedLatName = $("input#new-last-name").val();

    var newContact = new contact(inputtedFirstName, inputtedLatName);

    $("ul#contacts").append("<li><span class=`contact`>" + newContact.firstName + "</span></li>");

    $("input#new-first-name").val("");
    $("input#new-last-name").val("");
  })
})
