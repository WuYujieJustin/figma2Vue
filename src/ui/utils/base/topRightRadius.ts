export const topRightRadius = (val: number) => {
    if (val === 0) {
        return {}
    }
    return {
        'border-top-right-radius': val + 'px'
    }
}