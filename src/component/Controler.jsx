import { useRef } from "react";
import { useDispatch } from "react-redux";

const Controler = () => {
  const dispatch = useDispatch();
  const addelement = useRef();
  const handleMul = () => {
    dispatch({ type: "MUL", payload: { num: addelement.current.value } });
    addelement.current.value = "";
  };
  const handleDiv = () => {
    dispatch({ type: "DIV", payload: { num: addelement.current.value } });
    addelement.current.value = "";
  };
  const handledAdd = () => {
    dispatch({ type: "ADD", payload: { num: addelement.current.value } });
    addelement.current.value = "";
  };
  const handledSub = () => {
    dispatch({ type: "SUB", payload: { num: addelement.current.value } });
    addelement.current.value = "";
  };
  const handledInput = () => {
    dispatch({ type: "INPUT"});
    
  };
  return (<>
    <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <input
        tpye="text"
        placeholder="Enter number"
        className="input-button"
        ref={addelement}
      />
      </div>
     
      <div className="d-grid gap-2 d-sm-flex justify-content-sm-center">
      <button type="button" class="btn btn-success" onClick={handledAdd}>
        Add
      </button>
      <button type="button" class="btn btn-danger" onClick={handledSub}>
        Substract
      </button>
      <button type="button" class="btn btn-info" onClick={handleMul}>
        Multipl
      </button>
      <button type="button" class="btn btn-dark" onClick={handleDiv}>
        Division
      </button>
      <button type="button" class="btn btn-dark" onClick={handledInput}>
        Deleted
      </button>
    </div>
    </>
  );
};
export default Controler;
