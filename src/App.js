import React from "react";
import Card from "./component/Card";
import cardImg1 from "../src/img/photosnap.svg";
import cardImg2 from "../src/img/account.svg";
import cardImg3 from "../src/img/air.svg";
import cardImg4 from "../src/img/eyecam.svg";
import cardImg5 from "../src/img/faceit.svg";
import cardImg6 from "../src/img/insure.svg";
import cardImg7 from "../src/img/loopstudios.svg";
import cardImg8 from "../src/img/manage.svg";
import cardImg9 from "../src/img/myhome.svg";
import cardImg10 from "../src/img/shortly.svg";

const data = [
  {
    id: 1,
    src: cardImg1,

    about: { profession: "Eyecam Co.", new: "New", feature: "Featured" },
    extra: ["1d ago", "Full Time", "USA only"],
    heading: "Senior Frontend Developer",
    techs: ["Fullstack", "Senior", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 2,
    heading: "Fullstack Developer",
    about: { profession: "Photosnap", new: "New", feature: "Featured" },
    extra: ["1d ago", "Full Time", "USA only"],
    src: cardImg2,
    techs: [ "Fullstack", "Midweight", "Python", "React"],
  },
  {
    id: 3,
    heading: "Junior Frontend Developer",
    about: { profession: "Manage",  },
    extra: ["1d ago"],
    src: cardImg3,
    techs: ["Fullstack", "Senior", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 4,
    heading: "Junior Frontend Developer",
    about: { profession: "Account",  },
    extra: ["1d ago", "Full Time", "USA only"],
    src: cardImg4,
    techs: [ "Senior", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 5,
    heading: "Software Engineer",
    about: { profession: "MyHome",  },
    extra: ["1d ago", "Full Time", "USA only"],
    src: cardImg5,
    techs: ["Frontend", "Senior", "HTML", "CSS", "React js"],
  },
  {
    id: 6,
    heading: "Junior Backend Developer",
    about: { profession: "Loop Studios",  },
    extra: ["1d ago", "Full Time", "USA only"],
    src: cardImg6,
    techs: ["Frontend", "Senior", "HTML", "CSS", "JavaScript"],
  },
  {
    id: 7,
    heading: "Junior Developer",
    about: { profession: "FaceIt",  },
    extra: ["1d ago", "Full Time", "USA only"],
    src: cardImg7,
    techs: ["Frontend", "Senior", "HTML"],
  },
  {
    id: 8,
    heading: "Junior Frontend Developer",
    about: { profession: "Shortly",  },
    extra: ["1d ago", "Full Time", "USA only"],
    src: cardImg8,
    techs: ["Frontend", "Senior", "HTML"],
  },
  {
    id: 9,
    heading: "Full Stack Engineer",
    about: { profession: "Insure",  },
    extra: ["1d ago", "Full Time", "USA only"],
    src: cardImg9,
    techs: ["Frontend", "Senior", "HTML"],
  },
  {
    id: 10,
    heading: "Front-end Dev",
    about: { profession: "The Air Filter Company",  },
    extra: ["1d ago", "Full Time", "USA only"],
    src: cardImg10,
    techs: ["Frontend", "Senior", "HTML"],
  },
];

function App() {
  return (
    <div className="App">
      <header className="site-header"></header>
      <main className="main-content">
        <div className="main-content__container container">
          <ul className="main-content__boxes boxes">
            {data.map((item) => {
              return (
                <Card
                  key={item.id}
                  id={item.id}
                  extra={item.extra}
                  techs={item.techs}
                  about={item.about}
                  heading={item.heading}
                  src={item.src}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </div>
  );
}

export default App;
