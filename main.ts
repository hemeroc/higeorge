controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.jumpUp), music.PlaybackMode.InBackground)
    colorCycle = 0
    changeColor(1)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isAnimationRunning == false) {
        music.play(music.melodyPlayable(music.beamUp), music.PlaybackMode.InBackground)
        animation.runMovementAnimation(
        georgeText,
        animation.animationPresets(animation.bobbing),
        1000,
        true
        )
        animation.runMovementAnimation(
        georgeLogo,
        animation.animationPresets(animation.bobbing),
        1000,
        true
        )
        isAnimationRunning = true
    } else {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        resetLogoAndText()
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (isAnimationRunning == false) {
        music.play(music.melodyPlayable(music.spooky), music.PlaybackMode.InBackground)
        animation.runMovementAnimation(
        georgeText,
        animation.animationPresets(animation.shake),
        1000,
        true
        )
        animation.runMovementAnimation(
        georgeLogo,
        animation.animationPresets(animation.shake),
        1000,
        true
        )
        isAnimationRunning = true
    } else {
        music.stopAllSounds()
        music.play(music.melodyPlayable(music.smallCrash), music.PlaybackMode.InBackground)
        resetLogoAndText()
    }
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.powerUp), music.PlaybackMode.InBackground)
    colorCycle = 1
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.powerDown), music.PlaybackMode.InBackground)
    colorCycle = -1
})
function resetLogoAndText () {
    animation.stopAnimation(animation.AnimationTypes.All, georgeText)
    animation.stopAnimation(animation.AnimationTypes.All, georgeLogo)
    georgeText.left = 55
    georgeText.top = 40
    georgeLogo.left = 15
    georgeLogo.top = 30
    isAnimationRunning = false
}
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    music.play(music.melodyPlayable(music.jumpDown), music.PlaybackMode.InBackground)
    colorCycle = 0
    changeColor(-1)
})
function changeColor (num: number) {
    color += num
    if (color > 8) {
        color = 2
    } else if (color < 2) {
        color = 8
    }
    scene.setBackgroundColor(color)
}
let georgeText: TextSprite = null
let georgeLogo: Sprite = null
let isAnimationRunning = false
let colorCycle = 0
let color = 0
color = 2
colorCycle = 1
isAnimationRunning = false
scene.setBackgroundColor(color)
georgeLogo = sprites.create(assets.image`george`, SpriteKind.Player)
georgeLogo.left = 15
georgeLogo.top = 30
georgeText = textsprite.create("Hi, I'm George.")
georgeText.setMaxFontHeight(0)
georgeText.left = 55
georgeText.top = 40
game.onUpdateInterval(1000, function () {
    if (colorCycle != 0) {
        changeColor(colorCycle)
    }
})
