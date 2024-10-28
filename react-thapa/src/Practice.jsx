

export const Practices = ()=>{
    const students=[];
    return(
        <div>
            <p>{students.length && "No Students found 1"}</p>
            
            <p>{!students.length && "No Students found 2"}</p>
            <p>{students.length==0 && "No Students found 3"}</p>
            <p>{!Boolean(students.length) && "No Students found 4"}</p>
            <p>{"students.length" && "No Students found 5"}</p>
            <p>{"" && "No Students found 5"}</p>
            
            <p>Number of stduents:{students.length}</p>
        </div>
    );
}


/**
 * 
 * For stduents=[]
 * <p>{students.length && "No Students found"}</p> -> 0   //this lines give incorrect msg, if there are students.
 * <p>{!students.length && "No Students found"}</p> -> "No Students found"
 * <p>{students.length==0 && "No Students found"}</p> -> "No Students found"
 * React will not render `false`,`null`, `undefined`, or `NaN` in the DOM. Such elements will not render itself.
 * But `0` or `""` : renders.
 * 
 * students.length && "No Students found" = 0.
 * As `0` is a valid react node, it will be rendered.
 * 
 * <p>{"students.length" && "No Students found"}</p> -> "No Students found"
 * "students.length" (which is a non-empty string) is also treated as truthy. 
 * Hence, prints next expression.
 * 
 * <p>{"" && "No Students found"}</p> -> "" //not visible on web browser
 * "" && "No Students found" evaluates to "" (an empty string), which is a falsy value.
 * 
 * 
 * 
 * 
 * 
 */