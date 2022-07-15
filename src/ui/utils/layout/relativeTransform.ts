// https://www.figma.com/plugin-docs/api/Transform/
export const relativeTransform = (val: Transform) => {
    const dx = val[0][2]
    const dy = val[1][2]
    // use rotation instead
    // because rotation is parsed from relativeTransform
    // we should not do it again
    // const
    // https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/Math/acos
    // const angle = Math.acos(val[0][0])
    // console.log(dx, dy, angle)
    // https://developer.mozilla.org/en-US/docs/Web/CSS/angle
    // return {transform: `rotate(${-angle}rad)`}
    return {transform: `translate(${dx}px, ${dy}px)`}
}