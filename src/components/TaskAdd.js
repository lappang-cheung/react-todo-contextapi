import React, { Fragment } from 'react'

// Context API Consumer
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