export const formatDateForAPI = (selectedDate) => {
  const date = new Date(selectedDate);

  if (date instanceof Date && !isNaN(date)) {
    return date.toISOString();
  } else {
    console.error("تاریخ انتخابی نامعتبر است:", selectedDate);
    return null;
  }
};
