"use client";

import { useState } from "react";
import Entry from "../components/Entry";
import Nav from "../components/Nav";
import SideBar from "../components/SideBar";
import axios from "axios";
import { useRouter } from "next/navigation";

const index = () => {
  const Router = useRouter();
  const [input, setInput] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInput((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/api/entries", input)
      .then((res) => {
        console.log(res);
        setInput({
          book: "",
          page_number: "",
          title: "",
          tags: "",
          description: "",
          comments: ""
        })
        Router.refresh()
      })
      .catch((err) => {
        console.log(err);
      })
  };

  return (
    <div className="min-h-screen grid grid-cols-[1fr_5fr]">
      <div className=" bg-green-900 w-56">
        <Nav />
        <SideBar />
      </div>
      <div className="min-h-screen bg-slate-200 flex flex-col items-center">
        <div className="my-10">
          <h1 className="text-4xl text-center text-green-900 font-bold">
            Add New
          </h1>
        </div>
        <form className=" w-5/6 " onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between items-baseline mb-4">
            <span className=" font-semibold">Book</span>
            <input
              className=" w-4/5 py-1 px-2"
              type="text"
              name="book"
              placeholder="Book"
              value={input.book}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-between items-baseline my-4">
            <span className=" font-semibold">Page Number</span>
            <input
              autoComplete="off"
              className=" w-4/5 py-1 px-2"
              type="text"
              name="page_number"
              placeholder="Page Number"
              value={input.page_number}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-between items-baseline my-4">
            <span className=" font-semibold">Title</span>
            <input
              autoComplete="off"
              className=" w-4/5 py-1 px-2"
              type="text"
              name="title"
              placeholder="Title"
              value={input.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-between items-baseline my-4">
            <span className=" font-semibold">Description</span>
            <textarea
              autoComplete="off"
              className=" w-4/5 py-1 px-2"
              type="text"
              name="description"
              placeholder="Description"
              value={input.description}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className="flex flex-row justify-between items-baseline my-4">
            <span className=" font-semibold">Tags</span>
            <input
              autoComplete="off"
              className=" w-4/5 py-1 px-2"
              type="text"
              name="tags"
              placeholder="Tags"
              value={input.tags}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-between items-baseline my-4">
            <span className=" font-semibold">Comments</span>
            <textarea
              autoComplete="off"
              className=" w-4/5 py-1 px-2"
              type="text"
              name="comments"
              placeholder="Comments"
              value={input.comments}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className=" flex flex-col justify-center items-center">
            <button
              type="submit"
              className="bg-green-900 hover:text-yellow-300 text-white font-semibold rounded px-10 py-2 mt-2"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default index;
