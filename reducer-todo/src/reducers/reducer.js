export const initialState =  {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: Date.now()
        }   
    ]
}
    

// need to :
// add item
// toggle item
// clear item

export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
            // console.log(state);
           const newItem = {
               item: action.payload,
               completed: false,
               id: Date.now()
           }
           return {
               ...state,
               todos: [...state.todos, newItem]
           }

        case 'TOGGLE_COMPLETED':
            return {
                ...state,
                todos: state.todos.map(item => {
                    if(item.id === action.payload) {
                        return {...item, completed: ! item.completed}
                    } else {
                        return item;
                    }
                })
            }
            
        case 'CLEAR_COMPLETED': 
            return {
                ...state,
                todos: state.todos.filter(({completed}) => !completed)
            }

        default: 
                return state;
    } //closes switch
}



// Reducer
// 1. Pure function (no side effects)
// 2. takes in 2 objects, 'reduces' them down to a single object, then returns that new object (state!)
// 3. Helps us manage state in a predictable manner

// Actions
// objects with a required 'type' property, and an optional 'payload' (data, or whatever) property
// they describe to the reducer what event just occured, and how the reducer should update the state