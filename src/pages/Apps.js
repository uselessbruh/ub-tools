import React from 'react';
import ToolCard from '../components/ToolCard';
import './Page.css';
import sites from '../data/sites';

function Apps() {
    return (
        <div className="page">
            <div className="page-header">
                <h2 className="page-title">Web Apps</h2>
                <p className="page-subtitle">
                    Deployed Vercel sites — click a card to open the site
                </p>
            </div>

            <div className="tools-grid">
                {sites.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>

            {sites.length === 0 && (
                <div className="empty-state">
                    <p>No sites available yet</p>
                </div>
            )}
        </div>
    );
}

export default Apps;
