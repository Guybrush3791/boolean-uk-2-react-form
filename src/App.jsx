// import { useState } from 'react'
import './App.css'

function App() {
  
  return (
    <div className="app">
      <h1 className="title">Complaining form!</h1>
      
      <form className="complaint-form">
        <div className="form-grid two-columns">
          <div>
            <div className="form-field">
              <label htmlFor="fullName">Full name</label>
              <input type="text" id="fullName" name="fullName" />
            </div>
            
            <div className="form-field">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
            </div>
            
            <div className="form-field">
              <label htmlFor="phoneNumber">Phone Number</label>
              <input type="tel" id="phoneNumber" name="phoneNumber" />
            </div>
            
            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>
          
          <div>
            <div className="form-field">
              <label htmlFor="complaint">Write your complaint</label>
              <textarea 
                id="complaint" 
                name="complaint" 
                rows="8" 
                placeholder="You can complain here"
              ></textarea>
            </div>
            
            <fieldset className="form-field">
              <legend>How do you want to be contacted?</legend>
              <div className="radio-group">
                <label>
                  <input type="radio" name="contactMethod" value="phone" />
                  Phone
                </label>
                <label>
                  <input type="radio" name="contactMethod" value="email" />
                  Email
                </label>
                <label>
                  <input type="radio" name="contactMethod" value="slowMail" />
                  Slow Mail
                </label>
                <label>
                  <input type="radio" name="contactMethod" value="noContact" />
                  No contact!
                </label>
              </div>
            </fieldset>
            
            <div className="form-field">
              <label className="checkbox">
                <input type="checkbox" name="dataConsent" />
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

export default App
