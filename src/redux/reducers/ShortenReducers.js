const intialState = {
    urls:[],
    
    
   
}

export const Shortenreducers = (state=intialState,actions)=>{
        switch(actions.type) {
            case "URLSALL":
                return {...state,urls:actions.payload}

            

            default:
                return state
        }
}