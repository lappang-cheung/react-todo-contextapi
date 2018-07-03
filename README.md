## Context API version of Todo App

There are four version of this application:
1. Simple and generic with no local storage (Check branch no-storage)
2. Simple and generic with local storage (Check branch local-storage)
3. Simple and generic with mongo database (Check branch mongo-storage)
4. Auth and generic with mongo database (Check branch master)

## Table of Contents
- [Installation of App](#installation-of-app)
- [Goal Of App](#goal-of-app)
- [Create Context Api](#create-context-api)
- [Create Task Components](#create-task-components)
- [Add Provider into App](#add-provider-into-app)

## Installation of App

In order to install the app do the following:

* `yarn install` to install the local packages
* `yarn start` to run the application for backend and frontend

Note: Since the remove method is using filters method, any duplication will be erased from the array

If failed to use yarn then use the following:

* `npm run install`
* `npm run start`

## Goal Of App

In order to learn the ReactJS Context API, recoded the previous Todo App tutorial 'https://github.com/lappang-cheung/react-todo/tree/no-storage'
and using Context API to deal with the global state of the app.

## Create Context Api

Create a folder called "contextApi" and create a new filed called "MyProvider.js". Inside this file would contain the global state of the app and
the methods used to add & remove task(s)

MyProvider.js - contextAPI
~~~~
import React, {Component} from 'react'

export const MyContext = React.createContext()

class MyProvider extends Component{

    state = {
        item: '',
        itemList: []
    }

    render(){
        return(
            <MyContext.Provider
                value = {{
                    state: this.state,
                    onChange: (event) => 
                        this.setState({
                            item: event.target.value
                        })
                    ,
                    onAddInput: () => {
                            this.setState({
                                item: '',
                                itemList: [...this.state.itemList, this.state.item]
                            })
                        }
                    ,
                    onDelete: (item) => {
                        let index = this.state.itemList.indexOf(item)
                        

                        if(index > -1){
                            this.state.itemList.splice(index, 1)
                            this.setState({
                                itemList: this.state.itemList
                            })
                        }
                    }
                }}
            >
                {this.props.children}
            </MyContext.Provider>
        )
    }
}
export default MyProvider
~~~~

## Create Task Components

Create a folder called components which the following files would exist:

1. TaskAdd.js - to add the task
2. TaskCounter.js - to count the task added and left
3. TaskList.js - to display the tasks
4. TaskView.js - to display individual tasks

After the creation of the files, import the "MyProvider.js" into the files and implement the consumer for each individual component

TaskAdd.js - components
~~~~
import React, { Fragment } from 'react'
import { MyContext } from '../contextApi/MyProvider'

const TaskAdd = () => {
    return (
        <div>
            <MyContext.Consumer>
                {(context) => (
                    <Fragment>
                        {/* Input for item */}
                        <input
                            value={context.state.item}
                            onChange={context.onChange} 
                        />
                        {/* Add item */}
                        <button onClick={context.onAddInput}>
                            Add
                        </button>
                    </Fragment>
                )}
            </MyContext.Consumer>
        </div>
    )
}

export default TaskAdd
~~~~

TaskCounter.js - components
~~~~
import React from 'react'
import {MyContext} from '../contextApi/MyProvider'

const TaskCounter = () => {

    return (
        <MyContext.Consumer>
            {(context) => (
                <p>You have {context.state.itemList.length} task(s) left!!!</p>
            )}
        </MyContext.Consumer>
    )
}


export default TaskCounter
~~~~

TaskList.js - components
~~~~
import React from 'react'
import TaskItem from '../components/TaskItem'

const TaskList = () => {

    return(
        <ul>
            <TaskItem />
        </ul>
    )
}


export default TaskList
~~~~

TaskItem.js - components
~~~~
import React, {Component} from 'react'
import {MyContext} from '../contextApi/MyProvider'

class TaskItem extends Component{
    

    renderUI = (context) => {
        return context.state.itemList.map((item, index) => {
            return (
                <li 
                    key={index}
                >
                    <span>{item}</span>
                    <button
                        onClick={(e) => context.onDelete(item)}
                    >
                        Remove
                    </button>
                </li>
                )
            })
        }

    render(){
        return (
            <MyContext.Consumer>
                {(context) => (
                    this.renderUI(context)
                )}
            </MyContext.Consumer>
        )    
    }      
}

export default TaskItem
~~~~

## Add Provider into App

Import Provider and add onto the highest level in the App.js

App.js
~~~~
import React, { Component, Fragment } from 'react'

import MyProvider from './contextApi/MyProvider'
import TaskAdd from './components/TaskAdd'
import TaskList from './components/TaskList'
import TaskCounter from './components/TaskCounter'

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
~~~~