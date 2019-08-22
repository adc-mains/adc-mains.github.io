
window.addEventListener('DOMContentLoaded', (event) => {
    var chat = false;
    var chatId = document.getElementById("mainwrapper")
    document.getElementById('openbtn').onclick = function() {
        
        console.log("hahaha")
        var iframe = document.createElement('iframe');
        iframe.src = 'https://www.twitch.tv/embed/turbofister999/chat?darkpopout';
        iframe.height = 720;
        iframe.width = 350;
        iframe.frameBorder = 0;
        iframe.scrolling = "no";
        if (chat == false) {
            document.getElementById("chat").style.width = "350px";
            
            document.getElementById("chat").appendChild(iframe);
            chat = true
        } else {
            document.getElementById("chat").style.width = "0px";
            var iframes = document.querySelectorAll('iframe');
            iframes[1].parentNode.removeChild(iframes[1])
            chat = false;
        }
        
     
     };

     
});



// function openNav() {
//     if (chat == false) {
//        document.getElementById("chat").style.width = "350px";
//        chat = true;
//     } else {
//        document.getElementById("chat").style.width = "0px";
//        chat = false;
//     }
   
   // document.getElementById("main").style.marginLeft = "250px";
//  }