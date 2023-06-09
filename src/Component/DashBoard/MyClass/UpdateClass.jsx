import { useContext } from 'react';
import { AuthProvider } from '../../AuthContext/AuthContext';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const UpdateClass = () => {
    const { id } = useParams()


    const { user } = useContext(AuthProvider)

    const submit = (e) => {
        e.preventDefault()
        const form = e.target;
        const className = form.className.value;
        const availableSet = form.availableSet.value;
        const price = form.price.value;
        const classPhoto = form.classPhoto.files[0];

        if (classPhoto) {

            const formData = new FormData();
            formData.append('image', classPhoto)
            fetch(`https://api.imgbb.com/1/upload?key=0b14007b8ea7c907391bc3f72ea47cf2`, {
                method: 'POST',
                body: formData
            })
                .then(res => res.json())
                .then(image => {
                    const updateClass = { className, availableSet: parseInt(availableSet), price: parseInt(price), classPhoto: image.data.display_url }

                    fetch(`https://sports-academies-server.vercel.app/allclass/${id}`, {
                        method: 'PATCH',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify(updateClass)
                    })
                        .then(res => res.json())
                        .then((data) => {
                            if (data.modifiedCount > 0) {
                                Swal.fire({
                                    position: 'top-end',
                                    icon: 'success',
                                    title: 'Updated!',
                                    showConfirmButton: false,
                                    timer: 1500
                                })
                            }

                        })

                })
        }
        else {
            const updateClass = { className, availableSet: parseInt(availableSet), price: parseInt(price) }


            fetch(`https://sports-academies-server.vercel.app/allclass/${id}`, {
                method: 'PATCH',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(updateClass)
            })
                .then(res => res.json())
                .then((data) => {
                    if (data.modifiedCount > 0) {
                        Swal.fire({
                            position: 'top-end',
                            icon: 'success',
                            title: 'Updated!',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }

                })
        }


    }

    return (
        <form onSubmit={submit} className="flex flex-col gap-3">
            <h1 className="text-center text-3xl font-semibold">Update</h1>

            <input type="text" placeholder="Class name" name="className" className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" value={user?.displayName} disabled name="instructorName" className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" value={user?.email} disabled name="instructorEmail" className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" placeholder="Available Set" name="availableSet" className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" placeholder="Price" name="price" className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="file" name="classPhoto" className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />

            <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">Add a Class</button>
            </div>
        </form>
    );
};

export default UpdateClass;