import { useCallback, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  const [message, setMessage] = useState("");

  const fetchData = useCallback(async () => {
    fetch("/api/user?name=john")
      .then((res) => res.json())
      .then((data) => {
        setMessage(data.message);
      })
      .catch((error) => {
        console.error("Error => ", error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1>Note: {id} </h1>
      <h2>Message: {message}</h2>
      <Link href="/notes">
        <a>Notes</a>
      </Link>
    </>
  );
};
