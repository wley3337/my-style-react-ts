import React from 'react'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import * as css from './Tops.css'
import { RouteComponentProps, Route } from 'react-router-dom'
import MenuButton from '../../components/MenuButton/MenuButton'
import topsImg from '../../imgs/tops.png'
import SubMenu from '../SubMenu/SubMenu'

interface ITopsProps extends RouteComponentProps {}

export const Tops: React.FC<ITopsProps> = () => {
  const menuOptions = ['dresses', 'sweaters', 't-shirts']
  const subUrl = '/closet/tops'
  return (
    <div className={css.grid}>
      <div className={css.titleBlock}>
        <MenuButton
          title={'Add Tops'}
          imgSrc={topsImg}
          alt="Blue Long Sleeve Tops Icon Image"
        />
      </div>
      <div className={css.menuContainer}>
        <Route
          exact
          path={subUrl}
          render={(routeProps) => (
            <SubMenu url={subUrl} options={menuOptions} {...routeProps} />
          )}
        />
      </div>
    </div>
  )
}

export default connect(null, actions)(Tops)
