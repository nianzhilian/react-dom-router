function todos(state=[],action){
    switch (action.type) {
        case 'add':
            return [...state,{
                id:action.id,
                text:action.text,
                completed:false
            }]
            break;
        case 'toogle':
            return state.map(todo=>{
                if(todo.id == action.id){
                    return Object.assign({},todo,{
                        completed: !todo.completed
                    })
                }
                return todo
            })
            break;
        default:
            return state
            break;
    }
}

export default todos