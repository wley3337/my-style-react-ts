import React from 'react'
import MenuButton from '../../components/MenuButton/MenuButton'
import { RouteComponentProps } from 'react-router-dom'

interface ISubMenuProps extends RouteComponentProps {
  url: string
  options: string[]
}

export const SubMenu: React.FC<ISubMenuProps> = ({ options, url, history }) => {
  return (
    <React.Fragment>
      {options.map((opt, index) => {
        return (
          <MenuButton
            key={opt + index}
            title={opt}
            callBack={() => history.push(url + '/' + opt)}
          />
        )
      })}
    </React.Fragment>
  )
}

export default SubMenu
