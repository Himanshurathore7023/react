import { useContext,createContext } from "react";

export const TodoContext=createContext({
       todos:[
              {
                     id:1,
                     todo:"Todo msg",
                     completed:false,
              }
       ],
       addTodo:(todo)=>{},
       updateTodo:(id,todo)=>{},
       deleteTodo:(id)=>{},
       toggleComplete:(id)=>{}
})

export const useTodo=()=>{                           //use todo is manually hook
       return useContext(TodoContext)
}

export const TodoProvider=TodoContext.Provider

