export const itemSpacing = (val: number) => {
    if (val === 0) {
        return {}
    }
    return {
        gap: val + 'px'
    }
}