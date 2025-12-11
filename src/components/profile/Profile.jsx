import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChartSimple, faDiagramProject, faDownload } from "@fortawesome/free-solid-svg-icons";

import {
  faBootstrap,
  faCss,
  faFigma,
  faFlutter,
  faHtml5,
  faJs,
  faLaravel,
  faPhp,
  faPython,
  faReact,
} from "@fortawesome/free-brands-svg-icons";



const Profile = () => {
  const techStack = [
    { icon: faPython, color: "#3776AB" },
    { icon: faReact, color: "#61DAFB" },
    { icon: faJs, color: "#F7DF1E" },
    { icon: faPhp, color: "#777BB4" },
    { icon: faLaravel, color: "#FF2D20" },
    { icon: faBootstrap, color: "#7952B3" },
    { icon: faHtml5, color: "#F24E1E" },
    { icon: faCss, color: "#3776AB" },
    { icon: faFlutter, color: "#02569B" },
    { icon: faDiagramProject, color: "#4A90E2" },
    { icon: faChartSimple, color: "#4A90E2" },
    { icon: faFigma, color: "#F24E1E" },
  ];


  return (
    <div
      className={`relative mx-4 xxl:mx-0.5 -bottom-20 lg:-bottom-28 z-10 rounded-2xl bg-white drop-shadow-2xl max-xl:mb-5 shadow-white xl:p-28 lg:p-20 md:p-16 sm:p-10 p-4`}
      id="profile"
    >
      <div className="flex max-md:flex-col justify-between items-center gap-6">
        <div className="max-sm:w-full w-[33rem]">
          <h2
            className={`text-2xl xxs:text-3xl sm:text-4xl lg:text-[38px] text-[min(24px,38px)] max-md:text-center font-semibold mb-8`}
          >
            Over the years ...
          </h2>
          <div
            className={`text-xs xs:text-[16px] lg:text-lg font-normal max-md:text-center text-gray-600`}
          >
            <p className={``}>
              I gained professional experience developing web and mobile application from my previous companies, I worked with.
              I enjoy solving complex challenges and writing clean, maintainable code. 
              I continuously explore emerging technologies to enhance the projects I work on. 
            </p>
            <p className="mt-3">
                My mission is to build software that drives meaningful impact for both users and organizations.
            </p>
          </div>
        </div>
        <div className="flex flex-col">
          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-6">
          {techStack.map((item, index) => (
            <div key={index} className="rounded-md">
              <FontAwesomeIcon
                icon={item.icon}
                className="text-6xl aspect-square"
                size="4x"
                color={item.color }
              />
            </div>
          ))}
          </div>
          <div className="pt-5">
            <p className="text-md text-gray-600">and many more...</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Profile;
