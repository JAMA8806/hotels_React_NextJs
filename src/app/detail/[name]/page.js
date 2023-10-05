"use client";
import React, { useEffect, useState } from "react";

const Detail = () => {
  const [selectedHotel, setSelectedHotel] = useState();

  useEffect(() => {
    const storedHotel = localStorage.getItem("selectedHotel");
    if (storedHotel) {
      setSelectedHotel(JSON.parse(storedHotel));
    }
  }, []);
  console.log(selectedHotel);
  return (
    <div>
      <h1>This is the hotel Detail</h1>
    </div>
  );
};

export default Detail;
