"use client";

import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { AiOutlineCamera, AiOutlineSearch } from "react-icons/ai";

function SearchHeaderOptions() {
  const pathname = usePathname();
  const router = useRouter();
  const searchParams = useSearchParams();
  const searchQuery = searchParams.get("query");
  const selectTab = (tab: string) => {
    router.push(
      `/search/${tab === "Images" ? "image" : "web"}?query=${searchQuery}`
    );
  };

  return (
    <div className="flex space-x-2 text-sm select-none border-b w-full justify-center lg:justify-start lg:pl-52 text-gray-700">
      <div
        onClick={() => selectTab("All")}
        className={`flex items-center space-x-1 border-b-3 border-transparent cursor-pointer pb-3 px-2 ${
          pathname === "/search/web"
            ? "text-blue-700! border-blue-700! dark:text-blue-300! dark:border-blue-300!"
            : "text-gray-600 dark:text-gray-300"
        }`}
      >
        <AiOutlineSearch className="text-md" />
        <p>All</p>
      </div>
      <div
        onClick={() => selectTab("Images")}
        className={`flex items-center space-x-1 border-b-3 border-transparent cursor-pointer pb-3 px-2 ${
          pathname === "/search/image"
            ? "text-blue-700! border-blue-700! dark:text-blue-300! dark:border-blue-300!"
            : "text-gray-600 dark:text-gray-300"
        }`}
      >
        <AiOutlineCamera className="text-md" />
        <p>Images</p>
      </div>
    </div>
  );
}

export { SearchHeaderOptions };
