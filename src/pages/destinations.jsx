import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { mainImgsArr } from "../data/images";
import { Planet } from "../ui/planet";
import europaPng from "./../assets/destination/image-europa.png";
import europaWebp from "./../assets/destination/image-europa.webp";
import marsPng from "./../assets/destination/image-mars.png";
import marsWebp from "./../assets/destination/image-mars.webp";
import titanPng from "./../assets/destination/image-titan.png";
import titanWebp from "./../assets/destination/image-titan.webp";
import info from "./../data/data.json";
import styles from "./../styles/destinations.module.scss";
import { paths } from "../data/paths";

const moonPng = mainImgsArr[0];
const moonWebp = mainImgsArr[1];

const imgsArr = [moonPng, moonWebp, marsPng, marsWebp, europaPng, europaWebp, titanPng, titanWebp];

imgsArr.forEach((picture) => {
  const img = new Image();
  img.src = picture;
});

export function Destinations() {
  const navigate = useNavigate();
  const { planet } = useParams();

  const [data, setData] = useState({ ...info.destinations[0], moonPng, moonWebp });

  useEffect(() => {
    if (!planet || planet === "moon") {
      setData({ ...info.destinations[0], png: moonPng, webp: moonWebp });
    }

    if (planet === "mars") setData({ ...info.destinations[1], png: marsPng, webp: marsWebp });
    if (planet === "europa") setData({ ...info.destinations[2], png: europaPng, webp: europaWebp });
    if (planet === "titan") setData({ ...info.destinations[3], png: titanPng, webp: titanWebp });
  }, [planet]);

  useEffect(() => {
    if (!["", "moon", "mars", "europa", "titan"].includes(planet)) navigate(paths.destination);
  }, [navigate, planet]);

  return (
    <main className={styles.main}>
      <Planet
        name={data.name}
        description={data.description}
        distance={data.distance}
        travel={data.travel}
        png={data.png}
        webp={data.webp}
        activeLinkStyles={{
          color: "var(--color-white)",
          borderBottom: "3px solid var(--color-white)",
        }}
        allPlanets={info.destinations.map((planet) => planet.name)}
      />
    </main>
  );
}
