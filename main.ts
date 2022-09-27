input.onButtonPressed(Button.A, function () {
    counter += 1
})
// When both are pressed the microbit lights up to show the final value of the variable
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(counter)
})
// When B is pressed it changes the value of the variable by negative one
input.onButtonPressed(Button.B, function () {
    counter += -1
})
let counter = 0
counter = 0
