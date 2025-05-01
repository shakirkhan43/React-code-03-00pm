import { useState } from "react";
function ShowImage(){

   

    const [showImage, setShowImage] = useState(false);
    const toggleImage = () => {
        setShowImage(!showImage);
    }
    return (
        <>
        <div className="flex flex-col items-center">
            <button onClick={toggleImage} className="m-2 px-4 py-2 bg-blue-500 text-white rounded">
                {showImage ? "Hide Image" : "Show Image"}
            </button>
            <div>
                {showImage ? 
                    <img
                        src="https://media.istockphoto.com/id/1403500817/photo/the-craggies-in-the-blue-ridge-mountains.jpg?s=612x612&w=0&k=20&c=N-pGA8OClRVDzRfj_9AqANnOaDS3devZWwrQNwZuDSk="
                        alt={"image"}
                     />
                 : null}
            </div>
        </div>
        
  
        </>
    )
}

export default ShowImage
