import React, { createContext, useReducer,useContext } from "react";

const cardImages = createContext();
const initialState ={
  hall1:"",
  hall2:"",
  hall3:""
};

 const themeReducer = (state, action) => {
  switch (action.type) {
    case "HALL1":
      return {
        ...state,
       hall1:action.payload.hall1,
       hall2:action.payload.hall2,
       hall3:action.payload.hall3,
      }
    case "HALL2":
      return {
        ...state,
       hall1:action.payload.hall1,
       hall2:action.payload.hall2,
       hall3:action.payload.hall3,
      }
    default:
      return state;
  }
};

 


 function GlobalState({children}) {
  const [state, dispatch] = useReducer(themeReducer, initialState);
  
 
const updateImages = () =>{
  return dispatch({
    type:"HALL1",
    payload:{
      hall1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLLUBkJgwdSnMEx7TGzJ5p_2kz8JxCGv1bW3EKuBCa2w&s",
      hall2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTiB8giTN9Hj8QAEz4DVdCtqWbfnrKoZSo2nA&usqp=CAU",
      hall3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTs-Zs1jAhbmypFTiTem5s6YzJpLB4tyD2F_Q&usqp=CAU"
    }
  })
}

const updateImages1 = () =>{
  return dispatch({
    type:"HALL2",
    payload:{
      hall1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_bj8LwzSXnAV2np6ZdI3-UqDza5-QHYloPA&usqp=CAU",
      hall2:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT7cJQbjehFCPfH9PXmu-9Nf5QoSpLpknMVpw&usqp=CAU",
      hall3:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRh7-jCu7ak7rnPWU87z4RHktz0ND8qc3HqCg&usqp=CAU"
    }
  })
}

  

  return (
    <cardImages.Provider value={{ ...state,updateImages1,updateImages}}>
      {children}
    </cardImages.Provider>
  );
}

const useGlobalContext = () => {
  return useContext(cardImages);
};

export { GlobalState, useGlobalContext };