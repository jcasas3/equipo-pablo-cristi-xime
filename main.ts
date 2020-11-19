input.onPinPressed(TouchPin.P0, function () {
    order_hu += 1
    pressed_pin = 0
    jugador_humano[order_hu] = pressed_pin
    basic.pause(200)
})
input.onButtonPressed(Button.A, function () {
    order_pc = 0
    for (let order_pc = 0; order_pc <= 4; order_pc++) {
        random = randint(0, 2)
        basic.showNumber(random)
        basic.clearScreen()
        basic.pause(100)
        jugador_computadora[order_pc] = random
    }
})
input.onPinPressed(TouchPin.P2, function () {
    order_hu += 1
    pressed_pin = 2
    jugador_humano[order_hu] = pressed_pin
    basic.pause(200)
})
input.onButtonPressed(Button.B, function () {
    cont_ganar = 0
    for (let index = 0; index <= 2; index++) {
        if (jugador_computadora[index] == jugador_humano[index]) {
            cont_ganar += 1
        }
    }
    if (cont_ganar == 3) {
        basic.showString("Win")
    } else {
        basic.showString("Lose")
    }
})
input.onPinPressed(TouchPin.P1, function () {
    order_hu += 1
    pressed_pin = 1
    jugador_humano[order_hu] = pressed_pin
    basic.pause(200)
})
let cont_ganar = 0
let random = 0
let order_pc = 0
let pressed_pin = 0
let jugador_computadora: number[] = []
let jugador_humano: number[] = []
let order_hu = 0
order_hu = -1
jugador_humano = [0, 0, 0]
jugador_computadora = [0, 0, 0]
basic.forever(function () {
	
})
