export const color = (val: RGBA) => {
    const color = 'rgba(' + val.r * 255 + ',' + val.g * 255 + ',' + val.b * 255 + ',' + val.a + ')'
    return {
        color
    }
}