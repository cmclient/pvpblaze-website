import { Badge, Loading } from "@nextui-org/react";
import { useState, useEffect } from "react";

export const StatusIcon = () => {
  const [playerCount, setPlayerCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPlayerCount = () => {
      const apiUrl = "https://mcapi.us/server/status?ip=pvpblaze.net";

      fetch(apiUrl)
        .then((response) => {
          if (!response.ok) {
            throw new Error("Failed to connect to the server");
          }
          return response.json();
        })
        .then((data) => {
          if (data.status === 'error') {
            throw new Error("Failed to connect to the server");
          }
          setLoading(false);
          setPlayerCount(data.players.now);
        })
        .catch((error) => {
          console.error("Error fetching player count:", error);
          setError(error.message);
        });
    };

    // Fetch initially
    fetchPlayerCount();

    // Fetch every 10 seconds
    const intervalId = setInterval(fetchPlayerCount, 10000);

    // Cleanup interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  if (error) {
    return <Badge color="error">Server offline</Badge>;
  }

  if (loading) {
    return <Loading type="gradient"/>
  }

  return (
    <Badge color="primary">Online {playerCount} player{playerCount !== 1 ? 's' : ''}</Badge>
  );
};
