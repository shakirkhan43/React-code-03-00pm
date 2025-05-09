
import Data from './Data.json';
function DataJson(){
    return(
        <>
            {Data.map((user , index) => {
                return (
                    <div key={index}>
                        <h1>Name is : {user.name}</h1>
                        <p>Email : {user.email}</p>
                        <p>City : {user.address.city}</p>
                    </div>
                )
            })}
        </>
    )
}

export default DataJson;