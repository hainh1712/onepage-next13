import { useEffect, useState } from "react";
export default function Home() {
  return (
    <div className="bg-[#f2cedf] w-full">
      <h1 className="font-bold text-center">Hello Next.js 13!</h1>
      <div className="images my-2 flex items-center justify-center flex-col">
        <img
          src="https://cdn.tgdd.vn/Files/2023/02/21/1511939/hoa-anh-dao-nhat-ban-y-nghia-hinh-anh-cach-trong-cham-soc-tai-nha-202302220816312265.jpg"
          alt="Hình ảnh 1"
          width="300"
          height="200"
          className="my-2"
        />
        <img
          src="https://danviet.mediacdn.vn/upload/2-2018/images/2018-05-08/Loat-anh-hoa-anh-dao-dep-nhu-tien-canh-khien-du-khach-muon-den-Nhat-Ban-ngay-lap-tuc-1-1525769308-width650height366.jpg"
          alt="Hình ảnh 2"
          width="300"
          height="200"
          className="my-2"
        />
        <img
          src="https://image.plo.vn/w2000/Uploaded/2024/bpcbzqvp/2023_04_03/hoa-anh-dao-1-2477.jpg.webp"
          alt="Hình ảnh 3"
          width="300"
          height="200"
          className="my-2"
        />
        {[...Array(34)].map((_, index) => (
        <img
          key={index}
          src={`https://itss-hedsocial.s3.amazonaws.com/conan/chap_1/${index + 1}.jpg`}
          alt={`Hình ảnh ${index + 1}`}
          width="300"
          height="200"
          className="my-2"
        />
      ))}
      </div>
    </div>
  );
}
