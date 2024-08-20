import { NextResponse } from "next/server";

const users = [
  {
    id: 1,
    name: "phúc",
    age: 19,
  },
  {
    id: 2,
    name: "nhất",
    age: 19,
  },

  {
    id: 3,
    name: "minh",
    age: 19,
  },

  {
    id: 4,
    name: "lương",
    age: 19,
  },
];

export async function GET(req: any, res: any) {
  const { params } = res;
  const find = users.find((item) => {
    return item.id == +res.params.id;
  });

  return NextResponse.json({
    message: find ? find : "không tìm thấy",
  });
}

export async function DELETE(req: any, res: any) {
  const { params } = res;
  const idUser = users.findIndex((user) => user.id === res.params.id);
  console.log(idUser);

  if (idUser == -1) {
    return NextResponse.json({ message: "Xóa thông tin tài khoản thành công" });
  } else {
    return NextResponse.json({ message: "Người dùng không tồn tại" });
  }
}

export async function PUT(request: any) {
  const data = await request.json();
  console.log("data:", data);

  return NextResponse.json({ message: "Cập nhật user thành công", user: data });
}
