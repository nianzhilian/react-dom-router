function visiblityFilter(state="show_all",action){
    switch (action.type) {
        case 'set_visibility':
            return action.filter
            break;
    
        default:
            return state
            break;
    }
}

export default visiblityFilter