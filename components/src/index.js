import React from "react";
import ReactDOM from "react-dom";

if (module.hot) {
  module.hot.accept();
}

function testG(){
  console.log('creating bug')
  console.log(BUG);
}
testG();

const App = () => {
  return <div>Hi there!</div>;
};

ReactDOM.render(<App />, document.querySelector("#root"));
