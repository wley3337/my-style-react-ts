import React from 'react'
import { Route } from 'react-router'
import { RouteComponentProps } from 'react-router-dom'
import { connect } from 'react-redux'
import { AppState } from '../../redux/rootReducer'
import { IUser } from '../../redux/User.redux/User.types'

import LoginForm from '../../components/LoginForm/LoginForm'
import CreateUserForm from '../../components/CreateUserForm/CreateUserForm'
import AutoLogin from '../../components/AutoLogin/AutoLogin'
import Closet from '../Closet/Closet'
import Accessories from '../Accessories/Accessories'

interface ILandingProps extends RouteComponentProps {
  //state
  user: IUser
}

export const Landing: React.FC<ILandingProps> = ({ user }) => {
  return (
    <div>
      {localStorage.getItem('myStyle-Token') ? (
        user.username === '' ? (
          <Route path="/" render={(p) => <AutoLogin {...p} />} />
        ) : null
      ) : (
        <Route exact path="/" render={(p) => <LoginForm {...p} />} />
      )}

      <Route
        exact
        path="/create-account"
        render={(p) => <CreateUserForm {...p} />}
      />
      <Route path="/closet" component={Closet} />
    </div>
  )
}

const mSTP = (state: AppState) => {
  return { user: state.user }
}

export default connect(mSTP)(Landing)
