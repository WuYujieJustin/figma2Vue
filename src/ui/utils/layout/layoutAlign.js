export const layoutAlign = val => {
    // 'MIN' | 'CENTER' | 'MAX' | 'STRETCH' | 'INHERIT'
    const dict = {
        MIN: 'start',
        CENTER: 'center',
        MAX: 'end',
        STRETCH: 'stretch',
        INHERIT: 'flex-start'
    }
    return {
        'align-items': dict[val]
    }
}