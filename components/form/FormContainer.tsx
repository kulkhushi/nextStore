'use client';

import { auctionType } from "@/utils/types";
import { useEffect } from "react";
import { useFormState } from "react-dom";
import { useToast } from "../ui/use-toast";

const initiateState = {
  message:''
}

const FormContainer = ({action,children}:{action:auctionType; children:React.ReactNode}) => {

  const [state, formAction]=useFormState(action,initiateState);
  const {toast} = useToast()

  useEffect(()=>{
    if(state.message){
      toast({
        description: state.message
      })
    }
  },[state])


  return (
    <form action={formAction}>{children}</form>
  )
}

export default FormContainer