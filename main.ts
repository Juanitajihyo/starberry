for (let index = 0; index < 2; index++) {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    basic.showIcon(IconNames.SmallDiamond)
    basic.showIcon(IconNames.Diamond)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showLeds(`
        # . . . #
        . . . . .
        . . . . .
        . . . . .
        # . . . #
        `)
    basic.showLeds(`
        . # . # .
        # . . . #
        . . . . .
        # . . . #
        . # . # .
        `)
    basic.showIcon(IconNames.Heart)
}
basic.pause(2000)
basic.showString("  STARBERRY+")
basic.showString("¡Fresas con Crema!")
basic.showString("A tan solo 5000 pesitos")
basic.showString("COMPRALAS YA")
basic.showIcon(IconNames.Heart)
