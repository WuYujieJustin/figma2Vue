export const color = val => {
    if (val.a) {
        return 'rgb(' + Object.keys(val).map(key => val[key]).join(',') + ')'
    }
}