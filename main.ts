input.onButtonPressed(Button.A, function () {
    tm.on()
})
input.onButtonPressed(Button.AB, function () {
    item = 0
    tm.showNumber(item)
    if (item >= 5) {
        tm.off()
    }
})
let tm: TM1637.TM1637LEDs = null
let item = 0
item = 0
tm = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
10
)
let TurnOff = TM1637.create(
DigitalPin.P1,
DigitalPin.P2,
7,
5
)
basic.forever(function () {
    if (item < 5) {
        item += 1
        tm.showNumber(item)
        basic.pause(1000)
    }
})
