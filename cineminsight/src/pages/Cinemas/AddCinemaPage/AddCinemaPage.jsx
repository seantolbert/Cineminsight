import React, { useState, useRef, useEffect, Fragment } from "react";
import { Listbox, Transition } from "@headlessui/react";
import { CheckIcon, SelectorIcon } from "@heroicons/react/solid";

const genreList = [
  "Select Genre",
  "Sci-Fi",
  "Drama",
  "Action",
  "Comedy",
  "Western",
  "Anime",
  "RomCom",
  "Mystery",
  "Thriller",
  "Fantasy",
  "Crime",
];

export default function AddCinemaPage({ handleAddCinema }) {
  const [invalidForm, setValidForm] = useState(true);
  const [selected, setSelected] = useState(genreList[0]);
  const [newCinema, setNewCinema] = useState({
    title: "",
    genre: "",
  });

  const formRef = useRef();

  // useEffect(() => {
  //   formRef.current.checkValidity() ? setValidForm(false) : setValidForm(true);
  // });

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddCinema(newCinema);
    setNewCinema(newCinema);
  };

  const handleChange = (e) => {
    setNewCinema({
      ...newCinema,
      [e.target.name]: e.target.value,
    });
  };

  function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }

  return (
    <main className="px-5 ">
      <div className="block">
        <div className="md:col-span-1">
          <div className="mt-4">
            <h1 className="text-lg font-medium leading-6 text-gray-900">
              Add a Cinema
            </h1>
          </div>
        </div>
        <div className="mt-5 md:mt-0 md:col-span-2">
          <form autoComplete="off" ref={formRef} onSubmit={handleSubmit}>
            <div className="grid grid-cols-3 gap-6 mb-5">
              <div className="col-span-3 sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Cinema Title
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <input
                    className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border-0 shadow outline-none focus:outline-none focus:ring w-full"
                    name="genre"
                    type="text"
                    placeholder="enter title here"
                    value={newCinema.genre}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>
            </div>
            <div classname="grid grid-cols-3 gap-6 mb-10">
              <div className="col-span-3 sm:col-span-2">
                <Listbox value={selected} onChange={setSelected}>
                  <Listbox.Label className="block text-sm font-medium text-gray-700">
                    Genre
                  </Listbox.Label>
                  <div className="mt-1 relative">
                    <Listbox.Button className="relative w-full bg-white border border-gray-300 rounded-md shadow-sm pl-3 pr-10 py-2 text-left cursor-default focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                      <span className="flex items-center">
                        <span className="ml-3 block truncate">{selected}</span>
                      </span>
                      <span className="ml-3 absolute inset-y-0 right-0 flex items-center pr-2 pointer-events-none">
                        <SelectorIcon className="h-5 w-5 " aria-hidden="true" />
                      </span>
                    </Listbox.Button>

                    <Transition
                      as={Fragment}
                      leave="transition ease-in duration-100"
                      leaveFrom="opacity-100"
                      leaveTo="opacity-0"
                    >
                      <Listbox.Options className="absolute z-10 mt-1 w-full bg-white shadow-lg max-h-56 rounded-md py-1 text-base ring-1 ring-black ring-opacity-5 overflow-auto focus:outline-none sm:text-sm">
                        {genreList.map((genre) => (
                          <Listbox.Option
                            key={genre.id}
                            value={newCinema.genre}
                            name='genre'
                            className={({ active }) =>
                              classNames(
                                active
                                  ? "text-white bg-indigo-600"
                                  : "text-gray-900",
                                "cursor-default select-none relative py-2 pl-3 pr-9"
                              )
                            }
                            value={genre}
                          >
                            {({ selected, active }) => (
                              <>
                                <div className="flex items-center">
                                  <span
                                    className={classNames(
                                      selected
                                        ? "font-semibold"
                                        : "font-normal",
                                      "ml-3 block truncate"
                                    )}
                                  >
                                    {genre}
                                  </span>
                                </div>

                                {selected ? (
                                  <span
                                    className={classNames(
                                      active ? "text-white" : "text-indigo-600",
                                      "absolute inset-y-0 right-0 flex items-center pr-4"
                                    )}
                                  >
                                    <CheckIcon
                                      className="h-5 w-5"
                                      aria-hidden="true"
                                    />
                                  </span>
                                ) : null}
                              </>
                            )}
                          </Listbox.Option>
                        ))}
                      </Listbox.Options>
                    </Transition>
                  </div>
                </Listbox>
              </div>
            </div>
            <button classname="bg-purple-500 border" type="submit" disabled={invalidForm}>
              Add Cinema
            </button>
          </form>
        </div>
      </div>
    </main>
  );
}
