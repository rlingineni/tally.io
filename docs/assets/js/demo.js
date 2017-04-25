function red_buttonClick(){

    console.log("HELLO Red!!!")
    var payload = [{"buttonID":"red-button"}];
    var base = "https://tally.us-east-1.elasticbeanstalk.com";

$.ajax({
    type: "POST",
    url: base + "/api/data/insert/TallyDemoButtons",
    // The key needs to match your method's input parameter (case-sensitive).
    data: JSON.stringify(payload),
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    complete: function(data){
        //Get the new Aggregates upon insert
       /* $.ajax({
        url: base + "/api/aggregates/retrieve/TallyDemoButtons",
        type: 'GET',
        crossDomain: true,
        dataType: 'json',
        error: function (xhr, ajaxOptions, thrownError) {
    alert(xhr.status);
    alert(thrownError);
  },
  complete: function(r) {
        result = r.responseText
        document.getElementById("sample").innerHTML = result
        }
    });*/
     
    
},
    error: function(xhr, ajaxOptions, thrownError) {
         alert(xhr.status);
    alert(thrownError);
    }
});




  

}

function green_buttonClick(){

    console.log("HELLO Green!!!")
}

function blue_buttonClick(){

    console.log("HELLO Blue!!!")
}

