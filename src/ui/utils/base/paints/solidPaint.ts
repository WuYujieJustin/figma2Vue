export const SolidPaint = (val: SolidPaint) => {
    const { color, opacity } = val
    const { r, g, b } = color
    return {
        'background-color': `rgba(${r * 256}, ${g * 256}, ${b * 256}, opacity)`
    }
}