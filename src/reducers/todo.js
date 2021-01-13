
const loadState = ()=>{
    try {
        const serializedState = localStorage.getItem('routes');
        if(serializedState == null){
            return []
        }else{
            return  JSON.parse(serializedState)
        }
    } catch (error) {
        return undefined
    }
}
function todos(state=loadState(),action){
    switch (action.type) {
        case 'add':
            const routes = action.routes.map((item,i)=>{
                return Object.assign({},item,{isAuth:true})
            })
            localStorage.setItem('routes',JSON.stringify(routes))
            return action.routes.map((item,i)=>{
                return Object.assign({},item,{isAuth:true})
            })
            break;
        case 'remove':
            localStorage.removeItem('routes')
            return []
            break;
        default:
            return state
            break;
    }
}

export default todos