export const add = (routes)=>(
    {
        type:'add',
        routes
    }
)

export const reset = ()=>({
    type:'remove',
    routes:[]
})