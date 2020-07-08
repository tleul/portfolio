import {GET_COVID_DEATH_BYDAY} from '../actions/types'
const initialState = {
    data: [],
    loading: false


}

export default (state= initialState,{type, payload}) =>{

    switch(type){
        case GET_COVID_DEATH_BYDAY:
          
            return{
                   ...state,
                   data: payload,
                   loading:true
            }
        default:
            return state;
    }

}