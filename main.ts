let _1 = 0
input.onLogoEvent(TouchButtonEvent.LongPressed, function () {
    music.setBuiltInSpeakerEnabled(true)
})
input.onButtonPressed(Button.A, function () {
    led.setBrightness(100)
})
input.onButtonPressed(Button.AB, function () {
    led.setBrightness(255)
})
input.onButtonPressed(Button.B, function () {
    led.setBrightness(180)
})
input.onGesture(Gesture.Shake, function () {
    _1 = randint(1, 3)
    if (_1 == 1) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.Square)
    } else if (_1 == 2) {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.SmallSquare)
    } else {
        music.playSoundEffect(music.createSoundEffect(WaveShape.Square, 500, 499, 255, 0, 750, SoundExpressionEffect.None, InterpolationCurve.Linear), SoundExpressionPlayMode.InBackground)
        basic.showIcon(IconNames.Scissors)
    }
})
input.onLogoEvent(TouchButtonEvent.Pressed, function () {
    music.setBuiltInSpeakerEnabled(false)
})
