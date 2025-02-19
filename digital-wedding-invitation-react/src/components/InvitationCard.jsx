import React from 'react';
import './InvitationCard.css';

const InvitationCard = () => {
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
                <p className="message">
                    "Doa dan harapan kami, agar perkahwinan ini diberkati oleh Allah SWT, penuh cinta kasih, kebahagiaan, dan keharmonian sepanjang zaman. Mari kita sama-sama merayakan momen istimewa ini bersama keluarga dan rakan-rakan yang terkasih."
                </p>
                <p className="quran-verse">
                    <strong>"Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia menciptakan pasangan-pasangan untukmu dari jenismu sendiri, supaya kamu cenderung dan merasa tenteram kepadanya, dan dijadikan-Nya di antaramu rasa kasih dan sayang."</strong>
                    <br />
                    (Surah Ar-Rum, 30:21)
                </p>
                <button className="rsvp-button" onClick={() => alert('Terima kasih kerana RSVP! Kami menantikan kehadiran anda di majlis perkahwinan kami.')}>
                    RSVP
                </button>
            </div>
        </div>
    );
};

export default InvitationCard;
