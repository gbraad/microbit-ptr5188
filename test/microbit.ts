radio.setGroup(1)
basic.forever(function () {
    basic.showString(" ")
})

input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
    basic.showString("A")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
    basic.showString("B")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("X")
    basic.showString("X")
})

radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        basic.showString("A")
    }
    if (receivedString == "B") {
        basic.showString("B")
    }
    if (receivedString == "X") {
        basic.showString("X")
    }
})
