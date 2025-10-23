import api from "@/services/config";
import { fetchProfile } from "@/services/queries";
import { cookies } from "next/headers";

export async function GET() {
  const cookieStore = await cookies();
  const accessToken = cookieStore.get("accessToken")?.value || null;
  const refreshToken = cookieStore.get("refreshToken")?.value || null;

  try {
    if (!accessToken) {
      return new Response(
        JSON.stringify({ loggedIn: false, message: "No access token" }),
        { status: 401 }
      );
    }

    const profileData = fetchProfile(accessToken);

    return new Response(
      JSON.stringify({ loggedIn: true, profile: profileData }),
      { status: 200 }
    );
  } catch (error) {
    if (error.response?.status === 401 || error.response?.status === 403) {
      return new Response(
        JSON.stringify({
          loggedIn: false,
          message: "Invalid or expired token",
        }),
        { status: 403 }
      );
    }
    return new Response(
      JSON.stringify({ loggedIn: false, message: "Something went wrong" }),
      { status: 500 }
    );
  }
}
