import { VISIT_URL } from "./actionTypes"

const initURL = {
    URL: "/"
}

export const visitURLReducer = (store=initURL, {type, payload})=>{
    switch(type){
        case VISIT_URL:
            return {...store, URL:payload}

        default:
           return store    

    }
}