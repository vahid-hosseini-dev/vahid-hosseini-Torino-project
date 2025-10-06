import * as yup from "yup";

const otpModalSchema = yup.object({
  phoneNumber: yup
    .string()
    .required("وارد کردن شماره تلفن الزامی است")
    .matches(/^091\d{8}$/, "شماره تلفن باید با 091 شروع شود و 11 رقم باشد"),
});

export default otpModalSchema;
