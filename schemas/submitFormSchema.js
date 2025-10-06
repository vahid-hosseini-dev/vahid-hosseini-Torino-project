import * as yup from "yup";

const submitFormSchema = yup.object({
  otpCode: yup.string().required("وارد کردن کد تایید الزامی است"),
});

export default submitFormSchema;
