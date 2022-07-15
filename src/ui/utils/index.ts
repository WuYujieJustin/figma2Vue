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

// todo
// remove any type
const helperAny = textStyles as any
const helperLayout = layout as any
const helperEffects = effects as any
const helperbase = base as any

export const getStyleObj = async (val: SceneNode) => {
    return new Promise(resolve => {
        let helper = {}
        const dupKeys = []
        const nodeObj: SceneNode = val
        for (const key in nodeObj) {
            const runner = helperAny[key] || helperLayout[key] || helperEffects[key] || helperbase[key]
            let obj = {}
            if (typeof runner === 'function') {
                obj = runner(nodeObj[key as keyof SceneNode], nodeObj)
            }
            // check if style key exits in helper
            // if exists it should merge accordingly
            // otherwise merge directly
            const keys = Object.keys(obj)[0]
            if (key in helper) {
                dupKeys.push(key)
                helper = Object.assign(obj, helper)
            } else {
                helper = Object.assign(obj, helper)
            }
        }
        if (dupKeys.length) {
            console.log(dupKeys, 'keys dup')
        }
        resolve(helper)
    })

}


// todo
// add .d.ts
export const combineNode = (val:any, result = '') => {
    if (Array.isArray(val.children)) {
        val.children.forEach(ele => {
            result += combineNode(ele, '')
        })
    } else {
        const { style } = val
        const parsedStyle = Object.keys(style).reduce((acc, cur) => {
            acc += cur + ":" + style[cur] + ';'
            return acc
        }, '')
        const startTag = '<' + val.node + ' ' + 'style=' + "\"" + parsedStyle + "\"" + '>'
        const endTag = '</' + val.node + '>'
        if (val.text !== '') {
            result = startTag + val.text + result + endTag
        } else {
            result = startTag + result + endTag
        }
    }
    return result
}