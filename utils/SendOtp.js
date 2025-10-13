import api from "@/services/config";
import toast from "react-hot-toast";

async function SendOtp(phoneNumber) {
  try {
    const res = await api.post("/auth/send-otp", { mobile: phoneNumber });
    console.log(res.data);

    toast.success(
      `${res.data.message || "کد اعتبارسنجی ارسال شد!"} ${res.data.code || ""}`
    );

    return res.data;
  } catch (err) {
    console.error("خطا در ارسال OTP:", err.response?.data || err.message);

    toast.error(err.response?.data?.message || "ارسال کد موفق نبود!");
    return { success: false, error: err.response?.data || err.message };
  }
}

export default SendOtp;
