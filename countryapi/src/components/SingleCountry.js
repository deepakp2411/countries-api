import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const SingleCountry = () => {
  const [country, setCountry] = useState([]);
  const { name } = useParams();

  useEffect(() => {
    const getSingleCountry = async () => {
      try {
        const res = await fetch(`https://restcountries.com/v3.1/name/${name}`);
        const data = await res.json();
        setCountry(data);
      } catch (error) {
        console.log(error);
      }
    };

    getSingleCountry();
  }, [name]);
  return (
    <section className="p-8 md:py-0 mx-auto max-w-7xl">
      {country.map((item, idx) => (
        <div
          key={idx}
          className="grid grid-cols-1 gap-8 md:grid-cols-2 md:place-items-center md:h-screen"
        >
          <article>
            <img src={item.flags.svg} alt="lgo" />
          </article>

          <article>
            <h1 className="font-bold text-gray-900 text-4xl lg:text-7xl">
              {item.name.official}
            </h1>
            <div className="py-4">
              <ul className="mt-4 flex flex-col items-start justify-start">
                <li className="font-bold text-xl">Capital: {item.capital}</li>
                <li className="text-sm font-bold">
                  Population: {item.population.toLocaleString()}
                </li>
                <li className="text-sm font-semibold">
                  Region: {item.region}{" "}
                </li>
                <li className="text-slate-800">Subregion: {item.subregion} </li>
              </ul>
            </div>
            <div className="flex justify-start mt-3">
              <Link
                to="/"
                className="py-2 px-6 bg-slate-500 font-bold ronded-lg transition-all duration-500 ease-out hover:bg-slate-300 "
              >
                &larr; Back
              </Link>
            </div>
          </article>
        </div>
      ))}
    </section>
  );
};

export default SingleCountry;
