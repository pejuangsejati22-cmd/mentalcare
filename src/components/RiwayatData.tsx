import React from 'react';

const RiwayatData = () => {
    const data = [
        // Example data, in a real scenario, this could be fetched from an API
        {
            date: '2026-04-14',
            patientName: 'John Doe',
            screenTime: '3 hours',
            socialInteraction: '2 times',
            riskLevel: 'High',
        },
        {
            date: '2026-04-15',
            patientName: 'Jane Smith',
            screenTime: '1 hour',
            socialInteraction: '5 times',
            riskLevel: 'Low',
        },
    ];

    return (
        <div>
            <h1>Riwayat Data Pasien</h1>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Patient Name</th>
                        <th>Screen Time</th>
                        <th>Social Interaction</th>
                        <th>Risk Level</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((record, index) => (
                        <tr key={index}>
                            <td>{record.date}</td>
                            <td>{record.patientName}</td>
                            <td>{record.screenTime}</td>
                            <td>{record.socialInteraction}</td>
                            <td>{record.riskLevel}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default RiwayatData;