export const bottomRightRadius = (val: number) => {
    if (val === 0) {
        return {}
    }
    return {
        'border-bottom-right-radius': val + 'px'
    }
}