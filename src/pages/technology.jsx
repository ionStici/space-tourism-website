import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { mainImgsArr } from "../data/images";
import spaceLandscape from "./../assets/technology/image-space-capsule-landscape.jpg";
import spacePortrait from "./../assets/technology/image-space-capsule-portrait.jpg";
import spaceportLandscape from "./../assets/technology/image-spaceport-landscape.jpg";
import spaceportPortrait from "./../assets/technology/image-spaceport-portrait.jpg";
import styles from "./../styles/technology.module.scss";
import { paths } from "../data/paths";

const launchLandscape = mainImgsArr[4];
const launchPortrait = mainImgsArr[5];

const imgsArr = [
  launchLandscape,
  launchPortrait,
  spaceLandscape,
  spacePortrait,
  spaceportLandscape,
  spaceportPortrait,
];

imgsArr.forEach((picture) => {
  const img = new Image();
  img.src = picture;
});

export const Technology = function () {
  const navigate = useNavigate();
  useEffect(() => navigate(`${paths.technology}/launch`), [navigate]);

  return (
    <main className={styles.main}>
      <div className={styles.bg}></div>
      <Outlet />
    </main>
  );
};
