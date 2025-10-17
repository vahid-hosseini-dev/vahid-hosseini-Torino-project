function Transaction() {
  return (
    <>
      <div className=" justify-between items-center mt-20">
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
              <td className=" py-2 px-4">2025/10/17 12:00</td>
              <td className=" py-2 px-4">100,000</td>
              <td className=" py-2 px-4">123456789</td>
            </tr>
            <tr>
              <td className=" py-2 px-4">2025/10/18 14:30</td>
              <td className=" py-2 px-4">150,000</td>
              <td className=" py-2 px-4">987654321</td>
            </tr>
            <tr>
              <td className=" py-2 px-4">2025/10/19 16:45</td>
              <td className=" py-2 px-4">200,000</td>
              <td className=" py-2 px-4">112233445</td>
            </tr>
            <tr>
              <td className=" py-2 px-4">2025/10/20 18:00</td>
              <td className=" py-2 px-4">250,000</td>
              <td className=" py-2 px-4">556677889</td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}

export default Transaction;
