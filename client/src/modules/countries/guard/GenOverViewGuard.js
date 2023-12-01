import React, { useEffect, useState } from "react";
import SpinLoader from "../../../components/SpinLoader";

const GenOverViewGuard = ({ children }) => {
  const [loadChild, setLoadChild] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setLoadChild(true);
    }, 2000);
  }, []);

  return loadChild ? children : <SpinLoader />;
};

export default GenOverViewGuard;
