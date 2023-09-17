import React, { useContext } from 'react'
import { AuthContextProvider } from '../../Context/AuthContext'

const AccountDetails = () => {
    const {authInfo} = useContext(AuthContextProvider);
  return (
   <div className="detail-container">
    <div className="det-cont-1">
        <img src="https://img.freepik.com/premium-vector/account-icon-user-icon-vector-graphics_292645-552.jpg?w=2000" alt="ProfileImgs" />
    </div>

    <div className="det-cont-2">
        <h3>{authInfo.user.username}</h3>
        <p>{authInfo.user.email}</p>
    </div>

    

   
   </div>
  )
}

export default AccountDetails