import React from 'react'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import * as css from './ClosetNavigation.css'
import MenuButton from '../../components/MenuButton/MenuButton'
import createOutfit from '../../imgs/create-outfit.png'
import accessories from '../../imgs/accessories.png'
import tops from '../../imgs/tops.png'
import bottoms from '../../imgs/bottoms.png'
import shoes from '../../imgs/shoes.png'
import { RouteComponentProps } from 'react-router-dom'

interface IClosetNavigationProps extends RouteComponentProps {}

export const ClosetNavigation: React.FC<IClosetNavigationProps> = ({
  history,
}) => {
  return (
    <div className={css.grid}>
      <div className={css.titleBlock}>
        <MenuButton
          title="Create Outfit"
          imgSrc={createOutfit}
          alt="create outfit icon"
        />
      </div>
      <div className={css.menuContainer}>
        <p className={css.heading}>Start With</p>
        <div className={css.menuOptions}>
          <MenuButton
            title="Accessories"
            imgSrc={accessories}
            alt="accessories icon"
            callBack={() => history.push('/closet/accessories')}
          />
          <MenuButton title="Tops" imgSrc={tops} alt="top icon" />
          <MenuButton title="Bottoms" imgSrc={bottoms} alt="bottom icon" />
          <MenuButton title="Shoes" imgSrc={shoes} alt="shoes icon" />
        </div>
      </div>
    </div>
  )
}

export default connect(null, actions)(ClosetNavigation)
