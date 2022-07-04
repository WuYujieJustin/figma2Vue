export const lineHeight = (val: LineHeight) => {
    if (val.unit === 'AUTO') {
        return {}
    }
    return {
        'line-height': val.value + val.unit === 'PIXELS' ? 'px' : '%'
    }
}