import { HiArrowRight } from "react-icons/hi";
const Home = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#0a192f]">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-pink-700">Hi, my name is</p>
        <h1 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">
          Xatamov Javohir
        </h1>
        <h2 className="text-4xl sm:text-7xl font-bold text-[#8892b0]">
          I'm a Front-End Developer
        </h2>
        <p className="text-[#8892b0] py-4 max-w-[700px]">
          I'm a Front-End developer specializing in building (and occasionally
          designing) exceptional digital experiences. Currently, I'm focused on
          building responsive front web applications
        </p>
        <div>
          <button className="text-white border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 duration-300">
            View Work <HiArrowRight className="ml-3" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
