// onStart
led.enable(false)
radio.setGroup(1)

basic.forever(function () {

})

input.onButtonPressed(Button.A, function () {
    radio.sendString("A")
})

input.onButtonPressed(Button.B, function () {
    radio.sendString("B")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendString("X")
})

radio.onReceivedString(function (receivedString) {
    if (receivedString == "A") {
        pins.digitalWritePin(DigitalPin.P8, 1)
    }
    if (receivedString == "B") {
        pins.digitalWritePin(DigitalPin.P6, 1)
    }
    if (receivedString == "X") {
        pins.digitalWritePin(DigitalPin.P6, 0)
        pins.digitalWritePin(DigitalPin.P8, 0)
    }
})
