import React from 'react'
import * as actions from '../../redux/actions'
import { connect } from 'react-redux'
import * as css from './Accessories.css'
import { RouteComponentProps } from 'react-router-dom'
import MenuButton from '../../components/MenuButton/MenuButton'
import accessories from '../../imgs/accessories.png'

interface IAccessoriesProps extends RouteComponentProps {}

export const Accessories: React.FC<IAccessoriesProps> = ({ history }) => {
  const menuOptions = ['earrings', 'necklaces', 'bracelets', 'rings', 'belts']
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
        {menuOptions.map((opt, index) => {
          return (
            <MenuButton
              key={opt + index}
              title={opt}
              callBack={() => history.push('/closet/accessories/' + opt)}
            />
          )
        })}
      </div>
    </div>
  )
}

export default connect(null, actions)(Accessories)
