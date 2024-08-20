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

// export async function GET(req: any, res: any) {
//   return NextResponse.json({ data: users });
// }

export async function GET(req: any) {
  const { searchParams } = new URL(req.url);
  const nameQuery = searchParams.get("user_name");

  const matchingUsers = users.filter((user) =>
    user.name.toLowerCase().includes(nameQuery?.toLowerCase() || "")
  );
  return NextResponse.json(
    matchingUsers.length ? matchingUsers : "không tìm thấy"
  );
}

export async function POST(request: any) {
  const data = await request.json();
  console.log("data:", data);

  return NextResponse.json({ message: "Thêm user thành công", user: data });
}
