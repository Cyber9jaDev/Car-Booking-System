import { toast } from "react-hot-toast";


export const Toast = ( type: string, text : string) => {
  if(type === 'success') return toast.success(text);
  return toast.error(text);
}
