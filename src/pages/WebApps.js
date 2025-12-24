import React from 'react';
import ToolCard from '../components/ToolCard';
import './Page.css';
import sites from '../data/sites';

function WebApps() {
    return (
        <div className="page">
            <div className="page-header">
                <h2 className="page-title">Webapps</h2>
                <p className="page-subtitle">
                    Browser-based tools ready to use instantly
                </p>
            </div>

            <div className="tools-grid">
                {sites.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>

            {sites.length === 0 && (
                <div className="empty-state">
                    <p>No webapps available yet</p>
                </div>
            )}
        </div>
    );
}

export default WebApps;
