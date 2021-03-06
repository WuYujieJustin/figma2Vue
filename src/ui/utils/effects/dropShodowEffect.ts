import { color } from '../base/color'
export const dropShodowEffect = (val: DropShadowEffect) => {
    // todo default DROP_SHADOW
    const { type, offset, radius } = val
    const { x, y } = offset
    const helper = color(val.color)
    return {
        'text-shadow': `${x}'px'  ${y}'px' ${radius}'px'  ${helper}`
    }
}