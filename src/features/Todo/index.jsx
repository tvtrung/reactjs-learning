import React, { useState } from 'react';
import { Switch,Route, useRouteMatch } from 'react-router-dom';
import TodoList from './pages/List';
import TodoDetail from './pages/Detail';

function TodoFeature(props) {
    const match = useRouteMatch();
    return (
        <div>
            <Switch>
                <Route path={match.path} exact>
                    <TodoList />
                </Route>
                <Route path={`${match.path}/:id`}>
                    <TodoDetail />
                </Route>
            </Switch>
        </div>
    );
}

export default TodoFeature;