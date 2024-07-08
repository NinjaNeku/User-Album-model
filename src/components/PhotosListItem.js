import { GoTrashcan } from "react-icons/go";
import { useRemovePhotosMutation } from "../store";

function PhotosListItem({ photo }){

    const [removePhotos] = useRemovePhotosMutation()

    const handlePhotoDelete = () => {
        removePhotos(photo)
    }

    return <div className="relative cursor-pointer m-2" >
        <img className="h-20 w-30" src={photo.url} alt="random pic" />
        <div className="absolute inset-0 flex items-center justify-center hover:bg-gray-200 opacity-0 hover:opacity-80" onClick={handlePhotoDelete}>
            <GoTrashcan className="text-3xl" />
        </div>
    </div>
}

export default PhotosListItem;