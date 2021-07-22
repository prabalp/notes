import "./App.css";
import React, { useEffect, useState, Fragment } from "react";
import Tabletop from "tabletop";

// export async function getServerSideProps({ query }) {
//   const auth = await google.auth.getClient({
//     scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"],
//   });

//   const sheets = google.sheets({ version: "v4", auth });

//   const { id } = query;
//   const range = `Sheet1!A${id}:C${id}`;

//   const response = await sheets.spreadsheets.values.get({
//     spreadsheetId: process.env.SHEET_ID,
//     range,
//   });

//   const [title, content] = response.data.values[0];
//   console.log(title, content);

//   return {
//     props: {
//       title,
//       content,
//     },
//   };
// }

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    Tabletop.init({
      key: "18pcUI6flsTItV7_cN3FUTwDfcSEObt4qSl1JFx_IOtg",
      simpleSheet: true,
    })
      .then((data) => setData(data))
      .catch((err) => console.warn(err));
  }, []);
  return (
    <div className="App">
      {" "}
      <h1>data from google sheets</h1>
      <ul>
        {console.log(data)}
        {data.map((item, i) => (
          <Fragment key={i}>
            <li>Title - {item.Title}</li>
            <li>Content - {item.Content}</li>
            <br />
          </Fragment>
        ))}
      </ul>
    </div>
  );
}

export default App;
