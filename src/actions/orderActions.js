import { CREATE_ORDER, CLEAR_CART,FETCH_ORDERS} from "../types"

export const createOrder = (order)=>(dispatch)=>{
    fetch("api/orders", {
        method:"POST",
        headers:{
            "Content-Type":"application/JSON",
        },
        body:JSON.stringify(order),
    })
    .then((res)=>res.json())
    .then((data)=>{
        dispatch({type:CREATE_ORDER,payload:data});
        localStorage.clear("cartItems");
        dispatch({type:CLEAR_CART});
    })
};

export const clearOrder=()=>(dispatch)=>{
    dispatch({type:CREATE_ORDER});
}

export const fetchOrders = () => (dispatch) => {
    fetch("/api/orders")
      .then((res) => res.json())
      .then((data) => {
        dispatch({ type: FETCH_ORDERS, payload: data });
      });
  };