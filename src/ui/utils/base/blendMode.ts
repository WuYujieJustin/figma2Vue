export const blendMode = (val: BlendMode) => {
    const helper = val.replace('-', '_').toLowerCase()
    return {
        'blend-mode': helper
    }
}