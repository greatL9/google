import { Suspense } from "react";
import { CountryLookup } from "./CountryLookup";
import Link from "next/link";

function Footer() {
  return (
    <footer className="absolute bottom-0 text-sm text-gray-700 bg-[#f2f2f2] dark:bg-[#171717] dark:text-gray-200  transition-colors duration-300  w-full">
      <div className="border-b px-8 py-3">
        <Suspense fallback={<p>Loading...</p>}>
          <CountryLookup />
        </Suspense>
      </div>
      <div className="flex flex-col sm:flex-row justify-between items-center px-8 py-3 space-y-7 sm:space-y-0">
        <ul className="flex items-center space-x-6">
          <Link href="https://about.google/?utm_source=google-NG&utm_medium=referral&utm_campaign=hp-footer&fg=1">
            <li className="link">About</li>
          </Link>
          <Link href="https://business.google.com/en-all/google-ads/?subid=ww-ww-et-g-awa-a-g_hpafoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpafooter&fg=1">
            <li className="link">Advertising</li>
          </Link>
          <Link href="https://business.google.com/en-all/business-profile/?subid=ww-ww-et-g-awa-a-g_hpbfoot1_1!o2&utm_source=google.com&utm_medium=referral&utm_campaign=google_hpbfooter&fg=1">
            <li className="link">Business</li>
          </Link>
          <Link href="https://www.google.com/search/howsearchworks/?fg=1">
            <li className="link">How Search works</li>
          </Link>
        </ul>
        <ul className="flex items-center space-x-6">
          <Link href="https://policies.google.com/privacy?hl=en-NG&fg=1">
            <li className="link">Privacy</li>
          </Link>
          <Link href="https://policies.google.com/terms?hl=en-NG&fg=1">
            <li className="link">Terms</li>
          </Link>
          <li className="link">Settings</li>
        </ul>
      </div>
    </footer>
  );
}

export { Footer };
