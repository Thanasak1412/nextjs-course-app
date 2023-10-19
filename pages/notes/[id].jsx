import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";

export default () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <h1>Note: {id} </h1>
      <Link href="/notes" legacyBehavior>
        <a>Notes</a>
      </Link>
    </>
  );
};
