import React from 'react'
import * as css from './MenuButton.css'

interface IMenuButtonProps {
  imgSrc?: string
  alt?: string
  title: string
  callBack?: () => void
}

const MenuButton: React.FC<IMenuButtonProps> = ({
  imgSrc,
  title,
  alt,
  callBack,
}) => {
  const withImg = imgSrc ? css.withImg : css.noImg
  return (
    <div className={css.grid + ' ' + withImg} onClick={callBack}>
      {imgSrc ? (
        <img src={imgSrc} alt={alt} aria-label={alt} className={css.img} />
      ) : null}
      <p className={css.title}>
        {title.charAt(0).toUpperCase() + title.slice(1)}
      </p>
    </div>
  )
}

export default MenuButton
