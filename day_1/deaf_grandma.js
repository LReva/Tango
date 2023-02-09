const re = /[a-z]/
const re_2 = /[A-Z]/

function deaf_grandma() {
  let continue_talk = true
  let count_goodbye = 0
  console.log("HEY KID!")
  while (continue_talk === true) {
    const prompt = require('prompt-sync')()
    let talk = prompt(`>`)
    if (talk == "") {
      console.log("WHAT?")
    } else if (talk === "GOODBYE!" && count_goodbye ===0) {
      console.log("LEAVING SO SOON?")
      count_goodbye += 1
    } else if (talk === "GOODBYE!" && count_goodbye ===1) {
      console.log("LATER, SKATER!")
      continue_talk = false
    } else if (re.test(talk)) {
      console.log("SPEAK UP, KID!")
    } else if (re_2.test(talk)) {
      console.log("NO, NOT SINCE 1946!")
    }
  }
}
  
deaf_grandma()