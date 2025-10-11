import api from "@/services/config";
import { cookies } from "next/headers";

export async function POST(req) {
  try {
    const { mobile, code } = await req.json();

    const res = await api.post("/auth/check-otp", { mobile, code });
    const data = res.data;

    cookies().set({
      name: "accessToken",
      value: data.accessToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    cookies().set({
      name: "refreshToken",
      value: data.refreshToken,
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,
    });

    return new Response(JSON.stringify({ success: true, user: data.user }), {
      status: 200,
    });
  } catch (err) {
    console.error("OTP check error:", err);
    return new Response(
      JSON.stringify({ success: false, error: "مشکلی پیش آمد" }),
      {
        status: 500,
      }
    );
  }
}
