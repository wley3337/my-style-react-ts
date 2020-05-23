import React from 'react'
import * as css from './FooterNavigation.css'
import { RouteComponentProps, Link } from 'react-router-dom'
import LeftNavButton from '../../components/LeftNavButton/LeftNavButton'
import RightNavButton from '../../components/RightNavButton/RightNavButton'
import CasualToggle from '../../components/CasualToggle/CasualToggle'

export interface IFooterNavigationProps extends RouteComponentProps {}

const optionReturn = (pathName: string) => {
  switch (pathName) {
    case '/closet':
      return <CasualToggle />
    default:
      return (
        <Link to={`/closet`} className={css.closetLink}>
          Closet
        </Link>
      )
  }
}

export const FooterNavigation: React.FC<IFooterNavigationProps> = ({
  location: { pathname },
  history,
}) => {
  return (
    <div className={css.grid}>
      <div className={css.leftButton}>
        {pathname === '/closet' ? (
          <LeftNavButton
            title="Log Out"
            callBack={() => console.log('logout')}
          />
        ) : (
          <LeftNavButton title="Back" callBack={() => history.goBack()} />
        )}
      </div>
      <div className={css.option}>{optionReturn(pathname)}</div>
      <div className={css.rightButton}>
        <RightNavButton title="Tags" callBack={() => console.log('tags')} />
      </div>
    </div>
  )
}

export default FooterNavigation
