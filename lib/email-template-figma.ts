export function generateFigmaBasedEmailTemplate(userData: { fullName: string; email: string; platform: string; registrationDate: string }): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Welcome to MYRK - Pre-Registration Confirmed</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700;900&family=Oxanium:wght@300;400;500;600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Oxanium', Arial, sans-serif;
            background: linear-gradient(135deg, #1a2332 0%, #2d3748 50%, #1a202c 100%);
            color: #ffffff;
            line-height: 1.6;
            -webkit-font-smoothing: antialiased;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background: linear-gradient(135deg, #2d3748 0%, #3a4a5c 30%, #2d3748 100%);
            position: relative;
            overflow: hidden;
        }
        
        /* Header Section */
        .header {
            background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
            padding: 20px;
            text-align: center;
            border-bottom: 2px solid #4a5568;
        }
        
        .introducing-text {
            font-family: 'Oxanium', Arial, sans-serif;
            font-size: 20px;
            color: #e2e8f0;
            font-weight: 400;
            margin-bottom: 20px;
        }
        
        /* Logo Section */
        .logo-section {
            background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
            padding: 40px 20px;
            text-align: center;
            position: relative;
            background-image: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><rect width="100" height="100" fill="%23374151" opacity="0.1"/></svg>');
        }
        
        .logo {
            font-family: 'Orbitron', monospace;
            font-size: 52px;
            font-weight: 900;
            color: #edc84f;
            text-shadow: 2px 2px 8px rgba(0,0,0,0.5);
            margin-bottom: 10px;
            letter-spacing: 2px;
        }
        
        .subtitle {
            font-family: 'Oxanium', Arial, sans-serif;
            font-size: 16px;
            font-weight: 500;
            color: #cbd5e0;
            letter-spacing: 1px;
            margin-bottom: 10px;
        }
        
        .logo-diamond {
            width: 40px;
            height: 40px;
            background: linear-gradient(45deg, #edc84f, #c79c27);
            transform: rotate(45deg);
            margin: 20px auto;
            border: 2px solid #f4d966;
        }
        
        /* Content Section */
        .content {
            padding: 40px 30px;
            background: linear-gradient(135deg, #2d3748 0%, #374151 100%);
        }
        
        /* What is MYRK Section */
        .what-is-myrk {
            background: rgba(45, 55, 72, 0.8);
            border: 1px solid #4a5568;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 40px;
            position: relative;
        }
        
        .what-is-myrk::before {
            content: '';
            position: absolute;
            top: -1px;
            left: -1px;
            right: -1px;
            bottom: -1px;
            background: linear-gradient(45deg, #edc84f, #c79c27);
            border-radius: 16px;
            z-index: -1;
            opacity: 0.3;
        }
        
        .section-title {
            font-family: 'Orbitron', monospace;
            font-size: 28px;
            font-weight: 700;
            color: #edc84f;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .section-description {
            font-family: 'Oxanium', Arial, sans-serif;
            font-size: 16px;
            color: #e2e8f0;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        
        .beer-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #edc84f, #c79c27);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            margin: 0 auto 20px;
            font-size: 30px;
        }
        
        /* Heroes Section */
        .heroes-section {
            background: rgba(45, 55, 72, 0.8);
            border: 1px solid #4a5568;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 40px;
            text-align: center;
        }
        
        .heroes-title {
            font-family: 'Orbitron', monospace;
            font-size: 32px;
            font-weight: 700;
            color: #edc84f;
            margin-bottom: 30px;
        }
        
        .heroes-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 20px;
            margin-bottom: 30px;
        }
        
        .hero-card {
            background: rgba(0, 0, 0, 0.3);
            border: 1px solid #4a5568;
            border-radius: 12px;
            padding: 20px;
            text-align: center;
        }
        
        .hero-image {
            width: 80px;
            height: 80px;
            background: linear-gradient(45deg, #edc84f, #c79c27);
            border-radius: 50%;
            margin: 0 auto 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 40px;
        }
        
        .hero-name {
            font-family: 'Oxanium', Arial, sans-serif;
            font-size: 14px;
            color: #e2e8f0;
            font-weight: 600;
        }
        
        /* Features Section */
        .features-section {
            margin-bottom: 40px;
        }
        
        .feature-card {
            background: rgba(45, 55, 72, 0.8);
            border: 1px solid #4a5568;
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 20px;
            display: flex;
            align-items: center;
            gap: 20px;
        }
        
        .feature-icon {
            width: 60px;
            height: 60px;
            background: linear-gradient(45deg, #edc84f, #c79c27);
            border-radius: 12px;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 30px;
            flex-shrink: 0;
        }
        
        .feature-text {
            font-family: 'Oxanium', Arial, sans-serif;
            font-size: 16px;
            color: #e2e8f0;
            line-height: 1.5;
        }
        
        /* User Info Section */
        .user-info {
            background: rgba(237, 200, 79, 0.1);
            border: 1px solid rgba(237, 200, 79, 0.3);
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 40px;
            backdrop-filter: blur(10px);
        }
        
        .user-info h3 {
            font-family: 'Orbitron', monospace;
            font-size: 24px;
            color: #edc84f;
            margin-bottom: 20px;
            text-align: center;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 12px 0;
            border-bottom: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .info-row:last-child {
            border-bottom: none;
        }
        
        .info-label {
            font-weight: 600;
            color: #cbd5e0;
            font-size: 14px;
        }
        
        .info-value {
            font-weight: 500;
            color: #ffffff;
            font-size: 16px;
        }
        
        /* CTA Section */
        .cta-section {
            text-align: center;
            margin-bottom: 40px;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #edc84f 0%, #c79c27 100%);
            color: #000000;
            text-decoration: none;
            padding: 18px 40px;
            border-radius: 50px;
            font-family: 'Orbitron', monospace;
            font-weight: 700;
            font-size: 16px;
            transition: all 0.3s ease;
            box-shadow: 0 8px 25px rgba(237, 200, 79, 0.3);
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 12px 35px rgba(237, 200, 79, 0.4);
        }
        
        /* Footer */
        .footer {
            background: rgba(0, 0, 0, 0.5);
            padding: 30px;
            text-align: center;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
        }
        
        .footer-text {
            font-size: 14px;
            color: #a0aec0;
            margin-bottom: 10px;
        }
        
        .footer-links {
            display: flex;
            justify-content: center;
            gap: 20px;
            margin-top: 20px;
        }
        
        .footer-link {
            color: #cbd5e0;
            text-decoration: none;
            font-size: 12px;
        }
        
        .footer-link:hover {
            color: #edc84f;
        }
        
        /* Responsive Design */
        @media (max-width: 600px) {
            .logo {
                font-size: 36px;
            }
            
            .heroes-grid {
                grid-template-columns: 1fr;
            }
            
            .feature-card {
                flex-direction: column;
                text-align: center;
            }
            
            .content {
                padding: 30px 20px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="introducing-text">Introducing</div>
        </div>
        
        <!-- Logo Section -->
        <div class="logo-section">
            <div class="logo">MYRK</div>
            <div class="logo-diamond"></div>
            <div class="subtitle">ECHOES OF THE FORGOTTEN</div>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- What is MYRK Section -->
            <div class="what-is-myrk">
                <h2 class="section-title">What is MYRK?</h2>
                <div class="beer-icon">🍺</div>
                <p class="section-description">
                    MYRK is a turn-based RPG where you awaken as a forgotten hero to restore balance in a world torn by elemental chaos, where strategy meets storytelling in a realm of ancient prophecy, powerful enemies, and unforgettable battles.
                </p>
            </div>
            
            <!-- Heroes Section -->
            <div class="heroes-section">
                <h2 class="heroes-title">MYRK Heroes</h2>
                <div class="heroes-grid">
                    <div class="hero-card">
                        <div class="hero-image">⚔️</div>
                        <div class="hero-name">Warrior</div>
                    </div>
                    <div class="hero-card">
                        <div class="hero-image">🔥</div>
                        <div class="hero-name">Mage</div>
                    </div>
                    <div class="hero-card">
                        <div class="hero-image">🏹</div>
                        <div class="hero-name">Ranger</div>
                    </div>
                </div>
            </div>
            
            <!-- Features Section -->
            <div class="features-section">
                <div class="feature-card">
                    <div class="feature-icon">🐲</div>
                    <div class="feature-text">
                        Collect, build, and battle with a diverse roster of unique creatures!
                    </div>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">🏰</div>
                    <div class="feature-text">
                        Collect, build, and battle with a diverse roster of unique creatures!
                    </div>
                </div>
                
                <div class="feature-card">
                    <div class="feature-icon">⚡</div>
                    <div class="feature-text">
                        Assemble your team, outmaneuver your rivals, and claim victory in the arena!
                    </div>
                </div>
            </div>
            
            <!-- User Information -->
            <div class="user-info">
                <h3>Welcome, ${userData.fullName}!</h3>
                <div class="info-row">
                    <span class="info-label">Player Name:</span>
                    <span class="info-value">${userData.fullName}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Email:</span>
                    <span class="info-value">${userData.email}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Platform:</span>
                    <span class="info-value">${userData.platform}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Registered:</span>
                    <span class="info-value">${userData.registrationDate}</span>
                </div>
            </div>
            
            <!-- Call to Action -->
            <div class="cta-section">
                <a href="https://myrk-game.com" class="cta-button">
                    Join the Adventure
                </a>
            </div>
        </div>
        
        <!-- Footer -->
        <div class="footer">
            <p class="footer-text">
                © 2025 MYRK Game Studios. All rights reserved.
            </p>
            <p class="footer-text">
                This email was sent because you pre-registered for MYRK.
            </p>
            <div class="footer-links">
                <a href="#" class="footer-link">Privacy Policy</a>
                <a href="#" class="footer-link">Terms of Service</a>
                <a href="#" class="footer-link">Unsubscribe</a>
            </div>
        </div>
    </div>
</body>
</html>`;
}