export const letterSpacing = (val: LetterSpacing) => {
    const { unit, value } = val
    if (unit === 'PIXELS') {
        if (value === 0) {
            return {}
        }
        return {
            'letter-spacing': value + 'px'
        }
    } else {
        return {}
    }
}