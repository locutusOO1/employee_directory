import React, { useState } from 'react';
import List from "./components/List";
import './App.css';

const employees = [
  {
    id: 1,
    firstName: "David",
    lastName: "Smith",
    phone: "555-555-5001",
    email: "dsmith@company.com",
    dob: "12/01/1901"
  },
  {
    id: 2,
    firstName: "Mary",
    lastName: "Smith",
    phone: "555-555-5002",
    email: "msmith@company.com",
    dob: "12/01/1902"
  },
  {
    id: 3,
    firstName: "Bill",
    lastName: "Powers",
    phone: "555-555-5003",
    email: "bpowers@company.com",
    dob: "12/01/1903"
  },
  {
    id: 4,
    firstName: "Sam",
    lastName: "Summers",
    phone: "555-555-5004",
    email: "ssummers@company.com",
    dob: "12/01/1904"
  },
  {
    id: 5,
    firstName: "Jill",
    lastName: "Lucas",
    phone: "555-555-5005",
    email: "jlucas@company.com",
    dob: "12/01/1905"
  },
  {
    id: 6,
    firstName: "Steve",
    lastName: "Anders",
    phone: "555-555-5006",
    email: "sanders@company.com",
    dob: "12/01/1906"
  },
  {
    id: 7,
    firstName: "Mitch",
    lastName: "Max",
    phone: "555-555-5007",
    email: "mmax@company.com",
    dob: "12/01/1907"
  },
  {
    id: 8,
    firstName: "Chris",
    lastName: "Berry",
    phone: "555-555-5008",
    email: "cberry@company.com",
    dob: "12/01/1907"
  },
  {
    id: 9,
    firstName: "Aaron",
    lastName: "Davies",
    phone: "555-555-5009",
    email: "adavies@company.com",
    dob: "12/01/1909"
  },
  {
    id: 10,
    firstName: "Jill",
    lastName: "Chan",
    phone: "555-555-5010",
    email: "jchan@company.com",
    dob: "12/01/1910"
  }
];

function App() {

  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("asc");

  return (
    <>
      <h1 className="title text-center">Employee Directory</h1>
      <form>
        <div className="search form-group form-inline d-flex justify-content-center">
          <label htmlFor="search">Search Name:</label>
          <input id="search" onChange={ event => setSearch(event.target.value) } placeholder="David Smith" />
        </div>
        <div className="sort form-group form-inline d-flex justify-content-center">
          <label>Sort Name:</label>
          <label className="radio-inline"><input type="radio" name="sort" value="asc" checked={ sort === "asc" } onChange={ event => setSort(event.target.value) } />Ascending</label>
          <label className="radio-inline"><input type="radio" name="sort" value="desc" checked={ sort === "desc" } onChange={ event => setSort(event.target.value) } />Descending</label>
        </div>
      </form>
      <List search={search} sort={sort} employees={employees}/>
    </>
  );
}

export default App;
