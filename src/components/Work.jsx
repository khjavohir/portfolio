import work1 from "../assets/work2.png";
import work2 from "../assets/work3.png";
import work3 from "../assets/work4.png";
import work4 from "../assets/work5.png";
import work5 from "../assets/work6.png";

const Work = () => {
  return (
    <div name="work" className="w-full md:h-screen text-gray-300 bg-[#0a192f]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
            Work
          </p>
          <p className="py-6">// Check out some of my recent work</p>
        </div>
        {/* Container */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Grid */}

          <div
            style={{ backgroundImage: `url(${work1})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div"
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-200">
              <span className="text-2xl font-bold text-white tracking-wider">
                Pizza Shop
              </span>
              <div className="pt-8 text-center">
                <a href="https://java-pizza.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work2})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-200">
              <span className="text-2xl font-bold text-white tracking-wider">
                Adabiy Gid
              </span>
              <div className="pt-8 text-center">
                <a href="https://adabiygid.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work3})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-200">
              <span className="text-2xl font-bold text-white tracking-wider">
                AloShop E-commerce
              </span>
              <div className="pt-8 text-center">
                <a href="https://javohir-shop.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work4})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-200">
              <span className="text-2xl font-bold text-white tracking-wider">
                JS scroll app
              </span>
              <div className="pt-8 text-center">
                <a href="https://java-apple.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div
            style={{ backgroundImage: `url(${work5})` }}
            className="shadow-lg shadow-[#040c16] group container rounded-md 
            flex justify-center text-center items-center mx-auto content-div "
          >
            {/* Hover Effect */}
            <div className="opacity-0 group-hover:opacity-100 duration-200">
              <span className="text-2xl font-bold text-white tracking-wider">
                Food Delivery
              </span>
              <div className="pt-8 text-center">
                <a href="https://java-burger.netlify.app/" target="_blank">
                  <button className="text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg">
                    Demo
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
