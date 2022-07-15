export const lineHeight = (val: LineHeight) => {
    if (val.unit === 'AUTO') {
        return {}
    }
    const base = val.value
    const unit = (val.unit === 'PIXELS') ? 'px' : '%'
    return {
        'line-height': base + unit
    }
}