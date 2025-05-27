function City({dataValue}){
    return(
        <>
        {/* <p>My name : {value.name}</p>
        <p>My age : {value.age}</p>
        <p>My city : {value.city}</p> */}

<h1>My name is {dataValue.name}</h1>
<p>My age is : {dataValue.age}</p>

        </>
    )
}

export default City;