const counterReducer = (state = 0, action) => {
    if (action.type == 'increment'){
        return state + action.data
    }
    else if(action.type == 'decrement'){
        return state - action.data
    }
    else{
        return state
    }
}

export default counterReducer