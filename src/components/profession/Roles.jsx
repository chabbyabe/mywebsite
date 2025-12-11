import { useEffect, useState } from "react";

const Roles = ({ role }) => {
  const [mouseHover, setMouseHover] = useState(false);
  useEffect(() => {
    window.addEventListener("mouseenter", (e) => {
      console.log("Mouse entered on the: ", e.target);
    });
  }, []);

  return (
    <div
      onMouseEnter={() => setMouseHover(true)}
      onMouseLeave={() => setMouseHover(false)}
      className="p-4 xs:p-8 bg-white hover:shadow-xl h-auto shadow-gray-300 ease-out duration-800 rounded-lg my-6 flex relative overflow-hidden"
    >
      <p
        className={`bg-picto-primary absolute start-0 w-0 h-full mt-[-16px] xs:mt-[-32px] ${mouseHover && "duration-200 w-[5px]"
          }`}
      />
      <div>
        <p className="text-xl sm:text-2xl font-semibold text-gray-900 pb-4">
          {role?.title}
        </p>
        <p className="text-[13px] sm:text-[16px] font-normal text-gray-700">
          {role?.description}
        </p>
        <div className="text-gray-800 font-bold flex justify-start align-start gap-2 pt-5">
          <div>Tools:</div>
          <div className="flex flex-row flex-wrap gap-2">
            {role?.teckstack.map((value) => {
              return <span class="bg-blue-100 text-blue-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded-sm dark:bg-blue-900 dark:text-blue-300">{value}</span>;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roles;
