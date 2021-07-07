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

//state= the current state
//action= the action being dispatched 
//return= should return the new state
export const reducer = (state, action) => {
    switch(action.type) {
        case 'ADD_TODO':
          return {
              ...state,
              todos: [
                  ...state.todos,
                  {
                      item: action.payload,
                      completed: false,
                      id: Date.now()
                  }
              ]
            }
        case 'TOGGLE_COMPLETED':
            return {
                //using map to keep function pure
                //the function im passing as an argument will be called for every todo 
                // if the todo is the one i want to toggle, im going to return a new object that has all the original properties (spread) and also an inverted value of the completed field
                  //so if it's not the todo im looking for i dont want to change it so i want to return it as is
                ...state,
                todos: state.todos.map(todo => {
                    if(todo.id === action.payload) {
                        return {
                            //returning a new object with ...todo
                            ...todo, 
                            completed: ! todo.completed}
                    } else {
                        return todo;
                    }
                })
            }
            
        case 'CLEAR_COMPLETED': 
            return {
                ...state,
                todos: [...state.todos].filter(todo => !todo.completed)
            }
            // case "CHANGE_ITEM":
            //         return {
                      
            //           ...state,
            //           item: action.payload
            //         };

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