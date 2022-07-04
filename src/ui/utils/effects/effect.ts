import { dropShodowEffect } from './dropShodowEffect'
import { innerShadowEffect } from './innerShadowEffect'
// todo BlurEffect?
export const effect = (val: DropShadowEffect | InnerShadowEffect | BlurEffect) => {
    // todo default DROP_SHADOW
    const { type } = val
    if (type === 'DROP_SHADOW') {
        return dropShodowEffect(val)
    }
    if (type === 'INNER_SHADOW') {
        return innerShadowEffect(val)
    }
    return {}
}