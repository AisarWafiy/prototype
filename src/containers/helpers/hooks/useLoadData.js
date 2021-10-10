import React, { useEffect, useState } from "react";

export const useLoadData = (action) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [data, setData] = useState(null);

  useEffect(() => {
    const loadData = async () => {
      setIsLoading(true);

      try {
        const actionData = await action();
        setData(actionData);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
        setIsError(error);
      }
    };
    loadData();
  }, [action]);

  return [data, isLoading, isError];
};
