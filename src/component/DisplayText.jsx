import { useSelector } from "react-redux";

const DisplayText=()=>{
  const counter=useSelector(store=>store.counter);
  return(
    <p class="lead mb-4">Counter current value {counter}</p>
  )
}
export default DisplayText;