import React from 'react';

const HasilPrediksi = ({ predictions }) => {
    return (
        <div>
            <h1>Prediction Results</h1>
            {predictions.map((prediction, index) => (
                <div key={index} className="prediction">
                    <h2>Patient: {prediction.patientName}</h2>
                    <p>Risk Level: {prediction.riskLevel}</p>
                    <p>Factors: {prediction.factors.join(', ')}</p>
                    <h3>Recommendations:</h3>
                    <ul>
                        {prediction.recommendations.map((rec, i) => (
                            <li key={i}>{rec}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default HasilPrediksi;
