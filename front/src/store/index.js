import {createStore} from 'redux';


const initialState={
    artists:[]
    ,
    artist:{
        name:"",
        song:"",
        pic:"",
        length:"",
        id:"",
    },
    artistEdit:{
        name:"",
        song:"",
        pic:"",
        length:"",
        id:"",
    },
    currentIndex:0,
}

const reducer = (state=initialState, action)=>{

       console.log("reducer",action)
       switch(action.type){

            case "GET_ALL":
               let list =[...action.payload]
               return Object.assign({},state,{artists:list, artist:list[state.currentIndex],artistEdit:list[state.currentIndex]})
            
            case "GET_NEXT":
            
                    let next= Object.assign({},state);
                    if (next.currentIndex<next.artists.length-1){
                            next.currentIndex++;
                    }
                    next.artist=next.artists[next.currentIndex]
                    next.artistEdit={...next.artist};
                    return next
        
            case "GET_PRE":

                  let pre= Object.assign({},state);
                  if (pre.currentIndex>0){
                       pre.currentIndex--;
                  }
                  pre.artist=pre.artists[pre.currentIndex]
                  pre.artistEdit={...pre.artist};
                  return pre 

            case "UPDATE_ARTIST":

                   let objToUpdate= Object.assign({},state)
                   objToUpdate.artists[state.currentIndex]=action.payload;
                   objToUpdate.artist=action.payload;
                   objToUpdate.artistEdit={...objToUpdate.artist};
                   return objToUpdate

            case "ADD_NEW_ARTIST":
            

                   let objToAdd= Object.assign({},state);
                       objToAdd.artist=action.payload;
                       objToAdd.artists=objToAdd.artists.concat(action.payload);
                       objToAdd.artistEdit={
                        name:"",
                        song:"",
                        pic:"",
                        length:"",
                        id:"",
                       }
                      return objToAdd; 

            case "DELETE_ARTIST":
            
                    let objToDelete=state.artists.slice();
                    objToDelete.splice(action.payload,1);
                    return Object.assign({},state,{artists:objToDelete, artist:objToDelete[action.payload-1], artistEdit:objToDelete[action.payload-1]});
               
            default:
             return state;
            
       }
}

const store= createStore(reducer);

export default store;