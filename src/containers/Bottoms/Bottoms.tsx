import React from 'react'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import * as css from './Bottoms.css'
import { RouteComponentProps, Route } from 'react-router-dom'
import MenuButton from '../../components/MenuButton/MenuButton'
import bottomImg from '../../imgs/bottoms.png'
import SubMenu from '../SubMenu/SubMenu'

interface IBottomsProps extends RouteComponentProps {}

export const Bottoms: React.FC<IBottomsProps> = () => {
  const menuOptions = ['pants', 'shorts', 'skirts']
  const subUrl = '/closet/bottoms'
  return (
    <div className={css.grid}>
      <div className={css.titleBlock}>
        <MenuButton
          title={'Add Bottom'}
          imgSrc={bottomImg}
          alt="Blue Pants Bottom Icon Image"
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

export default connect(null, actions)(Bottoms)
