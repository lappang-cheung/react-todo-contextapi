import React, {Component} from 'react'

// Create and export the context which includes consumer
export const MyContext = React.createContext()

class MyProvider extends Component{

    // Defined the state and variables for the app
    state = {
        item: '',
        itemList: []
    }

    render(){
        return(
            // Create the provider
            <MyContext.Provider
                // Set the values & methods
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
                {/* Passing the children props into the App from global level */}
                {this.props.children}
            </MyContext.Provider>
        )
    }

}

export default MyProvider