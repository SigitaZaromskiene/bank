import { useEffect, useState } from "react";
import axios from "axios";

const URL = "http://localhost:3003/bills";

export const useRead = () => {
  const [bill, setBill] = useState(null);
  const [createBill, setCreateBill] = useState(Date.now());

  useEffect(() => {
    axios.get(URL).then((res) => setBill(res.data));
  }, [createBill]);

  return [bill, setCreateBill];
};
