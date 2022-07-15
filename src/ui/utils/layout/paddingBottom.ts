export const paddingBottom = (val:number) => {
    if (val === 0) {
        return {}
    }
    return {
        'padding-bottom': val + 'px'
    }
}