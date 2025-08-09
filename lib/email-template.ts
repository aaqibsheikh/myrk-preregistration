export function generateSimpleEmailTemplate(userData: { fullName: string; email: string; platform?: string; registrationDate: string }): string {
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
        
        .header {
            background: linear-gradient(135deg, #2d3748 0%, #4a5568 100%);
            padding: 40px 20px;
            text-align: center;
            border-bottom: 2px solid #4a5568;
        }
        
        .logo {
            font-family: 'Orbitron', monospace;
            font-size: 48px;
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
        }
        
        .content {
            padding: 40px 30px;
            background: linear-gradient(135deg, #2d3748 0%, #374151 100%);
        }
        
        .welcome-section {
            background: rgba(45, 55, 72, 0.8);
            border: 1px solid #4a5568;
            border-radius: 16px;
            padding: 30px;
            margin-bottom: 30px;
            text-align: center;
        }
        
        .welcome-title {
            font-family: 'Orbitron', monospace;
            font-size: 28px;
            font-weight: 700;
            color: #edc84f;
            margin-bottom: 20px;
        }
        
        .welcome-text {
            font-family: 'Oxanium', Arial, sans-serif;
            font-size: 16px;
            color: #e2e8f0;
            line-height: 1.6;
            margin-bottom: 20px;
        }
        
        .user-info {
            background: rgba(237, 200, 79, 0.1);
            border: 1px solid rgba(237, 200, 79, 0.3);
            border-radius: 16px;
            padding: 25px;
            margin-bottom: 30px;
        }
        
        .info-row {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 8px 0;
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
        
        .cta-section {
            text-align: center;
            margin-bottom: 30px;
        }
        
        .cta-button {
            display: inline-block;
            background: linear-gradient(135deg, #edc84f 0%, #c79c27 100%);
            color: #000000;
            text-decoration: none;
            padding: 16px 32px;
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
        
        @media (max-width: 600px) {
            .logo {
                font-size: 36px;
            }
            
            .content {
                padding: 30px 20px;
            }
            
            .info-row {
                flex-direction: column;
                align-items: flex-start;
                gap: 4px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <!-- Header -->
        <div class="header">
            <div class="logo">MYRK</div>
            <div class="subtitle">ECHOES OF THE FORGOTTEN</div>
        </div>
        
        <!-- Content -->
        <div class="content">
            <!-- Welcome Section -->
            <div class="welcome-section">
                <h2 class="welcome-title">Welcome to MYRK!</h2>
                <p class="welcome-text">
                    Thank you for pre-registering for MYRK: Echoes of the Forgotten! You're now part of an exclusive community that will be among the first to experience this epic turn-based RPG adventure.
                </p>
                <p class="welcome-text">
                    We'll keep you updated with exclusive news, early access opportunities, and special rewards as we prepare for launch.
                </p>
            </div>
            
            <!-- User Information -->
            <div class="user-info">
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
                    <span class="info-value">${userData.platform || 'Not specified'}</span>
                </div>
                <div class="info-row">
                    <span class="info-label">Registered:</span>
                    <span class="info-value">${userData.registrationDate}</span>
                </div>
            </div>
            
            <!-- Call to Action -->
            <div class="cta-section">
                <a href="https://myrkechoes.com" class="cta-button">
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
