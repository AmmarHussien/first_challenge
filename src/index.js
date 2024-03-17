import React from "react";
import ReactDOM from "react-dom/client";
import "./style.css";

const skillData = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EDF81D",
  },
  {
    skill: "Web Design",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />

        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="/focaccia.jpg" alt="logo" />;
}

function Intro() {
  return (
    <div>
      <h1>Ammar Hussien</h1>
      <p>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries,
      </p>
    </div>
  );
}

function SkillList() {
  const skills = skillData;
  return (
    <div className="skill-list">
      {skills.map((skills) => (
        <Skill skill={skills.skill} color={skills.color} level={skills.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>

      {/* <span>
        {level === "advanced"
          ? "💪🏻"
          : level === "intermediate"
          ? " 👍"
          : level === "beginner"
          ? "👶"
          : ""}
      </span> */}
      <span>
        {" "}
        {level === "advanced" && "💪🏻"}
        {level === "intermediate" && "👍"}
        {level === "beginner" && "👶"}
      </span>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
