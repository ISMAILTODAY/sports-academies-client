import { useContext } from "react";
import { AuthProvider } from "../AuthContext/AuthContext";


const AddClass = () => {

    const { user } = useContext(AuthProvider);

    const submit = (e) => {
        e.preventDefault()
        console.log(e.target)
        const form = e.target;
        const className = form.className.value;
        const instructorName = form.instructorName.value;
        const instructorEmail = form.instructorEmail.value;
        const availableSet = form.availableSet.value;
        const price = form.price.value;
        const classPhoto = form.classPhoto.files[0];
        // console.log(classPhoto)

        // console.log({ className, instructorName, instructorEmail, availableSet, price: parseInt(price), classPhoto })



        const formData = new FormData();
        formData.append('image', classPhoto)
        fetch(`https://api.imgbb.com/1/upload?key=0b14007b8ea7c907391bc3f72ea47cf2`, {
            method: 'POST',
            body: formData
        })
            .then(res => res.json())
            .then(image => {
                const classData = { className, instructorName, instructorEmail, availableSet: parseInt(availableSet), price: parseInt(price), classPhoto: image.data.display_url, status: 'pending' }

                // console.log(image.data.display_url)
                // console.log(classData)
                fetch('https://sports-academies-server.vercel.app/allclass', {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(classData)
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                    })

            })
    }

    return (
        <form onSubmit={submit} className="flex flex-col gap-3">
            <h1 className="text-center text-3xl font-semibold">Ragistration</h1>

            <input type="text" placeholder="Class name" name="className" required className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" value={user?.displayName} disabled name="instructorName" required className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" value={user?.email} disabled name="instructorEmail" required className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" placeholder="Available Set" name="availableSet" required className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="text" placeholder="Price" name="price" required className="input input-bordered input-secondary w-full max-w-xs" />

            <input type="file" name="classPhoto" required className="file-input file-input-bordered file-input-secondary w-full max-w-xs" />

            <div className="form-control mt-6">
                <button type="submit" className="btn btn-secondary">Add a Class</button>
            </div>
        </form>
    );
};

export default AddClass;