import City from "./City";
import Navbar from "./Navbar";
function PropsData({value}){
    // const city = "Indore";
    return(
        <>
       {/* <h1>My name is : {props.name}</h1>
       <h2>My age is : {props.age}</h2> */}

       <h1>My name is : {value.name}</h1>
       <h2>My age is : {value.age}</h2>
       <h1>My city is : {value.city}</h1>
       <h4>My gander is : {value.gander}</h4>

       {/* <City value={city}/> */}

       <City value={{name: "Arpit Kumar" , age : "25" , city : "Ujjain"}}/>

       <City dataValue={value} />
       <Navbar />
        </>
    )
}

export default PropsData;