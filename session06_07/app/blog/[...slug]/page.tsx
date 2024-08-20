import React from 'react'

interface Blog{
    slug: string
}
interface Props {
    params: Blog
}

export default function Plog(props: Props) {
    console.log(props);
    const { params } = props;
  return (
    <div>
    Bạn đang xem blog với đường dẫn: {params.slug}
    </div>
  )
}
