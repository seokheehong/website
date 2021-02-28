// inspired by: https://dev.to/ljcdev/simple-typing-effect-pure-js-4p5m

var typeText = document.querySelector(".typeText")
var titles = ["a learner.", "a programmer.", "a researcher.", "a student.", "Korean.", "a friend."]
var index = 0, isAdding = true, titlesIndex = 0;

function playAnim() {
  setTimeout(function () {
    // set the text of typeText to a substring of the text to be typed using index.
    typeText.innerText = titles[titlesIndex].slice(0, index)
    if (isAdding) {
      // adding text
      if (index > titles[titlesIndex].length) {
        // no more text to add
        isAdding = false
       //break: wait 2s before playing again
       // play cursor blink animation
       typeText.classList.add("showAnim")
       setTimeout(function () {
         // remove cursor blink animation
         typeText.classList.remove("showAnim")
         playAnim()
       }, 1000)
        return
      } else {
        index++
      }
    } else {
      // removing text
      if (index === 0) {
        // no more text to remove
        isAdding = true
        //switch to next text in text array
        titlesIndex = (titlesIndex + 1) % titles.length
      } else {
        index--
      }
    }
    playAnim()    // call itself
  }, isAdding ? 120 : 60)
  //  The ternary operator means if it's adding set the delay to 120ms. If it's removing set the delay to 60ms.
}

// start animation
playAnim()
