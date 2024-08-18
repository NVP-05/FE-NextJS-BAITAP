'use client';
import React from 'react'

interface Name {
    name:string
}
interface Props {
    params: Name
}

export default function Name(props: Props) {
    console.log("giá trị props", props);
    const {params} = props;

  return (
    <div>
      Company name: <b>{params.name}</b>
    </div>
  )
}