import { useState, useEffect } from "react";

async function getDataJson(subject, startIndex, maxResults) {
  startIndex = startIndex == null ? 0 : startIndex;
  maxResults = maxResults == null ? 10 : maxResults;
  const url = `https://www.googleapis.com/books/v1/volumes?q=subject:${subject}&startIndex=${startIndex}&maxResults=${maxResults}`;
  try {
    const response = await fetch(url);
    return response.json();
  } catch (e) {
    alert(
      `Couldn't fetch data from the API. Please check you internet connection and try again later.\n${e}`
    );
    return `Null`;
  }
}

function Layout() {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    getDataJson("Horror", 0, 10).then((apiData) => {
      var tempBooks = [];
      if (apiData == "Null") {
        return tempBooks;
      }
      apiData.items.map((val) => tempBooks.push(val));
      setBooks(tempBooks);
    });
  }, []);

  if (books.length > 0) {
    const stuff = () => {
      var tempStuff = {
        Title: [],
        Description: [],
        Id: [],
      };
      books.forEach((book) => {
        tempStuff.Title.push(<p>{book["volumeInfo"]["title"]}</p>);
        tempStuff.Description.push(
          <p className="desc">{book["volumeInfo"]["description"]}</p>
        );
        tempStuff.Id.push(<p>{book["id"]}</p>);
      });

      return tempStuff;
    };

    const jhinga = () => {
      let _titles = stuff().Title;
      let _descs = stuff().Description;
      let _ids = stuff().Id;

      var idk = [];

      for (let i = 0; i < _ids.length; i++) {
        idk.push(
          <>
            <li
              key={`${_ids[i]} ${0}`}
              style={{ display: "inline-block", padding: "2%" }}
            >
              <ol>
                <li key={`${_ids[i]} ${1}`}>{_titles[i]}</li>
                <li key={`${_ids[i]} ${2}`}>{_descs[i]}</li>
                <li key={`${_ids[i]} ${3}`}>{_ids[i]}</li>
              </ol>
            </li>
          </>
        );
      }

      return idk;
    };

    return (
      <>
        <ul>{jhinga()}</ul>
      </>
    );
  } else {
    return <>{<p>Loading Books</p>}</>;
  }
}

export default Layout;
