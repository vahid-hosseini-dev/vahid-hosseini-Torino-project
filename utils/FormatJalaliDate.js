import jalaali from "jalaali-js";

function convertToJalali(date) {
  const gregorianDate = new Date(date);
  const jDate = jalaali.toJalaali(
    gregorianDate.getFullYear(),
    gregorianDate.getMonth() + 1,
    gregorianDate.getDate()
  );

  // Return in the format YYYY/MM/DD
  return `${jDate.jy}/${String(jDate.jm).padStart(2, "0")}/${String(
    jDate.jd
  ).padStart(2, "0")}`;
}

export default convertToJalali;
