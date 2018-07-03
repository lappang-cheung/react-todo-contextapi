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