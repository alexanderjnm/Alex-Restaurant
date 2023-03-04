import React from 'react';
import { Link } from 'react-router-dom';
import classes from './menu.module.css';
import burgerImage from '../assets/burger.jpeg';
import pizzaImage from '../assets/pizza.jpeg';
import arepasImage from '../assets/arepas.jpeg';
import tacosImage from '../assets/tacos.jpeg';
import lasagnaImage from '../assets/lasagna.jpeg';
import pastaAlfredoImage from '../assets/pasta-alfredo.jpeg';

const Menu = () => {
  return (
    <section id='menu' className={classes.container}>
      <nav className={classes.navigation}>
        <Link to="/" className={classes.button}>Home</Link>
      </nav>
      <div className={classes.wrapper}>
        <h2 className={classes.title}>Menu</h2>
        <div className={classes.menuItems}>
          <div className={classes.menuItem}>
            <img src={burgerImage} alt="Burger" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Burger</h3>
              <p className={classes.menuItemDescription}>A delicious burger with all the fixings.</p>
              <p className={classes.menuItemPrice}>$10</p>
            </div>
          </div>
          <div className={classes.menuItem}>
            <img src={pizzaImage} alt="Pizza" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Pizza</h3>
              <p className={classes.menuItemDescription}>A mouth-watering pizza with your favorite toppings.</p>
              <p className={classes.menuItemPrice}>$12</p>
            </div>
          </div>
          <div className={classes.menuItem}>
            <img src={arepasImage} alt="Arepas" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Arepas</h3>
              <p className={classes.menuItemDescription}>A traditional Venezuelan corn cake stuffed with your favorite fillings.</p>
              <p className={classes.menuItemPrice}>$8</p>
            </div>
          </div>
          <div className={classes.menuItem}>
            <img src={tacosImage} alt="Tacos" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Tacos</h3>
              <p className={classes.menuItemDescription}>A Mexican classic made with your choice of meat, veggies, and toppings.</p>
              <p className={classes.menuItemPrice}>$10</p>
            </div>
          </div>
          <div className={classes.menuItem}>
            <img src={lasagnaImage} alt="Lasagna" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Lasagna</h3>
              <p className={classes.menuItemDescription}>A hearty Italian pasta dish with layers of cheese, meat, and sauce.</p>
              <p className={classes.menuItemPrice}>$14</p>
            </div>
          </div>
          <div className={classes.menuItem}>
            <img src={pastaAlfredoImage} alt="Pasta Alfredo" />
            <div className={classes.menuItemDetails}>
              <h3 className={classes.menuItemTitle}>Pasta Alfredo</h3>
              <p className={classes.menuItemDescription}>A creamy pasta dish made with fettuccine noodles and Parmesan cheese.</p>
              <p className={classes.menuItemPrice}>$12</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};


export default Menu;