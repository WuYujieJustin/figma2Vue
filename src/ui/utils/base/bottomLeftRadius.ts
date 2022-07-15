export const bottomLeftRadius = (val: number) => {
    if (val === 0) {
        return {}
    }
    return {
        'border-bottom-left-radius': val + 'px'
    }
}