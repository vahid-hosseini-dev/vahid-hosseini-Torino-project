import { useState, useEffect } from "react";
import { ThreeDots } from "react-loader-spinner";
import api from "@/services/config";

function Transaction() {
  const [tourData, setTourData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await api.get("/basket");

        const { id, price } = res.data;

        setTourData({
          id,
          price,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  if (!tourData) {
    return (
      <div>
        <ThreeDots />
      </div>
    );
  }

  const currentDate = new Date().toLocaleString();

  return (
    <>
      <div className="justify-between items-center mt-20">
        <table className="w-full h-auto border-separate border-[#0000001F] border rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-[#F8F8F8]">
              <th className="border-b border-[#DBDBDB] py-2 px-4 text-center text-[12px] text-[#282828CC]">
                تاریخ و ساعت
              </th>
              <th className="border-b border-[#DBDBDB] py-2 px-4 text-center text-[12px] text-[#282828CC]">
                مبلغ (تومان)
              </th>
              <th className="border-b border-[#DBDBDB] py-2 px-4 text-center text-[12px] text-[#282828CC]">
                شماره سفارش
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="py-2 px-4 text-[12px]">{currentDate}</td>
              <td className="py-2 px-4 text-[12px]">{tourData.price}</td>
              <td className="py-2 px-4 text-[12px]">
                {tourData.id.slice(0, 6)}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transaction;
