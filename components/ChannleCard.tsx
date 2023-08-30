import Image from "next/image";
import {
  facebook,
  insta,
  twitter,
  youtube,
  downIcon,
  upIcon,
} from "@Images/index";
import classNames from "classnames";

const ChannleCard = ({}) => {
  const socialMedia = [
    {
      id: 0,
      name: "@nathanf",
      followers: 1987,
      progress: 12,
      logo: facebook,
      isUp: true,
    },
    {
      id: 1,
      name: "@nathanf",
      followers: 1044,
      progress: 99,
      logo: twitter,
      isUp: true,
    },
    {
      id: 2,
      name: "@realnathanf",
      followers: "11k",
      progress: 1099,
      logo: insta,
      isUp: true,
    },
    {
      id: 3,
      name: "@realnathanf",
      followers: "11k",
      progress: 1239,
      logo: youtube,
      isUp: false,
    },
  ];

  return (
    <div className="flex flex-col px-4 py-4 lg:py-8 text-center md:grid md:grid-cols-2 lg:p-12 lg:grid-cols-4 lg:mt-[-200px]">
      {socialMedia.map((item) => (
        <div
          key={item.id}
          className={classNames(
            "flex flex-col items-center max-w-sm   mx-4  bg-slate-100 dark:shadow-[0px_px_55px_2px_#f7fafc] dark:bg-slate-900 my-2  shadow-[0px_px_26px_10px_#cbd5e0] drop-shadow backdrop-blur-sm",
            item.logo === facebook
              ? "before:content-['']  before:h-[4px]  before:bg-gradient-to-tr	 before:from-cyan-300 before:w-full before:to-cyan-700"
              : " ",
            item.logo === twitter
              ? "before:content-['']  before:h-[4px]  before:bg-gradient-to-tr	 before:from-cyan-300 before:w-full before:to-cyan-700"
              : " ",
            item.logo === insta
              ? "before:content-['']  before:h-[4px]  before:bg-gradient-to-tr	 before:from-amber-500 before:w-full before:to-fuchsia-700"
              : " ",
            item.logo === youtube
              ? "before:content-['']  before:h-[4px]  before:bg-gradient-to-tr	 before:from-rose-500 before:w-full before:to-red-800"
              : " "
          )}>
          <div className="flex px-4 py-3 m-2 lg:py-6">
            <Image src={item.logo} alt="logo" priority />
            <p className="px-4 ">{item.name}</p>
          </div>
          <h3 className="py-3 text-6xl font-extrabold">{item.followers}</h3>
          <p className="tracking-[7px] text-gray-600 dark:text-gray-400">
            {item.logo === youtube ? "Subscribers" : "Followers"}
          </p>
          <div
            className={classNames(
              "flex items-center py-3 font-medium ",
              item.isUp ? " text-green-600 dark:text-teal-600" : " text-red-700"
            )}>
            <p>
              {item.isUp ? (
                <Image
                  src={upIcon}
                  alt="arrow"
                  priority
                  className="pt-2 mr-2"
                />
              ) : (
                <Image
                  src={downIcon}
                  alt="arrow"
                  priority
                  className="pt-1 mr-2 "
                />
              )}
            </p>
            {item.progress} Today
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChannleCard;
