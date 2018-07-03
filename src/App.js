import React, { Component, Fragment } from 'react'

// Context API Provider
import MyProvider from './contextApi/MyProvider'
// Todo Components
import TaskAdd from './components/TaskAdd'
import TaskList from './components/TaskList'
import TaskCounter from './components/TaskCounter'
// Custom css
import './css/App.css'

export default class App extends Component {
    render() {
        return (
            <MyProvider>
                <Fragment>
                    <h1>Todo Context API</h1>
                    <TaskAdd />
                    <TaskCounter />
                    <TaskList />
                </Fragment>
            </MyProvider>
        )
    }
}
