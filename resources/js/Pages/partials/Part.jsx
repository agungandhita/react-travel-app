import React from 'react'

const Part = () => {

    var strings = [];
    strings.push(
      "first text",
      "second text",
      "third text"
    );
    
    var htmlContent = '';
    var textAreaContent = '';
    $(document).ready(function() {
      strings.forEach(element => htmlContent += "<li>" + element + "</li>");
      $("#tampilan").html(htmlContent);
      var i = 1;
      strings.forEach(function(element) {
        if (strings.length == i)
          textAreaContent += ">" + element;
        else
          textAreaContent += ">" + element + "\n";
        i++;
      });
      $("#banner").val(textAreaContent);
    })
    

    

    
    $("#banner").keyup(function(e) {
      var code = e.keyCode ? e.keyCode : e.which;
      if (code == 13) {
        var text = $(this).val();
        text += ">";
        $(this).val(text);
      }
    });


  return (
    <div>
        <textarea id="banner" className="message" >

        </textarea>

        <div id="tampilan" class="message" style="overflow-y:auto">
        </div>
    </div>
  )
}

export default Part