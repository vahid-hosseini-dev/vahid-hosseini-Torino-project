import toast from "react-hot-toast";

async function CheckOtp(phoneNumber, code) {
  try {
    const res = await fetch("/api/auth/check-otp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ mobile: phoneNumber, code }),
    });

    const data = await res.json();

    if (res.ok && data.success) {
      toast.success("اعتبارسنجی با موفقیت انجام شد");
      window.location.href = "/";
    } else {
      toast.error(data.error || "ارسال کد موفق نبود!");
    }

    return data;
  } catch (err) {
    console.error("خطا در ارسال OTP:", err);
    toast.error("ارسال کد موفق نبود!");
    return { success: false, error: err.message || "خطای نامشخص" };
  }
}

export default CheckOtp;
