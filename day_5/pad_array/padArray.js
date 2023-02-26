const pad = (array, minSize, value=null) => {
    if(minSize < array.length) {
        return array
    }
    let add_times = minSize - array.length
    for (let i = 1; i <= add_times; i++) {
        array.push(value)
    } return array
}

exports.pad = pad;