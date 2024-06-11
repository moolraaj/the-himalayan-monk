// components/MapEmbed.js
import React from 'react';

const MapEmbed = () => {
    return (
        <div style={{ width: '100%', height: '450px' }}>
            <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3417.261888408641!2d77.18041387556259!3d31.074641474421366!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8b786154f8baad31%3A0x97626bf9fbffadd!2sSpark%20Web%20Solutions!5e0!3m2!1sen!2sin!4v1718018050314!5m2!1sen!2sin" 
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
