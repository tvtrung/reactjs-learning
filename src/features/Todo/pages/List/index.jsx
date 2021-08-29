import React, { useEffect, useState, useMemo } from 'react';
import { useHistory, useLocation, useRouteMatch } from 'react-router-dom';
import TodoList from '../../components/TodoList';
import queryString from 'query-string';
import TodoForm from '../../components/TodoForm';
const initTodoList = [
    {
        id: 1,
        title: 'Eat',
        status: 0
    },
    {
        id: 2,
        title: 'Sleep',
        status: 1
    },
    {
        id: 3,
        title: 'Code',
        status: 0
    },
];

function List(props) {
    const location = useLocation();
    const history = useHistory();
    const match = useRouteMatch();
    const [todoList, setTodolist] =useState(initTodoList);
    const [filterStatus, setFilterStatus] = useState(()=>{
        const params = queryString.parse(location.search);
        return params.search;
    });

    useEffect(()=>{
        const params = queryString.parse(location.search);
        setFilterStatus(params.search || 'all');
    },[location.search])
    
    const handelTodoList = (e, i) => {
        console.log(e, i);
        const newTodoList = [...todoList];
        const newTodo= {
            ...newTodoList[i],
            status: newTodoList[i].status === 0 ? 1 : 0
        }
        newTodoList[i] = newTodo;
        setTodolist(newTodoList);
    }
    const handelShowAll = () => {
        // setFilterStatus('all');
        const queryParams = {search:'all'};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        });

    }
    const handelShowNew = () => {
        setFilterStatus(0);
        const queryParams = {search:0};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        });
    }
    const handelShowCompleted = () => {
        setFilterStatus(1);
        const queryParams = {search:1};
        history.push({
            pathname: match.path,
            search: queryString.stringify(queryParams)
        });
    }

    const rederedTodoList = useMemo( () => {
        return todoList.filter( todo =>  filterStatus === 'all' || filterStatus == todo.status);
    },[todoList, filterStatus]);
    // console.log(rederTodoList);

    const handelTodoFormSubmit = value => {
        console.log("Form submit", value);
        const newItemTodo = {
            id: todoList.length + 1,
            title: value.title,
            status: 0
        }
        setTodolist([...todoList, newItemTodo]);
    }
    return (
        <div>
            <h2>Todo Form</h2>
            <TodoForm onSubmit={handelTodoFormSubmit}/>
            <h2>Todo List</h2>
            <TodoList todoList={rederedTodoList} onTodoList={handelTodoList}/>
            <div>
                <button onClick={()=>handelShowAll()}>Show All</button>
                <button onClick={()=>handelShowNew()}>Show New</button>
                <button onClick={()=>handelShowCompleted()}>Show Completed</button>
            </div>
        </div>
    );
}

export default List;