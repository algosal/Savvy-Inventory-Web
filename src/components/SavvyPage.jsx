import React from "react";
import "../css/SavvyPage.css";

const SavvyPage = () => {
  return (
    <div className="savvy-container">
      <header className="savvy-header">
        <h1>Welcome to Savvy Inventory</h1>
      </header>

      <section className="savvy-section">
        <h2>Our Mission</h2>
        <p>
          At Savvy Inventory, we are dedicated to empowering small businesses
          with the tools they need to effectively manage their inventory. We
          understand that inventory management can be a daunting task,
          especially for growing businesses that need to balance efficiency with
          cost. That’s why we provide innovative solutions tailored to your
          unique needs.
        </p>
        <p>
          Our mission is to offer affordable, user-friendly inventory management
          systems that simplify the complex processes involved in tracking,
          storing, and analyzing your stock. We strive to make inventory
          management seamless and accessible, allowing you to focus on what you
          do best—growing your business.
        </p>
        <p>
          We believe that every small business deserves access to high-quality
          inventory management solutions without breaking the bank. Our team is
          committed to supporting you with top-notch customer service,
          continuous improvements, and reliable technology that adapts to your
          evolving needs.
        </p>
        <p>
          With Savvy Inventory, you can manage your stock with confidence and
          ease. Our solutions are designed to integrate seamlessly with your
          existing systems, providing you with real-time insights and actionable
          data to drive your success.
        </p>
        <p>
          Join the many businesses that have already benefited from our services
          and take the next step towards streamlined inventory management. Let
          Savvy Inventory be your partner in achieving operational excellence
          and business growth.
        </p>
      </section>

      <footer className="savvy-footer">
        © 2024 Savvy Inventory. All rights reserved.
      </footer>
    </div>
  );
};

export default SavvyPage;
