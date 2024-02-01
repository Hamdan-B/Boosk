import { signal, effect, computed } from "@preact/signals-react";
import { useState, useEffect } from "react";

export default function ExamplePage() {
  const [urlStuff, setUrlStuff] = useState({
    category: "Fiction",
    startIndex: 0,
    maxResults: 20,
  });

  const [books, setBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    setLoading(true);
    setError(false);
    setBooks([]);

    const controller = new AbortController();

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=subject:${urlStuff.category}&startIndex=${urlStuff.startIndex}&maxResults=${urlStuff.maxResults}`,
      {
        signal: controller.signal,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        setError(false);
        setBooks(data);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));

    return () => controller.abort();
  }, [urlStuff]);

  if (loading) return <p>Loading....</p>;
  if (error) return <p>Error</p>;

  function changeURLStuff() {
    setUrlStuff({ ...urlStuff, category: "Horror" });
    console.log(urlStuff);
  }

  return (
    <>
      <button type="button" onClick={changeURLStuff}>
        CLICK
      </button>
      <h1>Books</h1>
      <ul style={{ listStyleType: "none" }}>
        {books.items.map((book) => (
          <li
            key={book.id}
            style={{
              padding: "1%",
              float: "left",
              backgroundColor: "black",
              border: "solid 2px white",
              width: "12%",
            }}
          >
            <img src={book.volumeInfo.imageLinks.thumbnail} alt="Thumbnail" />
            <div>{book.volumeInfo.title}</div>
            <a
              href={book.volumeInfo.canonicalVolumeLink
                .toString()
                .replace(".html?hl=&id=", "/")
                .replace("about", "edition")}
              target="_blank"
            >
              Buy
            </a>
          </li>
        ))}
      </ul>
    </>
  );
}
