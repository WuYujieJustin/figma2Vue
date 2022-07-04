export const fontName = (val: FontName) => {
    const { family, style } = val
    return {
        'font-family': `${family}, ${style}`
    }
}