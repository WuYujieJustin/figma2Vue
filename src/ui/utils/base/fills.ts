import { SolidPaint } from "./paints/SolidPaint"
export const fills = (val: SolidPaint | GradientPaint | ImagePaint) => {
    const { type } = val
    if (type === 'SOLID') {
        return SolidPaint(val)
    }
    return {}
}