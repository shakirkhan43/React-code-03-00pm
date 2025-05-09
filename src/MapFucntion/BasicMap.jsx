function BasicMap(){


//     const numbers = [1, 2, 3, 4];

//    const double =  numbers.map( (num) => num * 3)
//    console.log(double);
   
 const fruites = [ "apple", "banana", "orange", "mango"];

   


    return(
        <>
        {
            fruites.map( (frute , index ) => {
                return(
                    <div key={index}>
                        <h1>{index} - {frute}</h1>
                    </div>
                )
            })
        }
        </>
    )
}

export default BasicMap;