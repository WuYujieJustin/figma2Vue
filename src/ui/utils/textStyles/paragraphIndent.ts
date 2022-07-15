export const paragraphIndent = (val: number) => {
    if (!val) {
        return {}
    }
    return {
        'text-indent': val + 'px'
    }
}