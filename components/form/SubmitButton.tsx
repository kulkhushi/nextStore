"use client";

import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import { useFormStatus } from "react-dom";
import { Loader2 } from "lucide-react";

type Size = "default" | "sm" | "lg";

type ButtonProps = {
  text: string;
  size?: Size;
  className?: string;
};

const SubmitButton = ({
  text = "submit",
  size = "lg",
  className = "",
}: ButtonProps) => {
  const { pending } = useFormStatus();
  return (
    <Button
      size={size}
      className={cn("capitalize", className)}
      disabled={pending}
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Please wait
        </>
      ) : (
        text
      )}
    </Button>
  );
};

export default SubmitButton;
