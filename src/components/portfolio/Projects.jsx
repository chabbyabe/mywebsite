import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Projects = ({ data }) => {

  const statusStyles = {
    "Todo": "bg-gray-200 text-gray-800",
    "In-progress": "bg-yellow-200 text-yellow-800",
    "Completed": "bg-green-200 text-green-800",
  };
  return (
    <div className="max-w-106 rounded-lg outline-[#FFFFFF] hover:shadow-2xl duration-300 transition-all shadow-gray-300 border border-gray-200">
      <img src={data?.image} className="aspect-video object-cover object-top rounded-lg borded" alt={`${data?.title} image`} />
      <div className="p-4 xs:p-8">
        <p className="text-gray-400 font-medium">{data?.category}</p>
        <p className="text-gray-900 text-md xxs:text-lg font-semibold pt-1 mb-3">
          {data?.title}  <span
                          className={`inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium
                            ${statusStyles[data?.status] || "bg-gray-100 text-gray-700"}`}>
                          {data?.status}</span>
        </p>
        <p
          style={{ lineHeight: "20px", letterSpacing: "0%" }}
          className="text-gray-600 text-md text-wrap"
        >
          {data?.description}
        </p>
         {data?.github != "#" ?
        <a
          href={data?.github}
          target="_blank"
          className="btn btn-primary me-3 text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
        >
          <FontAwesomeIcon icon={faGithub} size="l" className="" />
        </a>
        : null}
        {data.link != "#" ?
          <a
            target="_blank"
            href={data?.link}
            className="btn hover:border-picto-primary hover:text-picto-primary bg-white text-sm xs:text-[16px] font-semibold hover:gap-3 xs:hover:gap-4 transition-all duration-300 mt-5 xs:py-5.75 px-6 max-sm:w-full"
          >
            Visit website
            <span className="ms-1 xs:ms-3">
              <FontAwesomeIcon icon={faArrowRight} size="l" className="" />
            </span>
          </a>
          : null}
      </div>
    </div>
  );
};

export default Projects;
