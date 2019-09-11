export default (state={username:'',age:19},action) => {
    switch (action.type) {
        case 'SET_NAME':
            state.username = action.name
            return {...state};
        case 'AGE':
            state.age = action.age
            return {...state}
        default:
            return state
    }
}