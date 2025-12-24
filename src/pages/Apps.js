import React from 'react';
import ToolCard from '../components/ToolCard';
import './Page.css';

function Apps() {
    // Replace this with your actual apps data
    const apps = [
        {
            id: 1,
            name: 'Screen Recorder Pro',
            description: 'Capture your screen with audio for tutorials and demos',
            url: 'https://example.com/screen-recorder',
            icon: '🎥'
        },
        {
            id: 2,
            name: 'File Organizer',
            description: 'Automatically sort and organize files in your system',
            url: 'https://example.com/file-organizer',
            icon: '📁'
        },
        {
            id: 3,
            name: 'Backup Manager',
            description: 'Schedule and manage automated backups of important data',
            url: 'https://example.com/backup',
            icon: '💾'
        },
        {
            id: 4,
            name: 'System Monitor',
            description: 'Track CPU, memory, and disk usage in real-time',
            url: 'https://example.com/monitor',
            icon: '📊'
        }
    ];

    return (
        <div className="page">
            <div className="page-header">
                <h2 className="page-title">Applications</h2>
                <p className="page-subtitle">
                    Desktop software for enhanced productivity
                </p>
            </div>

            <div className="tools-grid">
                {apps.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>

            {apps.length === 0 && (
                <div className="empty-state">
                    <p>No applications available yet</p>
                </div>
            )}
        </div>
    );
}

export default Apps;
