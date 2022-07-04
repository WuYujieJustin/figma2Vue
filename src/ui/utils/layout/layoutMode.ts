export const layoutMode = (val: BaseFrameMixin['layoutMode']) => {
    // 'NONE' | 'HORIZONTAL' | 'VERTICAL'
    if (val === 'NONE') {
        return {}
    }
    if (val === 'HORIZONTAL') {
        return {
            'display': 'flex',
            'flex-direction': 'row'
        }
    }
    if (val === 'VERTICAL') {
        return {
            'display': 'flex',
            'flex-direction': 'column'
        }
    }
}