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