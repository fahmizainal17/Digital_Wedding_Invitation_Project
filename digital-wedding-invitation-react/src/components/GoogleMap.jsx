import React from 'react';

const GoogleMap = () => {
    const mapUrl = 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3983.8335393768074!2d101.70770861476955!3d3.071900397512377!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31cc3e86f58e09ad%3A0x9d12a24cb8179f0b!2sDewan%20Kolej%20Pendeta%20Za%27ba!5e0!3m2!1sen!2smy!4v1698785466929!5m2!1sen!2smy';

    return (
        <div className="google-map">
            <h2>Wedding Location</h2>
            <iframe src={mapUrl} width="100%" height="300" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
    );
};

export default GoogleMap;
