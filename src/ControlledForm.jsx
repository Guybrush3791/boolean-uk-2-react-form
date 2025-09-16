import { useState } from 'react'
import './App.css';

function ControlledForm() {
  
    // complete form status variable
    const [formData, setFormData] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
        email: '',
        complaint: '',
        contactMethod: '',
        dataConsent: false,
    });
    
    const handleContactTypeClick = (e) => {
        setFormData(oldData => ({
            ...oldData,
            contactMethod: e.target.value
        }))
    }

    // create an handle submit function that will
    // pack all input data and log it to the console
    const handleSubmit = (e) => {
        e.preventDefault();

        const formDataToSubmit = {
            ...formData
        };

        console.log(JSON.stringify(formDataToSubmit, null, 2));
    }

    return (
        <div className="app">
        <h1 className="title">Complaining form!</h1>

        <form className="complaint-form" onSubmit={handleSubmit}>
            <div className="form-grid two-columns">
            <div>
                <div className="form-field">
                <label htmlFor="fullName">Full name</label>
                <input 
                    type="text" 
                    id="fullName" 
                    name="fullName" 
                    value={formData.fullName}
                    onChange={(e) => setFormData(oldData => ({
                        ...oldData,
                        fullName: e.target.value
                    }))}
                    />
                </div>
                
                <div className="form-field">
                <label htmlFor="address">Address</label>
                <input 
                    type="text" 
                    id="address" 
                    name="address" 
                    value={formData.address}
                    onChange={(e) => setFormData(oldData => ({
                        ...oldData,
                        address: e.target.value
                    }))}
                />
                </div>
                
                <div className="form-field">
                <label htmlFor="phoneNumber">Phone Number</label>
                <input 
                    type="tel" 
                    id="phoneNumber" 
                    name="phoneNumber" 
                    value={formData.phoneNumber}
                    onChange={(e) => setFormData(oldData => ({
                        ...oldData,
                        phoneNumber: e.target.value
                    }))}
                />
                </div>
                
                <div className="form-field">
                <label htmlFor="email">Email</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={(e) => setFormData(oldData => ({
                        ...oldData,
                        email: e.target.value
                    }))}
                />
                </div>
            </div>
            
            <div>
                <div className="form-field">
                <label htmlFor="complaint">Write your complaint</label>
                <textarea 
                    id="complaint" 
                    name="complaint" 
                    rows="8" 
                    value={formData.complaint}
                    onChange={(e) => setFormData(oldData => ({
                        ...oldData,
                        complaint: e.target.value
                    }))}
                ></textarea>
                </div>
                
                <fieldset className="form-field">
                <legend>How do you want to be contacted?</legend>
                <div className="radio-group">
                    <label>
                    <input 
                        type="radio" 
                        name="contactMethod" 
                        value="phone" 
                        checked={formData.contactMethod === 'phone'}
                        onChange={handleContactTypeClick}
                    />
                    Phone
                    </label>
                    <label>
                    <input 
                        type="radio" 
                        name="contactMethod" 
                        value="email" 
                        checked={formData.contactMethod === 'email'}
                        onChange={handleContactTypeClick}
                    />
                    Email
                    </label>
                    <label>
                    <input 
                        type="radio" 
                        name="contactMethod" 
                        value="slowMail" 
                        checked={formData.contactMethod === 'slowMail'}
                        onChange={handleContactTypeClick}
                    />
                    Slow Mail
                    </label>
                    <label>
                    <input 
                        type="radio" 
                        name="contactMethod" 
                        value="noContact" 
                        checked={formData.contactMethod === 'noContact'}
                        onChange={handleContactTypeClick}
                    />
                    No contact!
                    </label>
                </div>
                </fieldset>
                
                <div className="form-field">
                <label className="checkbox">
                    <input 
                        type="checkbox" 
                        name="dataConsent" 
                        checked={formData.dataConsent}
                        onChange={(e) => setFormData(oldData => ({
                            ...oldData,
                            dataConsent: e.target.checked
                        }))}
                    />
                    I agree you take my data, and do whatever
                </label>
                </div>
                
                <div className="actions">
                <button type="submit">Submit!</button>
                </div>
            </div>
            </div>
        </form>
        </div>
    )
}

export default ControlledForm