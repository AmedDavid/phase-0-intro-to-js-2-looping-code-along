// Code your solutions in this file

const writeCards = (names, event) => {
    let messages = []
    for (let i = 0; i < names.length; i++) {
        messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return messages
}

const countDown = (num) => {
    while (num >= 0) {
        console.log(num)
        num--
    }
}

writeCards(["Ada", "Brendan", "Ali"], "birthday")
countDown(
    10
)

