import Projects from "./Projects";
import mywebsiteImg from "../../assets/images/portfolio-images/mywebsite-p.png";
import spiritualmImg from "../../assets/images/portfolio-images/spiritualm-p.png";
import diary from "../../assets/images/portfolio-images/diary.png";

const projectData = [
  {
    id: 1,
    image: mywebsiteImg,
    category: "Front-end Development",
    title: "My Website",
    description:
      "My wesbsite to showcase my portfolio created fully with ReactJS",
    github: "https://github.com/chabbyabe/mywebsite",
    link: "https://abegailisidro.nl",
    status: "Completed",
  },
    {
    id: 2,
    image: spiritualmImg,
    category: "Front-end & Back-end Development",
    title: "Spiritual Maturity",
    description:
      "An online devotional web app made with Laravel & React (Typescript)",
    github: "https://github.com/chabbyabe/spiritualmweb",
    link: "https://spiritual.abegailisidro.nl",
    status: "In-progress",
  },
  {
    id: 3,
    image: mywebsiteImg,
    category: "Front-end & Back-end Development",
    title: "Expenses Tracker",
    description:
      "An expenses tracker to monitor the cash-out flow made with Python (Django) & React (TypeScript)",
    github: "https://github.com/chabbyabe/trackerapp",
    link: "https://tracker.abegailisidro.nl",
    status: "Todo",
  },
  {
    id: 4,
    image: diary,
    category: "Front-end & Back-end Development",
    title: "Diary",
    description: "An online diary made with FilamentPHP v4",
    github: "#",
    link: "https://diary.abegailisidro.nl/",
    status: "Completed",
  },
  {
    id: 5,
    image: mywebsiteImg,
    category: "Front-end & Back-end Development",
    title: "Pastag-Healthcare",
    description:
      "A health tracker, that tracks blood pressure and weight made with Python (Django) & React (TypeScript)",
    github: "https://github.com/aellivon/pastag-healthcare",
    link: "#",
    status: "Completed",
  },
];

const Portfolio = () => {
  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2 pb-10"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Portfolio</p>
          <p className="font-normal text-lg max-sm:text-md pt-6 text-gray-400">
           Here’s a selection of my recent work, highlighting my ability to build robust, 
           user-focused applications from front to back end.
          </p>
        </div>
      </div>
      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
