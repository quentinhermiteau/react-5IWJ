export default function Home() {
  const random = Math.floor(Math.random() * 2) + 1;
  const isTrue = true;
  const isFalse = false;

  return (
    <>
      {random === 1 ? (
        <p>Odd</p>
      ) : (
        <p>Even</p>
      )}

      {isTrue && !isFalse && (
        <p>IS TRUE</p>
      )}
    </>
  )
}
