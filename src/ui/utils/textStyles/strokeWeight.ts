export const strokeWeight = (val: number) => {
    // 0 => 400 1 => 600
    if (val) {
        return {
            'font-weight': 'bold'
        }
    }
    return {
    }
}