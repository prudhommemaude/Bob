/* eslint-disable no-unused-vars */

export default function Bob() {
  this.hey = function(message) {
    if(message == message.toUpperCase() && containsLetters(message)) {
      return "Whoa, chill out!"
    } else if(message.charAt(message.length - 1) == "?") {
      return "Sure."
    } else if(message.trim() == "") {
      return "Fine. Be that way!"
    } else {
      return "Whatever."
    }
  }

  function containsLetters(message) {
    return /[a-zA-Z]/.test(message)
  }
}