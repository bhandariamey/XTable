import { useEffect, useState } from "react";
import styles from './App.module.css'


function App() {


  const data = 
  [
  
      { date: "2022-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-01", views: 100, article: "Article 1" },
  
      { date: "2023-09-02", views: 150, article: "Article 2" },
  
      { date: "2023-09-02", views: 120, article: "Article 3" },
  
      { date: "2020-09-03", views: 200, article: "Article 4" }
  
  ]

  const [givenData, setGivenData] = useState(data)

 
  const sortByDate = () => {
    const sortedData = [...givenData].sort((date1, date2) => new Date(date2.date) - new Date(date1.date));
    setGivenData(sortedData);
  }
  
const sortByViews = () => {
  const sortedData = [...givenData].sort((a,b)=>b.views - a.views)
  setGivenData(sortedData)
}
  
  
  return (
    <>
    
    {console.log(givenData)}
    <div className="App">
      <h1>Date and Views Table</h1>
      <div>
        <button onClick={sortByDate}>Sort by Date</button>
        <button onClick={sortByViews}>Sort by Views</button>
      </div>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Views</th>
            <th>Article</th>
          </tr>  
        </thead>
       <tbody>
        {givenData.map((ele)=>{
          return(<tr>
            <td>{ele.date}</td>
            <td>{ele.views}</td>
            <td>{ele.article}</td>
          </tr>)
        })}
       </tbody>

        

      </table>      
    </div></>
  );
}

export default App;
