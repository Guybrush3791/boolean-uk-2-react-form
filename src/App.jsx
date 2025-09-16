// import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <main className="app">
      <h1 className="title">*** Complaining form! ***</h1>
      <form className="complaint-form" action="#" method="post">
        <div className="form-grid">
          <div className="left">
            <div className="form-field">
              <label htmlFor="fullName">Full name</label>
              <input type="text" id="fullName" name="fullName" />
            </div>

            <div className="form-field">
              <label htmlFor="address">Address</label>
              <input type="text" id="address" name="address" />
            </div>

            <div className="form-field">
              <label htmlFor="phone">Phone Number</label>
              <input type="tel" id="phone" name="phone" />
            </div>

            <div className="form-field">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" />
            </div>
          </div>

          <div className="right">
            <div className="form-field">
              <label htmlFor="complaint">Write your complaint</label>
              <textarea
                id="complaint"
                name="complaint"
                rows={10}
                placeholder="You can complain here"
              ></textarea>
            </div>

            <fieldset className="form-field">
              <legend>How do you want to be contacted?</legend>
              <div className="radio-group">
                <label>
                  <input type="radio" name="contactMethod" value="phone" defaultChecked />
                  Phone
                </label>
                <label>
                  <input type="radio" name="contactMethod" value="email" />
                  Email
                </label>
                <label>
                  <input type="radio" name="contactMethod" value="slowmail" />
                  Slow Mail
                </label>
                <label>
                  <input type="radio" name="contactMethod" value="none" />
                  No contact!
                </label>
              </div>
            </fieldset>

            <div className="form-field">
              <label className="checkbox">
                <input type="checkbox" name="consent" />
                I agree you take my data, and do whatever
              </label>
            </div>

            <div className="actions">
              <button type="submit">Submit!</button>
            </div>
          </div>
        </div>
      </form>
    </main>
  )
}

export default App
