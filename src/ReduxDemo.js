import React, {Component} from 'react'

import {createStore} from 'redux'

class ReduxDemo extends Component{
    render(){

//step2 create reducer(it needs state and action)

const reducer = function(state, action){  //action means comand in general terms

    if(action.type === "ATTACK"){
        return action.payload
    }

    if(action.type === "Great ATTACK"){
        return action.payload
    }
return state


}

//step1 create store
const store = createStore(reducer, "Peace")  //peace is my current state




    //step3: subscribe

    store.subscribe(() =>{
        console.log("store is now "+ store.getState())
    })

    //step 4 dispatch action

    store.dispatch({type: "ATTACK", payload: "IRONMAN"})

    store.dispatch({type: "Great ATTACK", payload: "Spiderman"})





        return(
        <div>
            Test
        </div>
        );
    }
}

export default ReduxDemo;