document.addEventListener('DOMContentLoaded', function() {
    var checkPageButton = document.getElementById('activate');
    checkPageButton.addEventListener('click', function() {
       
        chrome.tabs.getSelected(null, function(tab) {
              
        function openWin()
        {
         myBtn=window.open('','','width=200,height=200');
         myBtn.document.write("<p>Image Name: Johnny Joe </p>");
         myBtn.document.write("<p>Image Size: 2.3 MB </p>");
         myBtn.focus();
         }
    });
    }, false);
  }, false);