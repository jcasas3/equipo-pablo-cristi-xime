input.onPinPressed(TouchPin.P0, function () {
    order += 1
    pressed_pin = 1
    nivel[order] = pressed_pin
    basic.pause(200)
})
input.onButtonPressed(Button.A, function () {
    order_pc = 0
    order = 0
    for (let index = 0; index <= 4; index++) {
        random = randint(1, 3)
        order_pc += 1
        basic.showNumber(random)
        basic.clearScreen()
        basic.pause(200)
        nivel1_pc[order_pc] = random
    }
})
input.onPinPressed(TouchPin.P2, function () {
    order += 1
    pressed_pin = 3
    nivel[order] = pressed_pin
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    cont_ganar = 0
    for (let index = 0; index <= 4; index++) {
        if (nivel1_pc[index] == nivel[index]) {
            cont_ganar += 1
        }
    }
    if (cont_ganar == 5) {
        basic.showString("Win")
    } else {
        basic.showString("Lose")
    }
})
input.onPinPressed(TouchPin.P1, function () {
    order += 1
    pressed_pin = 2
    nivel[order] = pressed_pin
    basic.pause(200)
})
let pressed1 = 0
let pressed0 = 0
let cont_ganar = 0
let random = 0
let pressed_pin = 0
let nivel1_pc: number[] = []
let nivel: number[] = []
let order_pc = 0
let order = 0
order = -1
order_pc = -1
nivel = [0, 0, 0]
nivel1_pc = [0, 0, 0]
basic.forever(function () {
    basic.pause(200)
    if (input.buttonIsPressed(Button.A)) {
        pressed0 += 1
    } else if (input.buttonIsPressed(Button.B)) {
        pressed1 += 1
    }
})
