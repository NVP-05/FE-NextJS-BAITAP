"use client";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useState } from "react";

export default function Post() {
  const searchParam = useSearchParams();
  const [inputValue, setInputValue] = useState("");
  const route = useRouter();
  const searchParamURL = searchParam.get("search");

  const handleChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value;
    setInputValue(value);
  };

  const handleSearch = () => {
    route.push(`/post?search=${encodeURIComponent(inputValue)}`);
  };

  return (
    <div>
      <b>Search Value: {searchParamURL}</b>
      <br />
      <input className="border-2" onChange={handleChangeInput} type="text" />
      <button onClick={handleSearch}>Tìm kiếm</button>
    </div>
  );
}
