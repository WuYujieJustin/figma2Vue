export const letterSpacing = (val: LetterSpacing) => {
    const { unit, value } = val
    if (unit === 'PIXELS') {
        return {
            'letter-spacing': value
        }
    } else {
        return {}
    }
}