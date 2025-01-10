
const todoKey="reactTodo";

export const getLocalStorage = () =>{
       /* const rawTodo= localStorage.getItem(todoKey);
        if(!rawTodo) return[];
        return JSON.parse(rawTodo);*/
        try {
            const rawTodos = localStorage.getItem(todoKey);
            if (!rawTodos) return [];
            return JSON.parse(rawTodos);
          } catch (e) {
            console.error("Error parsing localStorage:", e);
            return [];
          }
}

export const setLocalStorage = (task) =>{
    return localStorage.setItem(todoKey,JSON.stringify(task) );
}


/* 
 const [task,setTask] = useState(() => {
     const rawTodos=localStorage.getItem(todoKey); //in string format
     
       First time, rawTodos will be null -> on parsing : null/undefined will come
        So use the below condition 
     if(!rawTodos) return [];

     return JSON.parse(rawTodos); //String to Array converted
}) */