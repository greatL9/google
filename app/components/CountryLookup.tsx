"use client";

import { useEffect, useState } from "react";

function CountryLookup() {
  const [country, setCountry] = useState("Nigeria");

  useEffect(() => {
    try {
      const fetchCountry = async () => {
        const res = await fetch("https://ipapi.co/json/");
        const data = await res.json();
        setCountry(data.country_name);
      };
      fetchCountry();
    } catch (error) {
      console.error(error);
    }
  }, []);
  return <div>{country}</div>;
}

export { CountryLookup };
