import React from 'react';


function App() {
  return (
    <div>
      {/* <div className="header">
        Phone directory
    </div>
      <button>Add</button>
      <div>
        <span>Name</span><br></br>
        <span>Phone</span>
      </div> */}
      <label htmlFor="name">Name</label>
      <input id="name" type="text" placeholder="Type in Here" defaultValue="Dheeraj"/>
    </div>
  );
}

export default App;
