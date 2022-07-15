export const paddingTop = (val: number) => {
    if (val === 0) {
        return {}
    }
    return {
        'padding-top': val + 'px'
    }
}