export const increment = (num) => {
    return (dispatch) => {
        dispatch({
            type: 'increment',
            data: num
        })
    }
}

export const decrement = (num) => {
    return (dispatch) => {
        dispatch({
            type: 'decrement',
            data: num
        })
    }
}