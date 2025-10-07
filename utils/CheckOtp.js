import api from "@/services/config";
import toast from "react-hot-toast";

async function CheckOtp(phoneNumber, code) {
  try {
    const res = await api.post("/auth/check-otp", {
      mobile: phoneNumber,
      code,
    });
    console.log(res.data);

    toast.success("اعتبارسنجی با موفقیت انجام شد ");
    return res.data;
  } catch (err) {
    console.error("خطا در ارسال OTP:", err.response?.data || err.message);

    toast.error(err.response?.data?.message || "ارسال کد موفق نبود!");
    return { success: false, error: err.response?.data || err.message };
  }
}

export default CheckOtp;
