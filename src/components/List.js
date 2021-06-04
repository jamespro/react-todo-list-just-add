import Todo from './Todo'
// this comes from
//      <List todos={todos}/>

// pass in todos, destructure
const List = ({ todos }) => {
    return (
        <div>
            {/* display parts of each todo */}
            {/* you should always have a key in React, don't rely on the index */}
            {/* you can use a uuid library */}
          {todos.map((todo) => 
            <Todo key={todo.id} todo={todo} />
          )}  
        </div>
    )
}

export default List

