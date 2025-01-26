/* eslint-disable react/prop-types */
import { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import { mainImgsArr } from "../data/images";
import spaceLandscape from "./../assets/technology/image-space-capsule-landscape.jpg";
import spacePortrait from "./../assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "./../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "./../assets/technology/image-spaceport-portrait.jpg";
import fetch from "./../data/data.json";
import styles from "./../styles/technology.module.scss";
import { paths } from "../data/paths";

const launchLandscape = mainImgsArr[4];
const launchPortrait = mainImgsArr[5];

const Markup = function (props) {
  const imgRef = useRef(null);
  const contentRef = useRef(null);

  return (
    <>
      <p className={styles.title}>
        <span className={styles.titleNum}>03</span>
        <span className={styles.titleText}>Space Launch 101</span>
      </p>

      <div className={styles.imgBox} ref={imgRef}>
        <picture>
          <source srcSet={props.imgs[0]} media="(max-width: 999px)" />
          <source srcSet={props.imgs[1]} media="(min-width: 1000px)" />
          <img className={styles.img} src={props.imgs[1]} alt={props.name} />
        </picture>
      </div>

      <div className={styles.linkBox}>
        {props.names.map((name, i) => (
          <NavLink
            className={styles.link}
            key={name}
            to={`${paths.technology}/${name}`}
            style={({ isActive }) =>
              isActive
                ? {
                    backgroundColor: "var(--color-white)",
                    color: "var(--color-black)",
                  }
                : undefined
            }
          >
            {i + 1}
          </NavLink>
        ))}
      </div>

      <div className={styles.contentBox} ref={contentRef}>
        <p className={styles.term}>The terminology…</p>
        <h1 className={styles.h1}>{props.name}</h1>
        <p className={styles.p}>{props.description}</p>
      </div>
    </>
  );
};

export const LaunchVehicle1 = function () {
  const data = useState(fetch.technology[0]);
  const name = useState(data[0].name);
  const description = useState(data[0].description);
  const names = useState(fetch.technology.map((item) => item.name.split(" ")[0].toLowerCase()));

  return (
    <section className={styles.section}>
      <Markup
        name={name[0]}
        description={description[0]}
        imgs={[launchLandscape, launchPortrait]}
        names={names[0]}
      />
    </section>
  );
};

export const Spaceport2 = function () {
  const data = useState(fetch.technology[1]);
  const name = useState(data[0].name);
  const description = useState(data[0].description);
  const names = useState(fetch.technology.map((item) => item.name.split(" ")[0].toLowerCase()));

  return (
    <section className={styles.section}>
      <Markup
        name={name[0]}
        description={description[0]}
        imgs={[spaceportLandscape, spaceportPortrait]}
        names={names[0]}
      />
    </section>
  );
};

export const Space3 = function () {
  const data = useState(fetch.technology[2]);
  const name = useState(data[0].name);
  const description = useState(data[0].description);
  const names = useState(fetch.technology.map((item) => item.name.split(" ")[0].toLowerCase()));

  return (
    <section className={styles.section}>
      <Markup
        name={name[0]}
        description={description[0]}
        imgs={[spaceLandscape, spacePortrait]}
        names={names[0]}
      />
    </section>
  );
};
