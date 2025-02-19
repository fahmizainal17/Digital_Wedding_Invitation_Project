import React, { useState } from 'react';
import './InvitationCard.css';

const InvitationCard = () => {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        attendance: 'yes',
        numberOfPeople: 1
    });

    const [comment, setComment] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission (e.g., send data to Google Spreadsheet)
        console.log('Form submitted:', formData);
        // Reset the form
        setFormData({
            name: '',
            phone: '',
            email: '',
            attendance: 'yes',
            numberOfPeople: 1
        });
    };

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        // Handle comment submission (e.g., send data to Google Spreadsheet)
        console.log('Comment submitted:', comment);
        // Reset the comment
        setComment('');
    };

    return (
        <div className="invitation-card">
            <div className="card-header">
                <img src="/images/wedding_image.jpg" alt="Gambar Perkahwinan" className="wedding-image" />
                <h1 className="card-title">Jemputan Kahwin</h1>
            </div>
            <div className="card-body">
                <p className="greeting">
                    Dengan mengharapkan rahmat dan redha Allah SWT, kami dengan penuh kebahagiaan mengumumkan perkahwinan anak-anak kami:
                </p>
                <h2 className="bride-groom">
                    <strong>Muhammad Fahmi bin Zainal</strong>
                    <span className="and-symbol"> & </span>
                    <strong>Sifulan Binti Sifulan</strong>
                </h2>
                <p className="details">
                    <strong>Tarikh:</strong> 31 Ogos 20XX<br />
                    <strong>Masa:</strong> 11:00 Pagi - 4:00 Petang<br />
                    <strong>Tempat:</strong> Dewan Kolej Pendeta Za'ba, 43400 Seri Kembangan, Selangor
                </p>
                <button className="map-button" onClick={() => window.open('https://www.google.com/maps?q=Dewan+Kolej+Pendeta+Za%27ba,+43400+Seri+Kembangan,+Selangor', '_blank')}>
                    Lihat Peta
                </button>
                <p className="message">
                    "Doa dan harapan kami, agar perkahwinan ini diberkati oleh Allah SWT, penuh cinta kasih, kebahagiaan, dan keharmonian sepanjang zaman. Mari kita sama-sama merayakan momen istimewa ini bersama keluarga dan rakan-rakan yang terkasih."
                </p>
                <p className="quran-verse">
                    <strong>"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."</strong>
                    <br />
                    (Surah Ar-Rum, 30:21)
                </p>
                <div className="rsvp-section">
                    <form onSubmit={handleSubmit} className="rsvp-form">
                        <h2>RSVP</h2>
                        <div className="form-group">
                            <label htmlFor="name">Nama</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                placeholder="Nama"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="phone">No. Telefon</label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={formData.phone}
                                onChange={handleChange}
                                placeholder="No. Telefon"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">E-mel</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                placeholder="E-mel"
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="attendance">Kehadiran</label>
                            <select
                                id="attendance"
                                name="attendance"
                                value={formData.attendance}
                                onChange={handleChange}
                                required
                            >
                                <option value="yes">Hadir</option>
                                <option value="no">Tidak Hadir</option>
                            </select>
                        </div>
                        {formData.attendance === 'yes' && (
                            <div className="form-group">
                                <label htmlFor="numberOfPeople">Bilangan Orang</label>
                                <input
                                    type="number"
                                    id="numberOfPeople"
                                    name="numberOfPeople"
                                    value={formData.numberOfPeople}
                                    onChange={handleChange}
                                    placeholder="Bilangan Orang"
                                    required
                                />
                            </div>
                        )}
                        <button type="submit" className="rsvp-button">
                            RSVP
                        </button>
                    </form>
                </div>
                <div className="comment-section">
                    <h3>Ucapan dan Doa Kahwin</h3>
                    <form onSubmit={handleCommentSubmit} className="comment-form">
                        <textarea
                            value={comment}
                            onChange={(e) => setComment(e.target.value)}
                            placeholder="Tinggalkan ucapan atau doa anda di sini..."
                            required
                        ></textarea>
                        <button type="submit" className="comment-button">
                            Hantar
                        </button>
                    </form>
                </div>
                <div className="qr-code-section">
                    <h3>Kod QR untuk Hadiah</h3>
                    <p>Silakan skan kod QR di bawah untuk memberikan hadiah kepada pasangan pengantin.</p>
                    <img src="/images/qr_code.jpeg" alt="Kod QR Hadiah" className="qr-code" />
                </div>
            </div>
        </div>
    );
};

export default InvitationCard;
