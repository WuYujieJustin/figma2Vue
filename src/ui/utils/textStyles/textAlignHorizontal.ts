export const textAlignHorizontal = (val: 'LEFT' | 'CENTER' | 'RIGHT' | 'JUSTIFIED') => {
    return {
        'text-align': val.toLowerCase()
    }
}