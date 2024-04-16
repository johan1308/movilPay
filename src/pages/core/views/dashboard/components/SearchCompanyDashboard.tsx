import { BiPlus, BiSearch } from "react-icons/bi";
import { LiCompanySelected } from "./LiCompanySelected";
import { Autocomplete, AutocompleteItem, Button } from "@nextui-org/react";

import { useReducer, useState } from "react";


const initialState: any = [];

const actions = {
  INCREMENT: "INCREMENT",
  DECREMENT: "DECREMENT",
};

// Definimos el reducer
const reducer = (state: any, action: any) => {
  console.log(action);
  switch (action.type) {
    case actions.INCREMENT:
      return [];
    case actions.DECREMENT:
      return [];
    default:
      return state;
  }
};

export const animals = [
  {
    label: "Cat",
    value: "cat",
    description: "The second most popular pet in the world",
  },
  {
    label: "Dog",
    value: "dog",
    description: "The most popular pet in the world",
  },
  {
    label: "Elephant",
    value: "elephant",
    description: "The largest land animal",
  },
  { label: "Lion", value: "lion", description: "The king of the jungle" },
  { label: "Tiger", value: "tiger", description: "The largest cat species" },
  {
    label: "Giraffe",
    value: "giraffe",
    description: "The tallest land animal",
  },
  {
    label: "Dolphin",
    value: "dolphin",
    description: "A widely distributed and diverse group of aquatic mammals",
  },
  {
    label: "Penguin",
    value: "penguin",
    description: "A group of aquatic flightless birds",
  },
  {
    label: "Zebra",
    value: "zebra",
    description: "A several species of African equids",
  },
  {
    label: "Shark",
    value: "shark",
    description:
      "A group of elasmobranch fish characterized by a cartilaginous skeleton",
  },
  {
    label: "Whale",
    value: "whale",
    description: "Diverse group of fully aquatic placental marine mammals",
  },
  {
    label: "Otter",
    value: "otter",
    description: "A carnivorous mammal in the subfamily Lutrinae",
  },
  {
    label: "Crocodile",
    value: "crocodile",
    description: "A large semiaquatic reptile",
  },
];

export const SearchCompanyDashboard = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const incrementAsync = (e: any) => {
    const item = animals.find((d) => d.value == e);
    dispatch({
      type: actions.INCREMENT,
      item,
    });
  };

  return (
    <div>
      
      <div className="mt-5">
        <h3 className="text-sm font-medium text-gray-500 dark:text-white">
          Compañías seleccionadas
        </h3>
        <ul
          role="list"
          className="mt-4 divide-y divide-gray-200 border-b dark:divide-gray-500 border-t border-gray-200 dark:border-gray-500"
        >
          {state.map((person: any, personIdx: any) => (
            <LiCompanySelected key={personIdx} person={person} />
          ))}
        </ul>
      </div>
    </div>
  );
};
