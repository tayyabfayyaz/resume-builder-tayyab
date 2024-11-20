'use client';

import React, { useState } from 'react';

interface addNewSkillProp{
  skills: string[];
  setSkills: React.Dispatch<React.SetStateAction<string[]>>
}



export const AddNewSkill: React.FC<addNewSkillProp> = ( { skills, setSkills } ) => {
  const [showInput, setShowInput] = useState<boolean>(false);
  const [newSkill, setNewSkill] = useState<string>("");

 const handleAddSkill = () => {
    if (newSkill.trim() !== "") {
      setSkills([...skills, newSkill.trim()]);
      setNewSkill(""); // Reset input field
      setShowInput(false); // Hide input area after adding
    }
  };

  const skillsName = skills;


  return (
    <div className="p-5 w-[600px] ">
      <ul className="list-disc ml-5 mb-5">
        {skills.map((skill, index) => (
          <li key={index} className="text-lg">{skill}</li>
        ))}
      </ul>
      <div className="flex items-center gap-3">
        {!showInput ? (
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-blue-600"
            onClick={() => setShowInput(true)}
          >
            Add New
          </button>
        ) : (
          <div className="flex gap-2">
            <input
              type="text"
              value={newSkill}
              onChange={(e) => setNewSkill(e.target.value)}
              placeholder="Enter new skill"
              className="border-2 border-gray-300 rounded-lg px-3 py-2 w-full"
            />
            <button
              className="bg-green-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-green-600"
              onClick={handleAddSkill}
            >
              Add
            </button>
            <button
              className="bg-red-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-red-600"
              onClick={() => setShowInput(false)}
            >
              Cancel
            </button>
          </div>
        )}
      </div>
    </div>
  );
};



