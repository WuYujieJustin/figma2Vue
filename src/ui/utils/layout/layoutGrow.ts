export const layoutGrow = (val: LayoutMixin['layoutGrow']) => {
    // 0 | 1
    if (val === 0) return {}
    return {
        'flex': 1
    }
}