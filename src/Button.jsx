import { addMoney } from "./store";
import { removeMoney } from "./store";
import { useDispatch } from "react-redux";

export default function Button() {
 const dispatch = useDispatch();
    return (
    <div>
      <button onClick={()=>dispatch(addMoney(500))}>Add Money</button>
      <button onClick={()=>dispatch(removeMoney(500))}>Remove Money</button>
    </div>
  )
}
