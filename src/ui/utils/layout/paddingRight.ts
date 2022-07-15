export const paddingRight = (val: number) => {
    if (val === 0) {
        return {}
    }
    return {
        'padding-right': val + 'px'
    }
}