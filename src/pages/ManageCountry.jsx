// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
// eslint-disable-next-line no-unused-vars
import useConsultCountry from "../hooks/useConsultCountry";

const ManageCountry = () => {
  const [country, setCountry] = useState({});
  const [inputValue, setInputValue] = useState("");


  const handleConsult = () => {
    fetch(`http://localhost:3001/countries/${inputValue.toUpperCase()}`)
      .then((response) => response.json())
      .then((data) => setCountry(data))
  }
  const handleDelete = () => {
    fetch(`http://localhost:3001/country?code=${inputValue.toUpperCase()}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      }
    })
  }

  const handleUpdate = () => {
    fetch(`http://localhost:3001/country?code=${inputValue.toUpperCase()}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(country)
    })
  }

  const handleChange = (e) => {
    const { name, value } = e.target;

    const newName = name === "name" ? value : country.name;
    const newCapital = name === "capital" ? value : country.capital;
    const newContinent = name === "continent" ? value : country.continent;
    const newCurrency = name === "currency" ? value : country.currency;
    const newLanguages = name === "languages" ? value : country.languages;

    setCountry({
      code: country.code,
      name: newName,
      capital: newCapital,
      continent: newContinent,
      currency: newCurrency,
      languages: [...country.languages, newLanguages],
    });
  };

  return (
    <section>
      <h2>Hello! this the view</h2>
      <input type="text" placeholder="enter the country code" onBlur={(e) => setInputValue(e.target.value)} maxLength={2}/>
      <button onClick={handleConsult}>Consult</button>
      <input type="text" placeholder="code" value={country == null ? "" : country.code} onBlur={handleChange}/>
      <input type="text" name="name" placeholder="name" defaultValue={country == null ? "" : country.name} onBlur={handleChange}/>
      <input type="text" name="capital" placeholder="capital" defaultValue={country == null ? "" : country.capital} onBlur={handleChange}/>
      <input type="text" name="continent" placeholder="continent" defaultValue={country == null ? "" : country.continent?.name} onBlur={handleChange}/>
      <input type="text" name="currency" placeholder="currency" defaultValue={country == null ? "" : country.currency} onBlur={handleChange}/>
      <input type="text" name="languages" placeholder="languages" defaultValue={country == null ? "" : country?.languages?.[0]?.name} onBlur={handleChange}/>
      <button onClick={handleUpdate}>Update</button>
      <button onClick={handleDelete}>Delete</button>
    </section>
  )
}

export default ManageCountry

