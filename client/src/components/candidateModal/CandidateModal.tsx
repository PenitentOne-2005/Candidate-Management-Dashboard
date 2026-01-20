import React, { useState } from "react";
import type { StatusType } from "@/types";
import type { Props } from "./interface";

const CandidateModal = ({
  candidate,
  isOpen,
  onClose,
  onChangeStatus,
}: Props) => {
  const [status, setStatus] = useState<StatusType>(candidate.status);

  if (!isOpen) return null;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newStatus = e.target.value as StatusType;
    setStatus(newStatus);
    onChangeStatus(candidate.id, newStatus);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
      <div className="bg-white rounded p-6 w-full max-w-md">
        <h2 className="text-xl font-bold mb-2">{candidate.name}</h2>
        <p>{candidate.email}</p>
        <p>{candidate.phone}</p>

        <div className="flex gap-1 flex-wrap my-2">
          {candidate.skills.map((skill) => (
            <span
              key={skill.id}
              className="bg-gray-200 px-2 py-1 rounded text-sm"
            >
              {skill.name}
            </span>
          ))}
        </div>
        <p className="my-2">{candidate.description}</p>

        <label className="block mt-4">
          Status:
          <select
            className="ml-2 border rounded px-2 py-1 cursor-pointer"
            value={status}
            onChange={handleChange}
          >
            <option value="active">Active</option>
            <option value="interview">Interview</option>
            <option value="rejected">Rejected</option>
          </select>
        </label>

        <button
          className="mt-4 bg-gray-500 text-white px-3 py-1 rounded hover:bg-gray-600 cursor-pointer"
          onClick={onClose}
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default CandidateModal;
