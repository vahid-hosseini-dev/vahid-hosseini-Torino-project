"use client";

import { useEffect, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { DatePicker } from "zaman";
import QueryString from "qs";
import cities from "@/data/cities";

import { useRouter } from "next/navigation";
import useQuery from "@/hooks/query";
import { flattenObject } from "@/utils/helpers";
import { useGetTours } from "@/services/queries";
import convertToJalali from "@/utils/FormatJalaliDate";

function SearchForm() {
  const [query, setQuery] = useState({});

  const router = useRouter();
  const { register, handleSubmit, control, reset } = useForm();
  const { data, isPending, refetch } = useGetTours(query);
  const { getQuery } = useQuery();

  //   useEffect(() => {
  //     refetch();
  //   }, [query]);

  useEffect(() => {
    const originId = getQuery("originId");
    const destinationId = getQuery("destinationId");
    const startDate = convertToJalali(getQuery("startDate"));
    const endDate = convertToJalali(getQuery("endDate"));

    if (originId || destinationId || startDate || endDate)
      reset({
        originId,
        destinationId,
        date: { from: startDate, to: endDate },
      });
  }, []);

  const submitHandler = (form) => {
    // setQuery(flattenObject(form));
    const query = QueryString.stringify(flattenObject(form));
    router.push(`/?${query}`);
  };

  return (
    <form
      className="flex flex-col p-5 w-fit m-auto md:flex-row md:items-center md:gap-5"
      onSubmit={handleSubmit(submitHandler)}
    >
      <div className="flex justify-between items-center my-2 gap-2 mb:gap-5">
        <select
          {...register("originId")}
          className="outline-0 flex justify-center items-center gap-2 w-[160px] h-[47px] rounded-xl bg-white text-[#00000080] border border-[#00000026]"
        >
          <option
            className="bg-[#F8F8F8] text-[16px] text-[#00000080] py-2 px-2 w-[160px] h-[35px]"
            value={""}
          >
            مبدا
          </option>
          {cities.map((city) => (
            <option
              className="text-[16px] text-[#282828B2] py-2 px-2 w-[160px] h-[35px]"
              key={city.id}
              value={city.id}
            >
              {city.name}
            </option>
          ))}
        </select>
        <select
          {...register("destinationId")}
          className="outline-0 flex justify-center items-center gap-2 w-[160px] h-[47px] rounded-xl bg-white text-[#00000080] border border-[#00000026]"
        >
          <option
            className="bg-[#F8F8F8] text-[16px] text-[#00000080] py-2 px-2 w-[160px] h-[35px]"
            value={""}
          >
            مقصد
          </option>
          {cities.map((city) => (
            <option
              className="text-[14px] text-[#282828B2] py-2 px-2 w-[160px] h-[35px] "
              key={city.id}
              value={city.id}
            >
              {city.name}
            </option>
          ))}
        </select>
      </div>

      <Controller
        control={control}
        name="date"
        render={({ field: { onChange, value } }) => (
          <DatePicker
            value={value && { from: value?.startDate, to: value?.endDate }}
            onChange={(e) => onChange({ startDate: e.from, endDate: e.to })}
            range
            placeholder="از تاریخ - تا تاریخ"
            inputClass="outline-0 text-center gap-2 w-[328px] h-[47px] bg-white border border-[#00000026] rounded-xl"
          />
        )}
      />
      <input
        className="cursor-pointer bg-[#28A745] text-white w-[328px] h-[47px] mb-10 mt-5 rounded-2xl hover:active:scale-90 hover:focus:scale-100  hover:scale-95 transition-all ease-in-out duration-150
        md:w-[190px] md:h-[51px] md:my-0
        "
        type="submit"
        value={"جستجو"}
      />
    </form>
  );
}

export default SearchForm;
