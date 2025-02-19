import React, { useState } from 'react';
import './RSVPForm.css';

const RSVPForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        phoneNumber: '',
        email: '',
        attendance: 'yes',
        numberOfPeople: 1,
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Submit the form data to Google Sheets
        submitToGoogleSheets(formData);
    };

    const submitToGoogleSheets = (data) => {
        // Replace with your Google Sheets API endpoint
        const scriptURL = 'YOUR_GOOGLE_SCRIPT_URL';
        fetch(scriptURL, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Terima kasih kerana RSVP! Kami menantikan kehadiran anda di majlis perkahwinan kami.');
        })
        .catch((error) => {
            console.error('Error:', error);
        });
    };

    return (
        <div className="rsvp-form">
            <h2>RSVP Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label>Name:</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Phone Number:</label>
                    <input type="text" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Email:</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label>Attendance:</label>
                    <select name="attendance" value={formData.attendance} onChange={handleChange} required>
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                {formData.attendance === 'yes' && (
                    <div className="form-group">
                        <label>Number of People:</label>
                        <input type="number" name="numberOfPeople" value={formData.numberOfPeople} onChange={handleChange} required />
                    </div>
                )}
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default RSVPForm;
