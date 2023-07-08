import React, { useEffect, useState } from "react";
import axios from "axios";

const ApiFetcher = ({ url }) => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(url);
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching API data:", error);
      }
    };

    fetchData();
  }, [url]);

  return (
    <div>
      {loading ? (
        <div>Loading...</div>
      ) : data ? (
        <div>{JSON.stringify(data)}</div>
      ) : (
        <div>No data available</div>
      )}
    </div>
  );
};

export default ApiFetcher;
