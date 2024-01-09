import { useState } from 'react';
import classes from './App.module.scss';
import { Link, Outlet } from 'react-router-dom';
import avatarPNG from '@/assets/avatar.png';
import avatarJPG from '@/assets/avatar.jpg';
import CalendarSVG from '@/assets/calendar.svg';

export const App = () => {
  const [count, setCount] = useState<number>(0);
  const increment = () => setCount((prev) => prev + 1);
  return (
    <div>
      <h1>{ __PLATFORM__ }</h1>
      <div>
        <img width={100} height={100} src={avatarJPG} alt="" />
        <img width={100} height={100} src={avatarPNG} alt="" />
      </div>
      <div>
        <CalendarSVG width={100} height={100} fill={'red'} />
      </div>
      <Link to={'/about'}>About</Link>
      <br />
      <Link to={'/shop'}>Shop</Link>
      <h1 className={classes.h1}>{count}</h1>
      <button className={classes.button} onClick={increment}>
        increment
      </button>
      <Outlet />
    </div>
  );
};
