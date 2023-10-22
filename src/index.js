import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import {add,sub,mult,div} from "./Calc.jsx";
import "./index.css";
ReactDOM.render(
<>
<App/>
<div className="div-3">
<ol>
<li>The Sum Of Two Numbers Is {add(40,34)}</li>
<li>The Substract Of Two Numbers Is {sub(40,3)}</li>
<li>The multiply Of Two Numbers Is {mult(40,3)}</li>
<li>The division Of Two Numbers Is {div(40,3)}</li>
</ol>
</div>
</>,document.getElementById("root")

);