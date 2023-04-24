import React from "react";
import { Link } from "react-router-dom";

const Article = ({ flags, name, population, region, subregion, capital }) => {
  return (
    <>
      <Link to={`/${name.common}`}>
        <article className=" bg-slate-100 rounded-lg shadow-lg overflow-hidden transition-all duration-500 ease-out cursor-pointer hover:bg-slate-500 hover:text-white ">
          <img
            src={flags.svg}
            alt="logo"
            className="md:h-72 w-full object-cover"
          />
          <div className="p-4">
            <h2 className="font-bold text-lg text-gray-900 mb-2">
              {name.common}
            </h2>
            <p className="text-xm italic font-medium">{capital}</p>
            <ul className="flex flex-col justify-start items-start gap-2">
              <li className="font-medium text-sm">
                Population: {population.toLocaleString()}{" "}
              </li>
              <li>Region: {region} </li>
              <li className="text-green-700">Subregion: {subregion} </li>
            </ul>
          </div>
        </article>
      </Link>
    </>
  );
};

export default Article;
