import React, {Component} from 'react'

// Context API Consumer
import {MyContext} from '../contextApi/MyProvider'

class TaskItem extends Component{
    
    // Helper method to render the li items
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
            // Consumer pass in for itemList
            <MyContext.Consumer>
                {(context) => (
                    this.renderUI(context)
                )}
            </MyContext.Consumer>
        )    
    }      
}

// const TaskItem = () => {

//     const renderUI = (context) => {
//         return context.state.itemList.map((item, index) => {
//             return (
//                 <li key={index}>
//                     <span>{item}</span>
//                     <button
//                         onClick={(e) => context.onDelete(item)}
//                     >
//                         Remove
//                     </button>
//                 </li>
//             )
//         })
//     }

//     return (
//         <MyContext.Consumer>
//             {(context) => (
//                 renderUI(context)
//             )}
//         </MyContext.Consumer>
//     )
// }

export default TaskItem