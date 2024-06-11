import React from 'react';
import iconone from '../../assets/homepageAssets/abouteleven.png';
import icontwo from '../../assets/homepageAssets/aboutten.png';
import iconthree from '../../assets/homepageAssets/abouteight.png';
import iconfour from '../../assets/homepageAssets/aboutthree.png';
import contactone from '../../assets/homepageAssets/aboutsix.png'
import contacttwo from '../../assets/homepageAssets/aboutfive.png'
import contactthreee from '../../assets/homepageAssets/aboutfour.png'
import contactfive from '../../assets/homepageAssets/aboutseven.png'
import contactfour from '../../assets/homepageAssets/abouttwo.png'
import contactlast from '../../assets/homepageAssets/aboutone.png'




const Traveller = () => {
  return (
    <div className="about_traveller">
      <div className="stats-section">
        <div className="stat-item">
          <img src={iconone.src}></img>
            <div className='both-v-l'>
          <div className="stat-value">0.7k</div>
          <div className="stat-label">Happy Traveler</div>
          </div>
        </div>
        <div className="stat-item">
        <img src={icontwo.src}></img>
        <div className='both-v-l'>
          <div className="stat-value">1.2k +</div>
          <div className="stat-label">Tours Success</div>
        </div>
        </div>
        <div className="stat-item">
        <img src={iconthree.src}></img>
        <div className='both-v-l'>
          <div className="stat-value">0.95%</div>
          <div className="stat-label">Positives Review</div>
        </div>
        </div>
        <div className="stat-item">
        <img src={iconfour.src}></img>
        <div className='both-v-l'>
          <div className="stat-value">0.10</div>
          <div className="stat-label">Travel Guide</div>
        </div>
        </div>
      </div>
  
  <div className='who-feature'>
      <div className="who-we-are-section">
      <h4>Who we are</h4> 
        <h2>Why Himalayan Monks Is Best</h2>
        <p>If you have come this far it means that we share the same passion. We travel to discover new places, hear stories, live experiences and admire incredible natural landscapes. Our blog was born in 2024 to tell the story of our trips. Moments, people and places that marked our lives.</p>
      </div>

      <div className="features-section">
        <div className="feature-item">
          <div className="feature-icon"><img src={contactone.src}/></div>
          <div className='both-w-c'>
          <div className="feature-title">Worldwide Coverage</div>
          <div className="feature-description">Curabitur convallis enim atnora ullamcorper sagittis.</div>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><img src={contacttwo.src}/></div>
          <div className='both-w-c'>
          <div className="feature-title">Competitive Pricing</div>
          <div className="feature-description">Burabitur convallis enim atnora. Morbi nug scelerisque tor thana.</div>
        </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><img src={contactthreee.src}/></div>
          <div className='both-w-c'>
          <div className="feature-title">Fast Booking</div>
          <div className="feature-description">Fermentum etior quis maximum. Etiam urnan posuere convallis.</div>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><img src={contactfive.src}/></div>
          <div className='both-w-c'>
          <div className="feature-title">Guided Tours</div>
          <div className="feature-description">Pellenques venenatis egetest dom Proin velgorat etit porttitor metus convallis.</div>
          </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><img src={contactfour.src}/></div>
          <div className='both-w-c'>
          <div className="feature-title">Best Support 24/7</div>
          <div className="feature-description">Sed venenatis musris nec nulla euismod, accornum varius lectus viverra oncen.</div>
        </div>
        </div>
        <div className="feature-item">
          <div className="feature-icon"><img src={contactlast.src}/></div>
          <div className='both-w-c'>
          <div className="feature-title">Ultimate Flexibility</div>
          <div className="feature-description">Duis leo sapien, lacinia utorrent efficitur utom suscipit quis nulla Sed auctor eu</div>
        </div>
        </div>  
      </div>
    </div>
    </div>
  );
};

export default Traveller;
