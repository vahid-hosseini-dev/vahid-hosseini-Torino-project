import * as yup from "yup";

const checkoutFormSchema = yup.object({
  fullName: yup
    .string()
    .required("وارد کردن نام و نام خانوادگی الزامی است")
    .min(3, "نام و نام خانوادگی باید حداقل ۳ کاراکتر باشد"),

  gender: yup
    .string()
    .required("انتخاب جنسیت الزامی است")
    .oneOf(["male", "female"], "جنسیت نامعتبر است"),

  nationalCode: yup
    .string()
    .required("وارد کردن کد ملی الزامی است")
    .matches(/^\d{10}$/, "کد ملی باید ۱۰ رقم باشد"),

  birthDate: yup
    .date()
    .required("وارد کردن تاریخ تولد الزامی است")
    .max(new Date(), "تاریخ تولد نمی‌تواند از امروز بیشتر باشد"),
});

export default checkoutFormSchema;
