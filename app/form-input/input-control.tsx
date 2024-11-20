"use client";

import { ChangeEvent, FormEvent, useState } from "react";

/** 기존 리액트의 폼입력 처리(제어 컴포넌트로 폼 입력 제어)
 * -> 폼 데이터를 컴포넌트의 상태가 처리
 * */
export const ControlledInputExample = () => {
  const [formData, setFormData] = useState({ name: "", email: "" });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(e.target.value);
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("제출된 form: ", formData);
    // 폼 데이터 처리(예: 서버로 전송
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
      <label className="flex flex-col space-y-2">
        이름:
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded"
        />
      </label>
      <label className="flex flex-col space-y-2">
        email:
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className="px-3 py-2 border border-gray-300 rounded"
        />
      </label>
      <button
        type="submit"
        className="px-4 py-2 font-medium text-white bg-blue-500 hover:bg-blue-600"
      >
        제출
      </button>
    </form>
  );
};
