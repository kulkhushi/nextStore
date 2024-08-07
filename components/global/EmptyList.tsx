import { cn } from "@/lib/utils"


const EmptyList = ({heading="No Item Found",className}:{heading?:string,className?:string}) => {
  return (
    <div className={cn(className,'text-xl')}>{heading}</div>
  )
}

export default EmptyList