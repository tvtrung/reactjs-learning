import React from 'react';
import PropTypes from 'prop-types';
import './style.scss';

TodoList.propTypes = {
    todoList: PropTypes.array,
};
TodoList.defaultProps = {
    todoList: [],
}

function TodoList(props) {
    const {todoList, onTodoList} = props;
    const handelTodoList = (e, i) => {
        if(!onTodoList) return;
        onTodoList(e, i);
    }
    return (
        <ul className="outer">
            {todoList.map((todo, i) => (
                <li key={todo.id} className={`${todo.status === 1 ? "active" : ""} item`}
                    onClick={() => handelTodoList(todo, i)}
                >{todo.title}</li>
            ))}
        </ul>
    );
}

export default TodoList;