import {GET_COVID_DATA} from '../actions/types'
const initialState = {
    data: [],
    loading: false


}

export default (state= initialState,{type, payload}) =>{

    switch(type){
        case GET_COVID_DATA:
            console.log('coing')
            return{
                   ...state,
                   data: payload,
                   loading:true
            }
        default:
            return state;
    }

}