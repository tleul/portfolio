import {GET_COVID_DATA_AFRICA} from '../actions/types'
const initialState = {
    data: [],
    loading: false


}

export default (state= initialState,{type, payload}) =>{

    switch(type){
        case GET_COVID_DATA_AFRICA:
          
            return{
                   ...state,
                   data: payload,
                   loading:true
            }
        default:
            return state;
    }

}