import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  console.log(cookieStore);
  const accessToken = cookieStore.get("accessToken")?.value || null;

  return new Response(JSON.stringify({ loggedIn: !!accessToken }), {
    status: 200,
  });
}
