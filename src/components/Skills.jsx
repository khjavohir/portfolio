import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import Boostrap from "../assets/bootstrap.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Firebase from "../assets/firebase.png";
import GitHub from "../assets/github.png";
import Tailwind from "../assets/tailwind.png";

const Skills = () => {
  return (
    <div className=" bg-[#0a192f] text-gray-300" name="skills">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-pink-600 ">
            Skills
          </p>
          <p className="py-4">// These are the technologies I've worke with</p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={HTML} alt="" />
            <p className="my-4">HTML</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={CSS} alt="" />
            <p className="my-4">CSS</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-[100px] mx-auto pt-4" src={Boostrap} alt="" />
            <p className="my-4">BOOTSTRAP</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={JavaScript} alt="" />
            <p className="my-4">JAVACRIPT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={ReactImg} alt="" />
            <p className="my-4">REACT</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={GitHub} alt="" />
            <p className="my-4">GitHub</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={Tailwind} alt="" />
            <p className="my-4">TAILWIND</p>
          </div>

          <div className="shadow-md shadow-[#040c16] hover:scale-110 duration-500">
            <img className="w-20 mx-auto pt-4" src={Firebase} alt="" />
            <p className="my-4">FIREBASE</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
