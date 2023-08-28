import {
  downIcon,
  facebook,
  insta,
  twitter,
  upIcon,
  youtube,
} from "@Images/index";
import Image from "next/image";
import classNames from "classnames";

const OverView = ({}) => {
  const overView = [
    {
      id: 0,
      states: " Page Views",
      count: 87,
      progress: "3%",
      logo: facebook,
      isUp: true,
    },
    {
      id: 1,
      states: "Likes",
      count: 52,
      progress: "2%",
      logo: facebook,
      isUp: false,
    },
    {
      id: 2,
      states: "Likes",
      count: 5462,
      progress: "2257%",
      logo: insta,
      isUp: true,
    },
    {
      id: 3,
      states: " Profile Views",
      count: "52k",
      progress: "1375%",
      logo: insta,
      isUp: true,
    },
    {
      id: 4,
      states: "Retweets",
      count: 117,
      progress: "303%",
      logo: twitter,
      isUp: true,
    },
    {
      id: 5,
      states: "Likes",
      count: 507,
      progress: "553%",
      logo: twitter,
      isUp: true,
    },
    {
      id: 6,
      states: "Likes",
      count: 107,
      progress: "19%",
      logo: youtube,
      isUp: false,
    },
    {
      id: 7,
      states: "Lik  Total Viewses",
      count: 1407,
      progress: "12%",
      logo: youtube,
      isUp: false,
    },
  ];
  return (
    <>
      <h2 className="text-3xl font-extrabold text-center text-gray-500 lg:mx-12 lg:text-left dark:text-white">
        {" "}
        Overview - Today
      </h2>
      <div className="flex flex-col mx-4 my-6 text-center md:grid md:grid-cols-2 lg:grid-cols-4">
        {overView.map((item) => (
          <div
            key={item.id}
            className="flex flex-col dark:bg-slate-900 r max-w-sm m-4 p-5  rounded-md bg-slate-100 dark:shadow-[0px_px_55px_2px_#f7fafc]  shadow-[0px_px_26px_10px_#cbd5e0] drop-shadow backdrop-blur-sm">
            <div className="flex items-center justify-between py-2">
              <p className="font-medium text-gray-600 dark:text-gray-400">
                {item.states}
              </p>
              <Image src={item.logo} alt="logo" />
            </div>
            <div className="flex items-center justify-between py-2">
              <p className="text-3xl font-extrabold ">{item.count}</p>

              <div
                className={classNames(
                  "flex items-center py-2",
                  item.isUp
                    ? " text-green-600 dark:text-teal-600"
                    : " text-red-700"
                )}>
                {" "}
                {item.isUp ? (
                  <Image src={upIcon} alt="arrow" className="pb-1 mr-2" />
                ) : (
                  <Image src={downIcon} alt="arrow" className="mr-2 " />
                )}
                <p>{item.progress}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default OverView;
