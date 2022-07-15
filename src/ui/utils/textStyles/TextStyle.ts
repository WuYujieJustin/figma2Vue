import { letterSpacing } from './letterSpacing'
import { fontName } from './fontName'
import { textDecoration } from './textDecoration'
import { lineHeight } from './lineHeight'

export const textStyle = (val: TextStyle) => {
    const letterSpacingValue = letterSpacing(val.letterSpacing)
    const fontNameValue = fontName(val.fontName)
    const textDecorationValue = textDecoration(val.textDecoration)
    const lineHeightValue = lineHeight(val.lineHeight)
    return {
        'font-size': val.fontSize + 'px',
        ...letterSpacingValue,
        ...fontNameValue,
        ...textDecorationValue,
        ...lineHeightValue
    }
}