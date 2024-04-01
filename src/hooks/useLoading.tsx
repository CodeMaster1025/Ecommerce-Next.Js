import { useState } from "react";

const useLoading = () => {
  const [loading, setLoading] = useState(true);

  const handleImageLoad = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };
  return { loading, handleImageLoad };
};
export default useLoading;
