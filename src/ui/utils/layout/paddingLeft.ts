export const paddingLeft = (val: number) => {
    if (val === 0) {
        return {}
    }
    return {
        'padding-left': val + 'px'
    }
}