import React from 'react';
import "./Dashboard.css";   
function Dashboard() {  
    return (
        <div className="dashboard-page">
            <div className="dashboard-container">
                <h1>Welcome to Your Dashboard</h1>
                <div className="dashboard-subtitle">
                    <p>Manage your loans and financial activities in one place.</p>
                </div>
                <div className="dashboard-content">
                    <p>Here you can view your loan applications, track their status, and access important financial information. Use the navigation menu to explore different sections of your dashboard.</p>
                    <p>Stay organized and in control of your financial journey with our user-friendly dashboard.</p>
                </div>
            </div>
        </div>
    );
}
export default Dashboard;