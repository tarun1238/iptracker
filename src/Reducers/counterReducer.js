
const counterReducer = function(state="",action) {
        const {name}='Ritesh';
    switch(action.type){
        case 'Fname' : 
                return state ={name}
        case 'Lname' :
                return state="Agrawal"
        case 'prev' :
                console.log(state) 
                break;
        default : return state
    }
  }
  export default counterReducer;