export const topLeftRadius = (val: number) => {
    if (val === 0) {
        return {}
    }
    return {
        'border-top-left-radius': val + 'px'
    }
}