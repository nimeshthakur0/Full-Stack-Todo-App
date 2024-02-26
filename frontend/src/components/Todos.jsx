/*
todos = [
    {
        title: "go to gym",
        desc: "go to gym"
    }
]
*/


export function Todos({todos}){
    return <div>
        { todos.map(function(todo){
            return <div id = {todo._id} style={{ padding: '10px', border: '1px solid #ccc', margin: '10px 0' }}>
                <h3>{todo.title}</h3>
                <p>{todo.description}</p>
                <button style={{ padding: '5px', margin: '5px 0' }} onClick={() => {
                fetch("http://localhost:3000/completed", {
                    method: "PUT",
                    body: JSON.stringify({
                        id: todo._id
                    }),
                    headers: {
                        "Content-type": "application/json"
                    } 
                })
                    .then(async function(res){
                        const json = await res.json();
                        alert("Todo updated");
                    })
            }}>{todo.completed == true ? "Completed" : "Mark as Complete"}</button>
            </div>
        })
        }
    </div>
}