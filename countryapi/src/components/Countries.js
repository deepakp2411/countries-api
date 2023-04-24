import React, { useEffect, useState } from "react";
import Article from "./Article";

const url = "https://restcountries.com/v3.1/all";
const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [searchText, setSearchText] = useState("");

  const regions = [
    {
      name: "Europe",
    },
    {
      name: "Asia",
    },
    {
      name: "Africa",
    },
    {
      name: "Oceania",
    },
    {
      name: "Americas",
    },
    {
      name: "Antartica",
    },
  ];

  useEffect(() => {
    const getCountries = async () => {
      try {
        const res = await fetch(url);
        const data = await res.json();
        setCountries(data);
      } catch (error) {
        console.log(error);
      }
    };

    getCountries();
  }, []);


  const searchCountry = async () => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${searchText}`)
      const data = await res.json()
      setCountries(data)
    } catch (error) {
      console.log(error)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    searchCountry()
    
  }

  const handleFilterByRegion = async (region) => {
    try {
      const res = await fetch(`https://restcountries.com/v3.1/name/${region}`)
      const data = await res.json()
      setCountries(data)
    } catch (error) {
      console.log(error)
    }

  }

  const handleSubmitByRegion = (e) => {
    e.preventDefault();
    handleFilterByRegion()

  }
  return (
    <>
      {!countries ? (
        <h1 className="text-gray-800 font-bold flex items-center justify-center text-4xl dark:text-white">
          Loading....
        </h1>
      ) : (
        <section className="mx-auto container p-8">
          {/* form  */}

          <div className="flex flex-col gap-4 md:flex-row  md:justify-between mb-8">
            <form autoComplete="off" className="max-w-4xl md:flex-1" onSubmit={handleSubmit}>
              <input
                type="text"
                name="search"
                id="search"
                required
                value={searchText}
                onChange={(e) => setSearchText(e.target.value)}
                placeholder="Search for a country by a name"
                className="py-3 px-4 text-gray-800 placeholder-gray-800 w-full shadow-md rounded outline-none"
              />
            </form>

            <form className="" onSubmit={handleSubmitByRegion}>
              <select
                name="filter-by-region"
                id="filter-by-region"
                value={regions.name}
                onChange={(e) => handleFilterByRegion(e.target.value)}
                className="w-52 py-3 px-4 outline-none shadow text-gray-600"
              >
                {regions.map((region, index) => (
                  <option key={index} value={region.name}>
                    {region.name}
                  </option>
                ))}
              </select>
            </form>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4  ">
            {countries.map((country) => (
              <Article key={country.name.common} {...country} />
            ))}
          </div>
        </section>
      )}
    </>
  );
};

export default Countries;
