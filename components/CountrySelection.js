import { useState } from 'react';

const CountrySelection = ({ countries }) => {
  const [selectedCountry, setSelectedCountry] = useState(null);

  const handleSelection = (e) => {
    setSelectedCountry((oldSelection) =>
      oldSelection === e.target.value ? null : e.target.value
    );
  };

  return (
    <div>
      <form className="country-box flex gap-4 items-center mt-4">
        {countries.map((country) => (
          <label
            key={country.name} // Add a unique key for each label
            htmlFor={country.name}
            className={`flag-image-wrapper flex gap-2 p-1 rounded-md border select-none transition-colors ${
              Boolean(selectedCountry === country.name)
                ? 'border-yellow-500 bg-yellow-200'
                : 'border-gray-500 bg-gray-100'
            }`}
          >
            <input
              type="radio"
              name="country"
              id={country.name}
              value={country.name}
              onChange={handleSelection} // Add the onChange event handler
              checked={selectedCountry === country.name}
              className="hidden"
            />
            <div className="w-10 bg-cover bg-center bg-no-repeat border border-gray-400">
              <img src={country.flag.src} alt="flag" />
            </div>
            <div>{country.name}</div>
          </label>
        ))}
      </form>
    </div>
  );
};

export default CountrySelection;
