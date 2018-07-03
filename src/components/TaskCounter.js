import React from 'react'

// Context API Consumer
import {MyContext} from '../contextApi/MyProvider'

const TaskCounter = () => {

    return (
        // Consumer pass in for counter prop
        <MyContext.Consumer>
            {(context) => (
                <p>You have {context.state.itemList.length} task(s) left!!!</p>
            )}
        </MyContext.Consumer>
    )
}


export default TaskCounter