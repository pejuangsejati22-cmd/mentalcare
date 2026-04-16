import React from 'react';
import { Line } from 'react-chartjs-2';

const AnalisisFaktor = () => {
    // Data for screen time analysis
    const screenTimeData = {
        labels: ['0-1 hours', '1-2 hours', '2-3 hours', '3-4 hours', '4+ hours'],
        datasets: [
            {
                label: 'Risk Factor (%)',
                data: [10, 30, 50, 70, 90],
                borderColor: 'rgba(75,192,192,1)',
                backgroundColor: 'rgba(75,192,192,0.2)',
                borderWidth: 2,
            }
        ],
    };

    // Data for social interaction analysis
    const interactionData = {
        labels: ['Low', 'Moderate', 'High'],
        datasets: [
            {
                label: 'Depression Risk (%)',
                data: [80, 50, 20],
                borderColor: 'rgba(255,99,132,1)',
                backgroundColor: 'rgba(255,99,132,0.2)',
                borderWidth: 2,
            }
        ],
    };

    return (
        <div>
            <h1>Factor Analysis for Depression Risk</h1>
            <h2>Screen Time Analysis</h2>
            <Line data={screenTimeData} />
            <h2>Social Interaction Analysis</h2>
            <Line data={interactionData} />
            <h2>Correlation Charts</h2>
            <p>Further analysis can be conducted here to find correlations between various factors.</p>
        </div>
    );
};

export default AnalisisFaktor;
