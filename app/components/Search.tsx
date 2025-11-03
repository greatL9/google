import { AiOutlineSearch } from "react-icons/ai";
import { IoMdMic } from "react-icons/io";

function Search() {
  return (
    <>
      <form className="flex w-full mt-5 mx-auto max-w-[90%] border border-gray-200 px-5 py-3 rounded-full hover:shadow-md transition-shadow focus-within:shadow-md sm:max-w-xl lg:max-w-2xl items-center">
        <AiOutlineSearch className="text-gray-500 text-xl mr-3" />
        <input
          type="text"
          className="grow focus:outline-none"
          placeholder="Search..."
        />
        <IoMdMic className="text-gray-500 text-xl ml-3" />
      </form>
      <div className="flex flex-col sm:space-y-0 space-y-2 sm:flex-row sm:space-x-4 mt-8 justify-center">
        <button className="btn">Google Search</button>
        <button className="btn">I&apos;m Feeling Lucky</button>
      </div>
    </>
  );
}

export default Search;
