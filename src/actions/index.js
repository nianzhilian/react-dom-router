let index = 0;
export const add = (text)=>(
    {
        type:'add',
        id:index++,
        text
    }
)

export const toogleTodo = (id)=>(
    {
        type:'toogle',
        id
    }
)

export const setVisibilityFilter = (filter)=>(
    {
        type:'set_visibility',
        filter
    }
)