export const textDecoration = (val: TextDecoration) => {
    if (val === 'NONE') {
        return {}
    }
    return {
        'text-decoration': val.toLowerCase()
    }
}