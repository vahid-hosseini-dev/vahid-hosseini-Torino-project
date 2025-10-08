function formatTourDuration(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);

  const diffMs = end - start;

  const days = Math.ceil(diffMs / (1000 * 60 * 60 * 24));
  const nights = Math.max(days - 1, 0);

  return `${days.toLocaleString("fa-IR")}
   روز و ${nights.toLocaleString("fa-IR")} شب`;
}

export default formatTourDuration;
