import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { addToPastes, updatePastes } from "../redux/pasteSlice";


const Home = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const [value, setValue] = useState("");

  const pasteId = searchParams.get("pasteId");

  const handleCreatePaste = () => {
    const paste = {
      title,
      content: value,
      _id: pasteId ?? Date.now().toString(36),
      createdAt: new Date().toISOString(),
    };

    if (pasteId) {
      //update
      dispatch(updatePastes(paste));
    } else {
      //create
      dispatch(addToPastes(paste));
    }

    //after creating/updating
    setTitle("");
    setValue("");
    setSearchParams({});
  };
  return (
    <div className="py-4 px-8">
      <div className="flex flex-row gap-8">
        <input
          type="text"
          placeholder="enter title here"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="rounded-md border border-black pl-2"
        />
        <button
          className="bg-indigo-500	text-white py-1 px-2 rounded-md"
          onClick={handleCreatePaste}
        >
          {pasteId ? "Update My Paste" : "Create My Paste"}
        </button>
      </div>
      <div className="mt-8">
        <textarea
          value={value}
          placeholder="Enter content here"
          rows={20}
          onChange={(e) => setValue(e.target.value)}
          className="min-w-[500px] border border-black rounded-md p-2"
        />
      </div>
    </div>
  );
};

export default Home;
