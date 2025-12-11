import sideImg from "../../assets/images/sideImg.jpg";
import SocialMedia from "../common/socialMedia/SocialMedia";

const Introduction = () => {
  return (
    <div
      className="flex max-lg:flex-col-reverse sm:justify-between pt-10 lg:pt-31.5 lg:mb-27.5 max-xl:gap-2 p-2 max-xxl:px-4 relative text-white z-2"
      id="introduction"
    >
      <div className="w-full flex flex-col justify-between max-lg:text-center">
        <div className="pt-13 me-31.5 w-full lg:w-auto transition-all duration-500">
          <p className="text-3xl xxs:text-4xl sm:max-xl:text-5xl xl:text-6xl font-semibold w-full">
            Hello, I’m
            <span className="text-nowrap shrink-0 inline-block w-full">
              Abegail Isidro - Sieffers
            </span>
          </p>
          <p className="text-xs xxs:text-lg lg:text-xl my-6">
            I’m a  Full Stack Software Engineer with a passion for building web and mobile applications that make an impact. 
            With 5+ years of experience, I handle both front-end and back-end development to deliver complete solutions. 
          </p>
          <div className="max-w-54 text-center bg-white rounded-[4px] center">
              <SocialMedia />
            </div>
        </div>
      </div>
      <div
        className={`w-full h-full relative`}
      >
        <img
          className={` w-full h-full bottom-0  object-contain  rounded-3xl`}
          src={sideImg}
          alt="sideImg"
        />
      </div>
    </div>
  );
};

export default Introduction;
