const urlstart = "https://kusis.ku.edu.tr/";
// var textbox = document.getElementById("textbox");
console.log("asdasd")




//Upon click
chrome.tabs.onUpdated.addListener(function(t,e,a) {
    //If user clicked to the button and user is in the right page
    // textbox.innerHTML = "Please wait"
    fnc();
  });

async function fnc(){
  console.log("aaaa")
  await chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
    url = tabs[0].url;
    console.log(url)
    if (url.slice(0,urlstart.length) != urlstart){
        // textbox.innerHTML = "The open tab is not a mcgrawhill ebook!";
        return;
    }
    chrome.tabs.executeScript(null, {
      file: "/inject.js"
    }, function() {
      // If you try and inject into an extensions page or the webstore/NTP you'll get an error
      if (chrome.runtime.lastError) {
        // textbox.innerText = 'There was an error injecting script : \n' + chrome.runtime.lastError.message;
      }
    });
});
}
