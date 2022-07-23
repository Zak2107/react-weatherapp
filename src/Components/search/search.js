import { useState } from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { cityURL, cityOptionsApi } from "../../api";

const Search = ({ onSearchChange }) => {
  const [search, setSearch] = useState(null);
  const loadOptions = (inputValue) => {
    return fetch(
      `${cityURL}/cities?minPopulation=1000000&namePrefix=${inputValue}`,
      cityOptionsApi
    )
      .then((response) => response.json())
      .then((response) => {
        return {
            options: response.data.map((city) =>{
                return {
                    value:`${city.latitude} ${city.longitude}`,
                    label:`${city.name},${city.country}`,
                }
            })
        }
      })
      .catch((err) => console.error(err));
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    onSearchChange(searchData);
  };
  return (
    <AsyncPaginate
      placeholder="Search for the City"
      debounceTimeout={600}
      value={search}
      onChange={handleOnChange}
      loadOptions={loadOptions}
    ></AsyncPaginate>
  );
};

export default Search;
