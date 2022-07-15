import { SolidPaint } from "./paints/SolidPaint"
export const fills = (paintArray: Paint[], nodeObj: SceneNode) => {
    if (paintArray.length === 0) {
        return {}
    }
    // todo
    // parse all element from Paint Array
    // currently just parse the first one
    const val = paintArray[0]
    const { type } = val
    if (type === 'SOLID') {
        return SolidPaint(val, nodeObj)
    }
    return {}
}