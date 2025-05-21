import React from "react";
import Counter from'./Counter.jsx';
import ThemeToggler from'./ThemeToggler.jsx';

function App () {
  return(
    <div style={{textAlign: "center", padding: "2rem"}}>
      <ThemeToggler/>
      <Counter/>
    </div>
  )
}

export default App;