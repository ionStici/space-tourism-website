import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { mainImgsArr } from "../data/images";
import anoushehPng from "./../assets/crew/image-anousheh-ansari.png";
import anoushehWebp from "./../assets/crew/image-anousheh-ansari.webp";
import markPng from "./../assets/crew/image-mark-shuttleworth.png";
import markWebp from "./../assets/crew/image-mark-shuttleworth.webp";
import victorPng from "./../assets/crew/image-victor-glover.png";
import victorWebp from "./../assets/crew/image-victor-glover.webp";
import data from "./../data/data.json";
import styles from "./../styles/crew.module.scss";
import { CrewMember } from "../ui/crew-member";

const douglasPng = mainImgsArr[2];
const douglasWebp = mainImgsArr[3];

const imgsArr = [
  douglasPng,
  douglasWebp,
  markPng,
  markWebp,
  victorPng,
  victorWebp,
  anoushehPng,
  anoushehWebp,
];

imgsArr.forEach((picture) => {
  const img = new Image();
  img.src = picture;
});

const douglas = { ...data.crew[0], png: imgsArr[0], webp: imgsArr[1] };
const mark = { ...data.crew[1], png: imgsArr[2], webp: imgsArr[3] };
const victor = { ...data.crew[2], png: imgsArr[4], webp: imgsArr[5] };
const anousheh = { ...data.crew[3], png: imgsArr[6], webp: imgsArr[7] };

export const Crew = function () {
  const { member } = useParams();
  const [crewMember, setCrewMember] = useState(douglas);

  useEffect(() => {
    if (!member || member === "douglas") setCrewMember(douglas);
    if (member === "mark") setCrewMember(mark);
    if (member === "victor") setCrewMember(victor);
    if (member === "anousheh") setCrewMember(anousheh);
  }, [member]);

  return (
    <main className={styles.main}>
      <div className={styles.bg}></div>
      <CrewMember crewNames={data.crew.map(({ name }) => name)} crewMember={crewMember} />
    </main>
  );
};
