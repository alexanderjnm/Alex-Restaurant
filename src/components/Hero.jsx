import React from 'react'
import classes from './hero.module.css';
import {AiOutlineArrowDown} from 'react-icons/ai'
import manEating from '../assets/restaurant.jpeg';


const Hero = () => {
  return (
    <section style={{height: '200vh'}} id="home" className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <h2 className={classes.title}>Do you crave delicious food</h2>
          <p className={classes.firstMsg}>But going out to take <span>food costs time....</span></p>
          <p className={classes.secondMsg}>
            Why not order <span>pizza</span> or something <br /> <span>delicious </span>
            from our restaurnt
          </p>
          <p className={classes.desc}>
          <div>HOURS</div>
          <div>
            <li>Tues - Thurs 11am - 9pm</li>
            <li>Fri - Saturday 11am - 10pm</li>
            <li>Sunday 11am - 9pm </li>
          </div>
          </p>
          <div className={classes.buttons}>
          <button className={classes.buttonSee}><a href="/menu">Menu <AiOutlineArrowDown/> </a></button>
            <button className={classes.buttonSee}><a href="/reserva">Make a Reservation <AiOutlineArrowDown/> </a></button>
          </div>
        </div>
        <div className={classes.right}>
          <img src={manEating} alt="" className={classes.manEatingImg}/>
        </div>
      </div>
    </section>
  )
}

export default Hero