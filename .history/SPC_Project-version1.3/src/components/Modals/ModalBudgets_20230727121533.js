import React, { useState } from 'react'
import "../../assets/styles/modal.css"
export const ModalBudgets = ({ closeModal, onSubmit, defaultValue }) => {
    const [formState, setFormState] = useState(defaultValue || {
        budgetID:"",
        budgetName:"",
        budgetDesc:"",
        amount:"",
        startDate : "",
        endDate:"",
    });

    const [errors, setErrors] = useState("")
    const validateForm = () => {
        if(formState.adoptionID && formState.childId && formState.registerDate){
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
                    <label htmlFor="budgetID">budgetID</label>
                    <input name='budgetID' value={formState.budgetID} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="budgetName">budgetName</label>
                    <input name='budgetName' value={formState.budgetName} onChange={handleChange} />
                </div>
                <div className='form-group'>
                    <label htmlFor="budgetDesc">budgetDesc</label>
                    <input name='budgetDesc' type = 'date' value={formState.budgetDesc} onChange={handleChange} />
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
