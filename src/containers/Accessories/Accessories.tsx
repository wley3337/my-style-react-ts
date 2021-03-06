import React from 'react'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import * as css from './Accessories.css'
import { RouteComponentProps, Route } from 'react-router-dom'
import MenuButton from '../../components/MenuButton/MenuButton'
import accessories from '../../imgs/accessories.png'
import SubMenu from '../SubMenu/SubMenu'

interface IAccessoriesProps extends RouteComponentProps {}

export const Accessories: React.FC<IAccessoriesProps> = () => {
  const menuOptions = ['earrings', 'necklaces', 'bracelets', 'rings', 'belts']
  const subUrl = '/closet/accessories'
  return (
    <div className={css.grid}>
      <div className={css.titleBlock}>
        <MenuButton
          title={'Add Accessory'}
          imgSrc={accessories}
          alt="Cape and Mask Accessory Icon Image"
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

export default connect(null, actions)(Accessories)
