import { useRef } from "react";
import { useDispatch } from "react-redux";


const Controler=()=>{
  const dispatch=useDispatch();
  const addelement=useRef();
  const handleIncrement=()=>{
    dispatch({type:"INCREMENT"});
  }
  const handledecrement=()=>{
    dispatch({type:"DECREMENT"});
  }
  const handledAdd=()=>{
    dispatch({type:"ADD", payload:{num:addelement.current.value,}});
    addelement.current.value="";
  }
  const handledSub=()=>{
    dispatch({type:"SUB", payload:{num:addelement.current.value,}});
    addelement.current.value="";
  }
  return(
  
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <input tpye="text" placeholder="Enter number"ref={addelement}></input>
   <button type="button" class="btn btn-primary" onClick={handleIncrement}>+1</button>
   <button type="button" class="btn btn-success" onClick={handledecrement}>-1</button>
   <button type="button" class="btn btn-info" onClick={handledAdd}>Add</button>
   <button type="button" class="btn btn-danger" onClick={handledSub}>Substract</button>
  </div>   
  )
}
export default Controler;