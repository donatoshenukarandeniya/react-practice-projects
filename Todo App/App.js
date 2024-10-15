import React , {Component} from "react";
import TodoItem from "./TodoItem"
import TodosData from "./TodosData"

class App extends React.Component{
    
    constructor(){
        super();
        this.state = {
            todos : TodosData
        }
        this.handelChange = this.handelChange.bind(this)
    }
    
    handelChange(id){
        this.setState(prevState =>{
            
            const updateTodos = prevState.todos.map(todo =>{
                
                if(todo.id === id){
                    todo.completed = !todo.completed
                }
                return todo
            })
            
            return{
                todos : updateTodos
            }
        })
    }
    
    render(){
        
        const todoItems = this.state.todos.map(item => <TodoItem key = {item.id} item = {item}
        handelChange = {this.handelChange}/>)
        return(
            <div class = "todolist">
                {todoItems}
            </div>    
        );
    }

}

export default App;