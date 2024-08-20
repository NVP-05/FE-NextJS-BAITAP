'use client'
import { useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'

export default function Product() {
    const [inputName, setInputName] = useState("");
    const [inputCategory, setInputCategory] = useState("");
    const route = useRouter();
    const searchParam = useSearchParams();

    const searchNameURL = searchParam.get("name");
    const searchCategoryURL = searchParam.get("category");
    const handleName = (e:React.ChangeEvent<HTMLInputElement>) => {
        let nameValue = e.target.value;
        setInputName(nameValue);
    }

    const handleCategory = (e:React.ChangeEvent<HTMLInputElement>) => {
        let categoryValue = e.target.value;
        setInputCategory(categoryValue);
    }

    const handleClick = () => {
        route.push(`/products?name=${encodeURIComponent(inputName)}&category=${encodeURIComponent(inputCategory)}`);
    }

  return (
    <div>
        <b>Tên sản phẩm: {searchNameURL}</b>
        <br />
        <b>Danh mục: {searchCategoryURL}</b>
        <br />
        <input onChange={handleName} className='border-2' type="text" placeholder='Tìm kiếm theo tên'/>
        <br />
        <input onChange={handleCategory} className='border-2' type="text" placeholder='Tìm kiếm theo danh mục' />
        <br />
        <button onClick={handleClick}>Tìm kiếm</button>
    </div>
  )
}
