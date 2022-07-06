import { textStyles } from './textStyles/index';
import { layout } from './layout'
import { effects } from './effects'
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

export const getStyleObj = (val: SceneNode) => {
    console.log(val)
    let helper = {}
    const nodeObj: SceneNode = JSON.parse(JSON.stringify(val))
    console.log(nodeObj)
    Object.keys(nodeObj).forEach(key => {
        const runner = helperAny[key] || helperLayout[key] || helperEffects[key] || helperbase[key]
        let obj = {}
        if (typeof runner === 'function') {
            obj = runner(val[key as keyof SceneNode])
        }
        helper = Object.assign(obj, helper)
    })
    return helper
}