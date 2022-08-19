import React from "react";
import { useState } from "react";

const MultiDropDown = () => {
  const Arr = [
    {
      name: "Germany",

      states: [
        {
          name: "A",

          cities: ["Duesseldorf", "Leinfelden-Echterdingen", "Eschborn"],
        },
      ],
    },

    { name: "Spain", states: [{ name: "B", cities: ["Barcelona"] }] },

    { name: "USA", states: [{ name: "C", cities: ["Downers Grove"] }] },

    {
      name: "Mexico",

      states: [{ name: ["D", "F", "H"], cities: ["Puebla"] }],
    },
  ];

  const [state, setState] = useState([]) as any;
  console.log("state", state);


  const [value, setValue] = useState('');
  const [stateName, setStateName] = useState('');


  const handleChange = (event:any) => {
    const name = event.target.value
    setValue(name);

    const result = Arr.filter(val => val.name === name);

    // console.log("result ",result[0].states);
    setState(result[0].states);
  };

  const handleStateChange = (event:any) => {
    const name = event.target.value
    setStateName(name);

    const result = Arr.filter(val => val.name === name);

    console.log("result ",result[0].states);
    // setState(result[0].states);
  };

  return (
    <>
    {/* {console.log("arr", fileList)} */}
    <div className="main-div">
      <label>
        Choose Country : 
        <select value={value} onChange={handleChange}>
          {Arr.map((option) => (
            <option value={option.name}>{option.name}</option>
          ))}
        </select>
      </label>
      <p>Country :  {value}</p>

      <label>
        Choose State : 
        <select value={stateName} onChange={handleStateChange}>
          {state.map((state:any) => (
            <option value={state.name}>{state.name}</option>
          ))}
        </select>
      </label>
      <p>State :  {value}</p>
    </div>
    <style>
        {
            `
            .main-div{
                height: 100vh;
                width: 100vw;
                display: flex;
                justify-content: center;
                align-items: center;
                background: #e7ceff;
                flex-direction: column;
        }
            `
        }
    </style>
    </>
  )
};

export default MultiDropDown;
