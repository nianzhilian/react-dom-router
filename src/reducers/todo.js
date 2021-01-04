function todos(state=[],action){
    switch (action.type) {
        case 'add':
            return action.routes.map((item,i)=>{
                return Object.assign({},item,{isAuth:true})
            })
            break;
        case 'remove':
            return []
            break;
        default:
            return state
            break;
    }
}

export default todos