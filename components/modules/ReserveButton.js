"use client";

import { useRouter } from "next/navigation";

function ReserveButton({
  title,
  price,
  tourId,
  startDate,
  endDate,
  redirectTo,
  buttonName,
  className,
  divClassName,
  priceClass,
  textClass
}) {
  const router = useRouter();

  const reserveHandler = () => {
    router.push(
      `/${redirectTo}?title=${encodeURIComponent(
        title
      )}&price=${price}&start=${startDate}&end=${endDate}&id=${tourId}`
    );
  };

  return (
    <div className={divClassName}>
      <button onClick={reserveHandler} className={className}>
        {buttonName}
      </button>
      <div>
        <span className={priceClass}>
          {Number(price).toLocaleString("fa-IR")}
        </span>
        <span className={textClass}> تومان</span>
      </div>
    </div>
  );
}

export default ReserveButton;
