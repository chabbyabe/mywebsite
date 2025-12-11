import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Front-end Development",
    description:
      "I develop dynamic, responsive, and accessible web applications using modern frameworks, ensuring smooth performance and an engaging user experience.",
    teckstack: ["React", "TypeScript", "Javascript", "HTML", "CSS", "TailwindCSS"]
  },
  {
    id: 2,
    title: "Back-end Development",
    description:
      "I architect and develop APIs, handle data efficiently, and build stable system logic that ensures your application runs reliably at scale.",
    teckstack: ["Python (Django)", "PHP (Laravel)"]
  },
  {
    id: 3,
    title: "Mobile Application Development",
    description:
      "I create full-featured mobile applications by combining front-end and back-end development, delivering high-performance, user-friendly apps for iOS and Android platforms.",
    teckstack: ["React Native", "Flutter"]
  },
];

const Profession = () => {
  return (
    <div
      className="pt-25  content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6">
          <p className="text-md sm:text-lg font-normal text-gray-400 mb-4">
           I create seamless digital experiences by blending thoughtful design with solid engineering. 
          </p>
          <p className="text-md sm:text-lg font-normal text-gray-400">
            My work focuses on building user-centered interfaces and reliable applications that are both visually engaging and functionally strong.
          </p>
        </div>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
