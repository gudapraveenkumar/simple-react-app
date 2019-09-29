import { ADD_POST, SET_POSTS} from "../actions/action-types";

const initialState={
   posts:[]
}

const reducer = (state = initialState, action) =>{
   console.log('action =', action);
   switch(action.type){
      case ADD_POST:
         return{
            ...state,
            posts:[
               action.payload,
               ...state.posts
            ]
         }

      case SET_POSTS:
         return{
            ...state,
            posts: action.payload
         };

      default:
         return state;
   }
}

export default reducer;
