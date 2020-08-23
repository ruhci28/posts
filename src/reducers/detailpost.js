export const detailpostReducer = (state={},action)=>{
  switch(action.type){
    case 'READMOREPOST':
         return action.payload;
    default :
          return state;     
  }
}
export default detailpostReducer;
