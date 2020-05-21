import React from 'react'
import { connect } from 'react-redux'
import * as actions from '../../redux/actions'
import * as css from './Closet.css'
import { Route, RouteComponentProps } from 'react-router-dom'
import FooterNavigation from '../FooterNavigation/FooterNavigation'
import ClosetNavigation from '../ClosetNavigation/ClosetNavigation'
import Accessories from '../Accessories/Accessories'

interface IClosetProps extends RouteComponentProps {}

export const Closet: React.FC<IClosetProps> = ({ history }) => {
  return (
    <div className={css.grid}>
      <div className={css.menuContainer}>
        <Route exact path="/closet" component={ClosetNavigation} />
        <Route exact path="/closet/accessories" component={Accessories} />
      </div>
      <div className={css.footer}>
        <Route path="/" component={FooterNavigation} />
      </div>
    </div>
  )
}

export default connect(null, actions)(Closet)
