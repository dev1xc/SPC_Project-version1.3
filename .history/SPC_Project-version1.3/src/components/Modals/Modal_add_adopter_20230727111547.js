import React, { useState } from 'react'
import "../../assets/styles/modal.css"
export const ModalAdopters = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        citizen_id: "",
        adopter_id: "",
        birthday: "",
        phoneNumber:"",
        email:"",
        nation:"",
        occupation:"",
        income:"",
        relationship:"",
        status: "live",
    });

    const [errors, setErrors] = useState("")
    const validateForm = () => {
        if(formState.username && formState.password && formState.description && formState.status){
            setErrors("")
            return true;
        } else {
            let errorFields = [];
            for(const [key, value] of Object.entries(formState)){
                if(!value){
                    errorFields.push(key)
                }
            }
            setErrors(errorFields.join(", "));
            return false;
        }
    }
    // update danh sách 
    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value
        })
    }
    // submit account vừa thêm
    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validateForm()) return;
        onSubmit(formState);
        closeModal();
    }

    
return (
    <div className='modal-container' 
    onClick={(e) => {
        if(e.target.className === "modal-container")
            closeModal();
    }}>
        <div className="modal">
            <form>
                <div className='form-group'>
                    <label htmlFor="citizen_id">citizen_id</label>
                    <input name='citizen_id' value={formState.citizen_id} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="adopter_id">adopter_id</label>
                    <input name='adopter_id' value={formState.adopter_id} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="birthday">birthday</label>
                    <input name='birthday' type='date' value={formState.birthday} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="phoneNumber">Phone Number</label>
                    <input name='phoneNumber' value={formState.phoneNumber} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="email">Phone Number</label>
                    <input name='email' value={formState.email} onChange={handleChange} />
                </div>

                <div className='form-group'>
                    <label htmlFor="status">Trạng thái</label>
                    <select name='status' value={formState.status} onChange={handleChange}>
                        <option value="live">Live</option>
                        <option value="off">Off</option>
                        <option value="error">Error</option>
                    </select>
                </div>
                {errors && <div className='error'>{`Vui lòng điền: ${errors}`}</div>}
                <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>
            </form>
        </div>
    </div>
)
}
