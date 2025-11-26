import Link from "next/link";
import Parser from "html-react-parser";
import { PaginationButtons } from "./PaginationButtons";

interface SearchItem {
  title: string;
  link: string;
  formattedUrl: string;
  htmlSnippet: string;
  displayLink: string;
  pagemap: {
    cse_image?: { src: string }[];
    metatags?: { "og:image"?: string }[];
  };
}

interface ResultsProps {
  searchInformation: {
    formattedTotalResults: string;
    formattedSearchTime: string;
  };
  items: SearchItem[];
}

function WebSearchResult({ results }: { results: ResultsProps }) {
  const formatDisplayLink = (url: string) => {
    let formatted = url.toLowerCase().replace(/^www\./, "");
    formatted = formatted.replace(/^(en|fr|de|es|it|pt)\./, "");
    formatted = formatted.replace(/\.(com|org|net|edu|gov|eu)$/i, "");
    return formatted.charAt(0).toUpperCase() + formatted.slice(1);
  };

  return (
    <div className="w-full mx-auto px-3 pb-40 sm:pb-24 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 dark:text-gray-300 text-sm mb-5 mt-3">
        About {results.searchInformation?.formattedTotalResults} results{" "}
        {results.searchInformation?.formattedSearchTime} seconds
      </p>
      {results.items.map((result) => {
        const favicon =
          result.pagemap?.cse_image?.[0]?.src ||
          result.pagemap?.metatags?.[0]?.["og:image"];
        const displayLinkText = formatDisplayLink(result.displayLink);

        return (
          <div className="mb-8 max-w-xl" key={result.link}>
            <div className="group flex flex-col">
              <div className="flex items-center gap-2 mb-1">
                {favicon && (
                  <img
                    src={favicon}
                    alt="icon"
                    className="h-7 w-7 rounded-full"
                  />
                )}
                <div className="flex flex-col">
                  <Link
                    className="text-md text-gray-600 truncate dark:text-gray-300"
                    href={result?.link}
                  >
                    {displayLinkText}
                  </Link>
                  <Link
                    className="text-xs text-gray-600 dark:text-gray-300 truncate block max-w-xs"
                    href={result?.link}
                  >
                    {result.formattedUrl}
                  </Link>
                </div>
              </div>
              <Link
                className="group-hover:underline decoration-blue-700 dark:decoration-blue-300 text-xl truncate font-medium text-blue-700 dark:text-blue-300"
                href={result?.link}
              >
                {result.title}
              </Link>
              <p className="text-gray-600 dark:text-gray-300">
                {Parser(result.htmlSnippet)}
              </p>
            </div>
          </div>
        );
      })}
      <PaginationButtons />
    </div>
  );
}

export { WebSearchResult };
