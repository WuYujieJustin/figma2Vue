export const blendMode = (val: BlendMode) => {
    return val.replace('-', '_').toLowerCase()
}