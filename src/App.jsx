import React,{useState} from "react";

function App(){
    const a=" Thank's For Visit my Page"
    const CurrentDate = new Date().toLocaleDateString();
    const Currenttime = new Date().toLocaleTimeString();
    const img1="https://picsum.photos/200/300"
    const img2="https://picsum.photos/250/200"
    const img3="https://picsum.photos/300/300"
    
    const heading= {
         
            color: "#fa9191",
            textAlign: "center",
            textTransform: "capitalized",
            fontWeight: "bold",
            textShadow: "0px 2px 5x black",
            margin: "10px 0px",
            fontFamily: "Verdana, Geneva, Tahoma, sansSerif"
    };
    let curDate= new Date();
    curDate=curDate.getHours();
    let greetings={};
    const cssStyle={};
    
    if(curDate>=1&&curDate<12){
    greetings="GOOD MORNING";
    cssStyle.color="#fb9191";
    } else if (curDate>=12 &&curDate<19){
        greetings="GOOD AFTERNON";
        cssStyle.color="Orange";
    }else {
    
        greetings="GOOD EVENING";    
        cssStyle.color="Black";
    };
//Code for Form Type

const App=()=>{
    const [name,setName]=useState("");
    const[fullName,setFullName]=useState("");

    const inputEvent=(event)=>{
console.log(event.target.value);
setName(event.target.value)

    };

return (
<>
<h1 style={{ textAlign: "center"}}>Hello Sir,<span style={cssStyle}>{greetings}</span></h1>
<h2 className="h2">Welcome To My Page</h2>
<h3 style={heading}>Hello My Friends,{a}  </h3>
<p className='p1'>Current Date is = {CurrentDate}</p>
<p className='p2'>Current Time is = {Currenttime}</p>
<div className="div_img">
<img src={img1} />
<img src={img2} />
<img src={img3} />
</div>
<div>
    <h1>hello{fullName}</h1>
    <input 
    type="text"
    placeholder="Enter Your Name"
    onChange={inputEvent} 
        value={name}
    />
    <button onClick={onsubmit}>Click Me </button>
</div>
</>
);
}
export default App;