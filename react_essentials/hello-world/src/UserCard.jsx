import {UserInfo} from "./UserInfo";

// here only prop is passed as the whole argumnets
export const UserCard = ({props}) => {
     return (
        <div>
            <h2> User Details</h2>
            <UserInfo {...props} />
        
        </div>
     );
}

//to use the props 
// export const UserCard = ({id,...props}) => {
//      return (
//         <div>
//             <h2> User {id} Details</h2>
//             <UserInfo {...props} />
        
//         </div>
//      );
// }


