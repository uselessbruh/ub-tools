import React from 'react';
import ToolCard from '../components/ToolCard';
import './Page.css';

function WebApps() {
    // Replace this with your actual webapps data
    const webapps = [
        {
            id: 1,
            name: 'Task Manager',
            description: 'Organize and track your daily tasks with an intuitive interface',
            url: 'https://example.com/task-manager',
            icon: '📋'
        },
        {
            id: 2,
            name: 'Image Optimizer',
            description: 'Compress and optimize images without losing quality',
            url: 'https://example.com/image-optimizer',
            icon: '🖼️'
        },
        {
            id: 3,
            name: 'Code Snippet Library',
            description: 'Save and organize reusable code snippets for quick access',
            url: 'https://example.com/snippets',
            icon: '💻'
        },
        {
            id: 4,
            name: 'Color Palette Generator',
            description: 'Create beautiful color schemes for your projects',
            url: 'https://example.com/colors',
            icon: '🎨'
        },
        {
            id: 5,
            name: 'Markdown Editor',
            description: 'Write and preview markdown with live rendering',
            url: 'https://example.com/markdown',
            icon: '📝'
        }
    ];

    return (
        <div className="page">
            <div className="page-header">
                <h2 className="page-title">Webapps</h2>
                <p className="page-subtitle">
                    Browser-based tools ready to use instantly
                </p>
            </div>

            <div className="tools-grid">
                {webapps.map(tool => (
                    <ToolCard key={tool.id} tool={tool} />
                ))}
            </div>

            {webapps.length === 0 && (
                <div className="empty-state">
                    <p>No webapps available yet</p>
                </div>
            )}
        </div>
    );
}

export default WebApps;
