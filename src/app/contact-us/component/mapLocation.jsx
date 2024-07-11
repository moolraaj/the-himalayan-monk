// components/MapEmbed.js
import React from 'react';

const MapEmbed = () => {
    return (
        <div style={{ width: '100%', height: '450px' }}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3375.2490270436156!2d77.17988537626228!3d32.22446061201796!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390489f127adfaa9%3A0x275e12c0b7f20d79!2sThe%20Himalayan%20Monks!5e0!3m2!1sen!2sin!4v1720705028455!5m2!1sen!2sin" 
                width="600" 
                height="450" 
                style={{ border: 0, width: '100%                                                                                                                                                                                                                                                         ', height: '100%' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
        </div>
    );
};

export default MapEmbed;
