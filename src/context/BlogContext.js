import { useEffect } from "react";
import { useState } from "react";
import {  createContext} from "react";//create context to create the global store

export const BlogContext  = createContext()//exporting the context you created  with createContext

//function to disperse the data to others that need it
function BlogProvider(props){


      useEffect(()=>{
      
      },[])
    
return(
    
    
    //incharge of disbursing the data to others
<BlogContext.Provider value={{}}> 
{/* provide values for the context */}
 {/*  instead of manually listing thr components that would use the data */}
 {props.children}
 </BlogContext.Provider>

)

}
export default BlogProvider