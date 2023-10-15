import { useRouter } from "next/router";

const Note = () => {
  const router = useRouter();

  const { param } = router.query;

  return <h1>Note Params {param?.join("/")}</h1>;
};

export default Note;
