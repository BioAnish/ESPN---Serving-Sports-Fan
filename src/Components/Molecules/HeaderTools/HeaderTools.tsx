"use client";
import React from 'react';
import style from './HeaderTools.module.scss';

const HeaderTools = () => {
  return (
    <ul className={style.tools}>
        <li className={style.search}>
            <img src='/search.svg'></img>
        </li>
        <li className={style.user}>
            <img src='/user.png'></img>
        </li>
    </ul>
  )
}

export default HeaderTools
