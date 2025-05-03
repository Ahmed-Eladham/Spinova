const content = {
  'Welcome to Spinova': `
    <div class="home-content">
      <div class="home-video-container">
        <video class="content-video" controls poster="logo.png">
          <source src="Spinova.mp4" type="video/mp4">
          Your browser does not support the video tag.
        </video>
        <p class="video-caption">Click to play platform demonstration</p>
      </div>
    </div>
    <div class="logo">
      <img src="logo.png" alt="Spinova Logo" />
    </div>
  `,
  'Blood Information': `
    <div class="blood-article">
      <h2>Understanding Blood Types</h2>
      <div class="blood-type-section">
        <img src="blood-types-chart.png" alt="Blood Type Compatibility Chart" class="blood-img">
        <div class="blood-type-content">
          <p>The ABO blood group system classifies blood into 4 main types:</p>
          <ul class="blood-list">
            <li><strong>Type A:</strong> A antigens on red cells, anti-B antibodies in plasma</li>
            <li><strong>Type B:</strong> B antigens on red cells, anti-A antibodies in plasma</li>
            <li><strong>Type AB:</strong> Both A and B antigens, no antibodies (universal recipient)</li>
            <li><strong>Type O:</strong> No antigens, both antibodies (universal donor)</li>
          </ul>
          <img src="blood-cells.png" alt="Blood Components" class="blood-img mobile-full">
          <p class="rh-factor">The Rh factor (+/-) is another important antigen present in 85% of humans.</p>
        </div>
      </div>
      <h2>Blood Test Results Interpretation</h2>
      <div class="test-results">
        <div class="test-card">
          <img src="cbc-test.png" alt="Complete Blood Count" class="test-icon">
          <h3>CBC (Complete Blood Count)</h3>
          <ul>
            <li><strong>Hemoglobin:</strong> Men 13.8-17.2 g/dL, Women 12.1-15.1 g/dL</li>
            <li><strong>WBC:</strong> 4,500-11,000 cells/μL</li>
            <li><strong>Platelets:</strong> 150,000-450,000/μL</li>
          </ul>
        </div>
        <div class="test-card">
          <img src="lipid-test.png" alt="Lipid Panel" class="test-icon">
          <h3>Lipid Panel</h3>
          <ul>
            <li><strong>Total Cholesterol:</strong> &lt;200 mg/dL</li>
            <li><strong>LDL:</strong> &lt;100 mg/dL optimal</li>
            <li><strong>HDL:</strong> &gt;60 mg/dL protective</li>
          </ul>
        </div>
        <div class="test-card">
          <img src="glucose-test.png" alt="Blood Glucose" class="test-icon">
          <h3>Glucose Levels</h3>
          <ul>
            <li><strong>Fasting:</strong> 70-99 mg/dL</li>
            <li><strong>2hr Postprandial:</strong> &lt;140 mg/dL</li>
            <li><strong>A1C:</strong> &lt;5.7% normal</li>
          </ul>
        </div>
      </div>
      <div class="blood-compatibility">
        <h3>Blood Type Compatibility</h3>
        <img src="compatibility-chart.png" alt="Blood Donation Compatibility" class="compatibility-chart">
        <table class="compatibility-table">
          <tr><th>Donor Type</th><th>Can Donate To</th></tr>
          <tr><td>A+</td><td>A+, AB+</td></tr>
          <tr><td>O+</td><td>O+, A+, B+, AB+</td></tr>
          <tr><td>B-</td><td>B-, B+, AB-, AB+</td></tr>
          <tr><td>AB+</td><td>AB+ only</td></tr>
        </table>
      </div>
    </div>
    <div class="logo">
      <img src="logo.png" alt="Spinova Logo" />
    </div>
  `,
  'User Manual': `
    <div class="manual-content">
      <img src="manual.png" class="manual-img" alt="User Manual Diagram">
    </div>
    <div class="logo">
      <img src="logo.png" alt="Spinova Logo" />
    </div>
  `,
  'About Us': `
    <div class="about-content">
      <p>We are a group of engineering students aiming to harness technology in the service of the medical field.</p>
      <p>We believe that integrating microelectronics and artificial intelligence can bring a qualitative leap in healthcare, especially in low-resource environments.</p>
      
      <h2>Our Team</h2>
      <ul class="team-list">
        <li>Mariam Mohamed Elseady <span>108-2022</span></li>
        <li>Sara Mohamed Abu Hamam <span>152-2022</span></li>
        <li>Ganna Ayman Elkasaby <span>35-2022</span></li>
        <li>Fatma Elzahraa Ayman Moawad <span>91-2022</span></li>
        <li>Esraa Elseaid Abo Shahen <span>158-2022</span></li>
        <li>Haneen Osama Nada <span>113-2022</span></li>
        <li>Dalia Ahmed Elbialy <span>12-2022</span></li>
        <li>Ahmed Amr Eladham <span>36-2022</span></li>
        <li>Mohamed Essam Rehema <span>49-2022</span></li>
        <li>Hossam Awad Kholif <span>19-2022</span></li>
        <li>Mohamed Ashraf Elbardawill <span>84-2022</span></li>
      </ul>
    </div>
    <div class="logo">
      <img src="logo.png" alt="Spinova Logo" />
    </div>
  `
};

function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  navLinks.classList.toggle('active');
  hamburger.innerHTML = navLinks.classList.contains('active') ? '&times;' : '&#9776;';
}

document.querySelectorAll('.nav-links a').forEach(button => {
  button.addEventListener('click', (e) => {
    e.preventDefault();
    const title = button.querySelector('img').alt.replace(' Icon', '');
    
    document.getElementById('contentTitle').textContent = title;
    document.getElementById('pageContent').innerHTML = content[title] || '';
    document.getElementById('pageContent').style.backgroundImage = title === 'Home' ? 'url("logo.png")' : 'none';
    
    document.querySelectorAll('.nav-links a').forEach(b => b.classList.remove('active'));
    button.classList.add('active');
    
    if(window.innerWidth <= 768) toggleMenu();
  });
});

document.addEventListener('click', function(e) {
  const navLinks = document.getElementById('navLinks');
  const hamburger = document.querySelector('.hamburger');
  if (!navLinks.contains(e.target) && !hamburger.contains(e.target)) {
    navLinks.classList.remove('active');
    hamburger.innerHTML = '&#9776;';
  }
});

window.addEventListener('resize', function() {
  if (window.innerWidth > 768) {
    document.getElementById('navLinks').classList.remove('active');
    document.querySelector('.hamburger').innerHTML = '&#9776;';
  }
});

document.querySelector('.logo img').addEventListener('click', () => {
  document.getElementById('contentTitle').textContent = 'Welcome to Spinova';
  document.getElementById('pageContent').textContent = '';
  document.getElementById('pageContent').style.backgroundImage = 'url("logo.png")';
  document.querySelectorAll('.nav-links a').forEach(b => b.classList.remove('active'));
});

const floatingElements = {
  instances: [],
  positions: [],
  radius: 70,
  maxElements: 40,
  sideWidth: 30,
  
  create: function() {
    const elements = ['band.png', 'tube.png'];
    const maxAttempts = 200;
    
    for(let i = 0; i < this.maxElements; i++) {
      let validPosition = false;
      let attempts = 0;
      
      while(!validPosition && attempts < maxAttempts) {
        const side = Math.random() > 0.5 ? 'left' : 'right';
        const x = side === 'left' 
          ? Math.random() * this.sideWidth 
          : 100 - this.sideWidth + Math.random() * this.sideWidth;
        const y = Math.random() * 100;
        
        if(this.isPositionValid(x, y)) {
          const element = this.createElement(elements, x, y);
          this.instances.push(element);
          this.positions.push({x, y});
          validPosition = true;
        }
        attempts++;
      }
    }
  },

  createElement: function(elements, x, y) {
    const element = document.createElement('img');
    element.className = 'floating-element';
    element.src = elements[Math.floor(Math.random() * elements.length)];
    
    const animationType = Math.random() > 0.5 ? 'float' : 'float-alt';
    const duration = 2 + Math.random() * 3;
    const delay = Math.random() * 2;
    
    element.style.cssText = `
      left: ${x}%;
      top: ${y}%;
      animation: ${animationType} ${duration}s ease-in-out ${delay}s infinite;
      transform: rotate(${Math.random() * 8 - 4}deg);
    `;
    
    document.body.appendChild(element);
    return element;
  },

  isPositionValid: function(newX, newY) {
    return !this.positions.some(pos => {
      const dx = Math.abs(pos.x - newX);
      const dy = Math.abs(pos.y - newY);
      return dx < this.radius/2 && dy < this.radius/2;
    });
  }
};

floatingElements.create();

const middleSection = document.createElement('div');
middleSection.className = 'middle-section';
document.body.appendChild(middleSection);