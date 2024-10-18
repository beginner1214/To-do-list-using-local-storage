import { useContext, createContext } from "react";

// Create the Todo context with default values
export const Todocontext = createContext({
  todos: [],
  addtodo: () => {},
  updatetodo: () => {},
  deletetodo: () => {},
  toggleComplete: () => {},
});

// Custom hook to use the Todo context
export const Usetodo = () => {
  return useContext(Todocontext);
};

// Context provider component
export const Todoprovider = Todocontext.Provider;
