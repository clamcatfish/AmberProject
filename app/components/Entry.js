"use client";

import {
  EditOutlined,
  DeleteFilled,
  PlusCircleOutlined,
  MinusCircleOutlined,
  StarFilled,
  StarTwoTone,
} from "@ant-design/icons";
import Tag from "./Tag";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Modal from "./Modal";

const Entry = ({ entry }) => {
  const Router = useRouter();
  const [action, setAction] = useState("");
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [postToEdit, setPostToEdit] = useState({
    book: "",
    page_number: "",
    title: "",
    tags: "",
    description: "",
    comments: "",
    checked: ""
  });
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    if (showModalEdit) {
      setPostToEdit({
        book: entry.book || "",
        page_number: entry.page_number || "",
        title: entry.title || "",
        tags: entry.tags.join(", ") || "",
        description: entry.description || "",
        comments: entry.comments || "",
        favourite: entry.favourite || false
      });
    }
  }, [showModalEdit, entry]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === "edit") {
      axios
        .patch(`/api/entries/${entry.id}`, postToEdit)
        .then((res) => {
          console.log(res);
        })
        .catch((err) => {
          console.log(err);
        })
        .finally(() => {
          setShowModalEdit(false);
          Router.refresh();
        });
    } else if (action === "delete") {
      handleDeletePost(entry.id);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPostToEdit((prevState) => ({ ...prevState, [name]: value }));
  };
  const handleChangeCheck = (e) => {
    setPostToEdit((prevState) => ({ ...prevState, favourite: e.target.checked }));
  };

  const handleDeletePost = (id) => {
    axios
      .delete(`/api/entries/${id}`)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        setShowModalEdit(false);
        Router.refresh();
      });
  };

  return (
    <div
      className="grid grid-cols-[repeat(11,1fr)] border-black border-2 mb-8 rounded bg-gray-100 px-1 "
      key={entry.id}
    >
      {console.log(entry.title)}
      {entry.favourite === true ? (
        <>
          <div className="col-span-1 row-span-1 flex flex-row items-center"><StarTwoTone className="transform scale-150" twoToneColor={'#FFD700'}/></div>
          <div className="col-span-1 row-span-1 w-full"></div>
        </>
      ) : (
        <div className="col-span-2 row-span-1 w-full"></div>
      )}
      <div className="col-span-7 row-span-1 text-center text-emerald-700 font-semibold text-lg">
        {entry.book}
      </div>
      <div className="col-span-1 row-span-1"></div>
      <div className="col-span-1 row-span-1 text-xl text-black flex flex-row-reverse">
        <EditOutlined
          onClick={() => (setShowModalEdit(true), setPostToEdit(entry))}
        />
      </div>
      <Modal showModal={showModalEdit} setShowModal={setShowModalEdit}>
        <form className=" " onSubmit={handleSubmit}>
          <div className="flex flex-row justify-between items-baseline mb-4">
            <span className=" font-semibold">Book</span>
            <input
              className=" w-4/5 py-1 px-2"
              type="text"
              name="book"
              placeholder="Book"
              value={postToEdit.book}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-between items-baseline my-4">
            <span className=" font-semibold">Page Number</span>
            <input
              className=" w-4/5 py-1 px-2"
              type="number"
              name="page_number"
              placeholder="Page Number"
              value={postToEdit.page_number}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-between items-baseline my-4">
            <span className=" font-semibold">Title</span>
            <input
              className=" w-4/5 py-1 px-2"
              type="text"
              name="title"
              placeholder="Title"
              value={postToEdit.title}
              onChange={handleChange}
            />
          </div>
          <div className="flex flex-row justify-between items-baseline my-4">
            <span className=" font-semibold">Description</span>
            <textarea
              className=" w-4/5 py-1 px-2"
              type="text"
              name="description"
              placeholder="Description"
              value={postToEdit.description}
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
              value={postToEdit.tags}
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
              value={postToEdit.comments}
              onChange={handleChange}
            ></textarea>
          </div>
          <div className=" flex flex-row justify-between items-center">
            <button
              type="submit"
              className="bg-blue-600 text-white font-semibold rounded px-10 py-2 mt-2"
              onClick={() => setAction("edit")}
            >
              Edit
            </button>
            <div>
              <span className="font-semibold">Favourite</span>
              <input
                name="favourite"
                checked={postToEdit.favourite}
                type="checkbox"
                className="w-8 transform scale-150 accent-emerald-600"
                onClick={handleChangeCheck}
              />
            </div>
            <div>
              <button
                type="submit"
                className="bg-red-600 text-white font-semibold rounded px-7 py-2 mt-2"
                onClick={() => setAction("delete")}
              >
                Delete
              </button>
            </div>
          </div>
        </form>
      </Modal>
      <div className="col-span-11 row-span-1 text-center italic">
        {entry.title} (p.{entry.page_number})
      </div>
      <div className="col-span-11 row-span-1 flex flex-row justify-center ">
        {entry.tags.map((tag) => (
          <Tag key={entry.id} tag={tag} />
        ))}
      </div>
      <hr className="border-t-2 border-gray-100 col-span-11 row-span-1"></hr>
      {isExpanded && (
        <div className="col-span-11 ">
          <div className="col-span-11 row-span-1 border-t-1 border-gray-700  text-sm">
            {entry.description}
          </div>
          {entry.comments ? (
            <>
              <hr className="border-t-2 col-span-11 row-span-1 border-gray-100"></hr>

              <div className="col-span-11 row-span-1  border-gray-700 text-amber-brown text-sm">
                -&nbsp;{entry.comments}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      )}
      {isExpanded ? (
        <div className="col-span-11 row-span-1 justify-center flex flex-row">
          <MinusCircleOutlined onClick={() => toggleExpand()} />
        </div>
      ) : (
        <div className="col-span-11 row-span-1 justify-center flex flex-row">
          <PlusCircleOutlined onClick={() => toggleExpand()} />
        </div>
      )}
    </div>
  );
};

export default Entry;
