import React from 'react'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import * as css from './Shoes.css'
import { RouteComponentProps, Route } from 'react-router-dom'
import MenuButton from '../../components/MenuButton/MenuButton'
import shoesImg from '../../imgs/shoes.png'
import SubMenu from '../SubMenu/SubMenu'

interface IShoesProps extends RouteComponentProps {}

export const Shoes: React.FC<IShoesProps> = () => {
  const menuOptions = ['boots', 'heels', 'flats']
  const subUrl = '/closet/shoes'
  return (
    <div className={css.grid}>
      <div className={css.titleBlock}>
        <MenuButton
          title={'Add Shoes'}
          imgSrc={shoesImg}
          alt="Red Tall Boot Shoes Icon Image"
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

export default connect(null, actions)(Shoes)
