import React from "react";

const skills = [
  { name: "Java", logo: "/java.png" },
  { name: "React", logo: "/react.png" },
  { name: "JavaScript", logo: "/js.png" },
  { name: "HTML5", logo: "/html.png" },
  { name: "CSS3", logo: "/css.png" },
  { name: "Tailwind CSS", logo: "/tailwind.png" },
  { name: "Axios", logo: "/axios.png" },
  { name: "SQL", logo: "/sql.png" },
  { name: "MongoDB", logo: "/mongoDB.png" },
];

const Skills = () => {
  return (
    <div id="skills" className="w-full py-20 px-5 lg:px-20">
      <h1 className="text-white text-3xl lg:text-4xl font-bold mb-12 text-center">
        My Skills
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 lg:gap-10 place-items-center mt-5">
        {skills.map((skill) => (
          <div
            key={skill.name}
            className="
              w-40 h-40
              flex flex-col items-center justify-center
              bg-gray-800 rounded-xl shadow-md
              transition-all duration-300 ease-out
              hover:-translate-y-3 hover:scale-105
              hover:shadow-xl hover:shadow-white/10
              cursor-pointer
            "
          >
            <img
              src={skill.logo}
              alt={skill.name}
              className="w-14 h-14 object-contain mb-3"
            />
            <h3 className="text-white text-base font-semibold text-center">
              {skill.name}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
