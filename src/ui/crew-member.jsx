/* eslint-disable react/prop-types */
import styles from "./../styles/crew.module.scss";
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { paths } from "../data/paths";

export function CrewMember(props) {
  const { crewNames, crewMember } = props;

  const imgRef = useRef(null);
  const h1Ref = useRef(null);
  const nameRef = useRef(null);
  const bioRef = useRef(null);

  const domEls = [imgRef, h1Ref, nameRef, bioRef];

  const hide = function () {
    domEls.forEach((el) => {
      el.current.style.transition = "";
      el.current.style.opacity = "0";
    });
  };

  const show = function () {
    setTimeout(() => {
      domEls.forEach((el) => {
        el.current.style.transition = "opacity .4s ease-in";
        el.current.style.opacity = "1";
      });
    }, 75);
  };

  const handleFadeIn = function () {
    hide();
    show();
  };

  return (
    <section className={styles.section}>
      <div className={styles.titleBox}>
        <p className={styles.title}>
          <span className={styles.titleNum}>02</span>
          <span className={styles.titleText}>Meet your Crew</span>
        </p>
      </div>

      <div className={styles.imgBox} ref={imgRef}>
        <picture>
          <source srcSet={crewMember.png} type="image/png" />
          <source srcSet={crewMember.webp} type="image/webp" />
          <img
            className={`${styles.img}`}
            src={crewMember.png}
            alt="Crew Member"
            style={
              crewMember.name.split(" ")[0].toLowerCase() === "douglas"
                ? { paddingLeft: "15px" }
                : undefined
            }
          />
        </picture>
      </div>

      <div className={styles.contentBox}>
        <h1 className={styles.role} ref={h1Ref}>
          {crewMember.role}
        </h1>
        <p className={styles.name} ref={nameRef}>
          {crewMember.name}
        </p>
        <p className={styles.bio} ref={bioRef}>
          {crewMember.bio}
        </p>
        <div className={styles.circlesBox}>
          {crewNames.map((name) => {
            return (
              <NavLink
                className={styles.link}
                key={name}
                style={({ isActive }) => {
                  if (isActive) return { opacity: "1" };
                  if (
                    window.location.pathname === paths.crew &&
                    name.split(" ")[0].toLowerCase() === "douglas"
                  ) {
                    return { opacity: "1" };
                  }
                }}
                to={`${paths.crew}/${name.split(" ")[0].toLowerCase()}`}
                onClick={handleFadeIn}
              ></NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
}
