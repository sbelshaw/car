enum RadioMessage {
    message1 = 49434,
    startstop = 5388,
    stopstart = 20043,
    right = 32391,
    left = 14947
}
radio.onReceivedMessage(RadioMessage.left, function () {
    RingbitCar.steering_angle(RingbitCar.Direction_turn.right, 35)
})
radio.onReceivedMessage(RadioMessage.stopstart, function () {
    if (stopstart == true) {
        stopstart = false
    } else {
        stopstart = true
    }
})
radio.onReceivedMessage(RadioMessage.right, function () {
    RingbitCar.steering_angle(RingbitCar.Direction_turn.left, 35)
})
let stopstart = false
radio.setGroup(3)
RingbitCar.freestyle(100, 100)
stopstart = false
basic.forever(function () {
    if (stopstart == true) {
        RingbitCar.brake()
    }
    if (stopstart == false) {
        RingbitCar.back()
    }
})
