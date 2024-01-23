//Data stuff
async function getBooks(subject) {
  const response = await fetch(
    "https://www.googleapis.com/books/v1/volumes?q=subject:${subject}"
  );

  const books = response.json();

  return books;
}

function templ() {
  getBooks("Horror").then((val) => {
    console.log(val.items);
  });
  return (
    <>
      <div className="Container"></div>
    </>
  );
}

export default templ;
