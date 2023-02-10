function deafGrandma() {
    let userInput = window.prompt("HEY, KID!")
    let goodbyes = 0
    while (goodbyes < 2) {
        
        if ( userInput === "" ) {
            userInput = window.prompt("WHAT!?")
        }
        else if ( userInput.toUpperCase() !== userInput ) {
            userInput = window.prompt("SPEAK UP, KID!")
        }
        else if ( userInput.toUpperCase() === userInput &&  userInput !== "GOODBYE!" ) {
            userInput = window.prompt('NO, NOT SINCE 1946!')
        }
        else if ( userInput === "GOODBYE!" ) {
            goodbyes += 1
            if ( goodbyes === 1 ) {
                userInput = window.prompt("LEAVING SO SOON?")
            }
            else if ( goodbyes === 2 ) {
                alert("LATER, SKATER!")
                goodbyes++
            }
        }
    }
}

deafGrandma()