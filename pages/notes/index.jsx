import Link from "next/link";

export default () => {
  const notes = new Array(15)
    .fill(1)
    .map((_, i) => ({ id: i, title: `Note ${i}` }));

  return (
    <>
      <h1>Notes</h1>
      {notes.map(({ id, title }) => (
        <Link
          href="/notes/[id]"
          as={`/notes/${id ?? 1}`}
          legacyBehavior
          key={id}
        >
          <a
            style={{
              display: "block",
            }}
          >
            {title}
          </a>
        </Link>
      ))}
    </>
  );
};
