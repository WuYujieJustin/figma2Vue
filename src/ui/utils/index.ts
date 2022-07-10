import { effects } from './effects/index';
import { textStyles } from './textStyles/index';
import { layout } from './layout'
import { base } from './base'
export const figma_transformer: object = {
    textStyles,
    layout,
    effects,
    base
}

// 
const helperAny = textStyles as any
const helperLayout = layout as any
const helperEffects = effects as any
const helperbase = base as any

// todo
// must return promise
export const getStyleObj = async (val: SceneNode) => {
    return new Promise(resolve => {
        let helper = {}
        const nodeObj: SceneNode = val
        Object.keys(nodeObj).forEach(key => {
            const runner = helperAny[key] || helperLayout[key] || helperEffects[key] || helperbase[key]
            let obj = {}
            if (typeof runner === 'function') {
                obj = runner(val[key as keyof SceneNode])
            }
            helper = Object.assign(obj, helper)
        })
        resolve(helper)
    })

}