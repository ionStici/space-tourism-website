/* eslint-disable react/prop-types */
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import styles from "./../styles/destinations.module.scss";
import { paths } from "../data/paths";

export function Planet(props) {
  const imgRef = useRef(null);
  const nameRef = useRef(null);
  const textRef = useRef(null);
  const statsRef = useRef(null);

  const hidePlanet = () => {
    imgRef.current.style.transition = "";
    imgRef.current.style.opacity = "0";
    imgRef.current.style.transform = "rotate(10deg) scale(0.9)";
  };

  const animatePlanet = () => {
    setTimeout(() => {
      imgRef.current.style.transition = "opacity .25s ease-in-out, transform .5s ease-in-out";
      imgRef.current.style.opacity = "1";
      imgRef.current.style.transform = "rotate(0) scale(1)";
    }, 75);
  };

  const hideContent = () => {
    nameRef.current.style.transition = "";
    textRef.current.style.transition = "";
    statsRef.current.style.transition = "";
    nameRef.current.style.opacity = "0";
    textRef.current.style.opacity = "0";
    statsRef.current.style.opacity = "0";
  };

  const animateContent = () => {
    setTimeout(() => {
      nameRef.current.style.transition = "opacity .4s ease-in";
      textRef.current.style.transition = "opacity .4s ease-in";
      statsRef.current.style.transition = "opacity .4s ease-in";
      nameRef.current.style.opacity = "1";
      textRef.current.style.opacity = "1";
      statsRef.current.style.opacity = "1";
    }, 75);
  };

  const handleFadeIn = function () {
    hidePlanet();
    animatePlanet();
    hideContent();
    animateContent();
  };

  return (
    <section className={styles.section}>
      <div className={styles.bg}></div>
      <div className={styles.planetWrapper}>
        <p className={styles.title}>
          <span className={styles.titleNum}>01</span>
          <span className={styles.titleText}>Pick your destination</span>
        </p>

        <div className={styles.imgWrapper}>
          <picture>
            <source srcSet={props.webp} type="image/webp" />
            <source srcSet={props.png} type="image/png" />
            <img className={`${styles.img}`} src={props.png} alt={props.name} ref={imgRef} />
          </picture>
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <ul className={styles.ul}>
          {props.allPlanets.map((planet) => {
            return (
              <li className={styles.li} key={planet}>
                <NavLink
                  className={`${styles.link}`}
                  to={{
                    pathname: `${paths.destination}/${planet.toLowerCase()}`,
                  }}
                  style={({ isActive }) => {
                    if (isActive) {
                      return props.activeLinkStyles;
                    } else if (window.location.pathname === "/destination" && planet === "Moon") {
                      return props.activeLinkStyles;
                    }
                  }}
                  onClick={handleFadeIn}
                >
                  {planet}
                </NavLink>
              </li>
            );
          })}
        </ul>

        <h2 className={styles.h2} ref={nameRef}>
          {props.name.toUpperCase()}
        </h2>

        <p className={styles.p} ref={textRef}>
          {props.description}
        </p>

        <div className={styles.statsWrapper} ref={statsRef}>
          <div className={styles.distanceWrapper}>
            <p className={styles.heading}>AVG. DISTANCE</p>
            <p className={styles.res}>{props.distance}</p>
          </div>
          <div className={styles.travelWrapper}>
            <p className={styles.heading}>Est. travel time</p>
            <p className={styles.res}>{props.travel}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
