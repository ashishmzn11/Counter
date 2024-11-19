import {createStore} from "redux";
const INITIAL_VALUE={counter:0}
const counterReducer=(store=INITIAL_VALUE,action)=>{
  if(action.type==='ADD'){
    return { counter: store.counter + Number(action.payload.num)};
  }
  else  if(action.type==='SUB'){
    return { counter: store.counter - Number(action.payload.num)};
  }
  else  if(action.type==='MUL'){
    return { counter: store.counter * Number(action.payload.num)};
  }
  else  if(action.type==='DIV'){
    return { counter: store.counter / Number(action.payload.num)};
  }
  return store;
}
const counterStore=createStore(counterReducer);
export default counterStore;