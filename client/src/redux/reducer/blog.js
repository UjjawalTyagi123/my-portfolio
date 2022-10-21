import { FETCH_ALL,SEND } from "../../components/Consonants";

const blogs=(state={blogs:[]},action)=>{
    switch(action.type){
        
        case FETCH_ALL:
            
            return{...state,
                blogs:action.payload}
        case SEND:
            return state;
       default:
        return state;
    }

}

export default blogs;