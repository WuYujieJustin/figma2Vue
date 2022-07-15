// https://www.figma.com/plugin-docs/api/properties/nodes-fills/
export const SolidPaint = (val: SolidPaint, node: SceneNode) => {
    // fills
    // The paints used to fill the area of the shape
    // so for TextNode it should be color property
    // otherwise it should be background-color property
    const { type } = node
    const { color, opacity } = val
    const { r, g, b } = color
    const colorRGBA = `rgba(${r * 256}, ${g * 256}, ${b * 256}, ${opacity})`
    if (type === 'TEXT') {
        return {
            color: colorRGBA,
        }
    }
    return {
        'background-color': colorRGBA
    }
}