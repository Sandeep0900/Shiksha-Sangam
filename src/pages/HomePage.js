import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './HomePage.css';

const HomePage = () => {
  const { user } = useAuth();

  return (
    <div className="homepage">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-content">
          <h1 className="hero-title">Welcome to ClassroomHub</h1>
          <p className="hero-subtitle">
            A modern platform for seamless classroom management and collaboration
          </p>
          {!user && (
            <div className="hero-buttons">
              <Link to="/signup" className="btn btn-primary">Get Started</Link>
              <Link to="/login" className="btn btn-secondary">Login</Link>
            </div>
          )}
        </div>
        <div className="hero-illustration">
          <div className="floating-card card-1">📚</div>
          <div className="floating-card card-2">👩‍🏫</div>
          <div className="floating-card card-3">👨‍🎓</div>
          <div className="floating-card card-4">💡</div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-it-works">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <div className="steps-grid">
            <div className="step-card">
              <div className="step-number">1</div>
              <h3>Sign Up</h3>
              <p>Create your account as either a Teacher or Student. Verify your email with OTP for security.</p>
            </div>
            <div className="step-card">
              <div className="step-number">2</div>
              <h3>Create or Join</h3>
              <p>Teachers can create classrooms, while students can request to join existing classes.</p>
            </div>
            <div className="step-card">
              <div className="step-number">3</div>
              <h3>Collaborate</h3>
              <p>Share posts, assignments, and announcements within your classroom community.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <h2 className="section-title">Key Features</h2>
          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">🏫</div>
              <h3>Classroom Management</h3>
              <p>Create and manage multiple classrooms with ease. Organize your courses efficiently.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">🔐</div>
              <h3>Secure Access</h3>
              <p>OTP-based verification system ensures only authorized students can join your classes.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">📝</div>
              <h3>Post & Share</h3>
              <p>Share announcements, assignments, and resources with your students instantly.</p>
            </div>
            <div className="feature-card">
              <div className="feature-icon">👥</div>
              <h3>Role-Based Access</h3>
              <p>Different interfaces and permissions for teachers and students for better organization.</p>
            </div>
          </div>
        </div>
      </section>

      {/* User Guide Section */}
      <section className="user-guide">
        <div className="container">
          <h2 className="section-title">User Guide</h2>
          <div className="guide-tabs">
            <div className="guide-content">
              <div className="guide-section">
                <h3>For Teachers</h3>
                <ul>
                  <li>Sign up with your email and verify using OTP</li>
                  <li>Create classrooms from your profile page</li>
                  <li>Share classroom details with students</li>
                  <li>Approve student join requests via OTP</li>
                  <li>Create and manage posts within classrooms</li>
                </ul>
              </div>
              <div className="guide-section">
                <h3>For Students</h3>
                <ul>
                  <li>Register with your student email</li>
                  <li>Request to join classrooms</li>
                  <li>Enter OTP provided by your teacher</li>
                  <li>Access classroom posts and materials</li>
                  <li>View your joined classrooms in profile</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Developer Section */}
      <section className="developer-section">
        <div className="container">
          <h2 className="section-title">About the Developer</h2>
          <div className="developer-card">
            <div className="developer-content">
              <h3>Built with ❤️ by Sandeep Sharma</h3>
              <p>
                This classroom management system was developed as a modern solution for 
                educational institutions to streamline their digital classroom experience.
              </p>
              <div className="social-links">
                <a 
                  href="https://github.com/Sandeep0900" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link github"
                >
                  <span className="icon">🐙</span>
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/sandeep--sharma/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link linkedin"
                >
                  <span className="icon">💼</span>
                  LinkedIn
                </a>
                <a 
                  href="https://leetcode.com/u/Sandeep-Sharma/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="social-link leetcode"
                >
                  <span className="icon">🧩</span>
                  LeetCode
                </a>
                <a 
                  href="mailto:sandeesharma09@gmail.com"
                  className="social-link email"
                >
                  <span className="icon">📧</span>
                  Email
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      {!user && (
        <section className="cta-section">
          <div className="container">
            <h2>Ready to Get Started?</h2>
            <p>Join thousands of educators and students already using ClassroomHub</p>
            <Link to="/signup" className="btn btn-primary btn-large">
              Start Your Journey
            </Link>
          </div>
        </section>
      )}
    </div>
  );
};

export default HomePage;