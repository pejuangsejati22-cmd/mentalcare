import React, { useEffect, useState } from 'react';
import { DashboardMetrics } from '../types';
import './Dashboard.css';

const Dashboard: React.FC = () => {
  const [metrics, setMetrics] = useState<DashboardMetrics | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulasi fetch data dari API
    setTimeout(() => {
      setMetrics({
        totalData: 1200,
        avgScreenTime: 4.32,
        avgSocialInteraction: 2.41,
        depressionRiskPercentage: 37.5,
        previousMonthComparison: {
          totalDataChange: 12,
          screenTimeChange: 8,
          socialInteractionChange: -5,
          depressionRiskChange: 7,
        },
      });
      setLoading(false);
    }, 1000);
  }, []);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <div className="dashboard-container">
      <h1>Dashboard Overview</h1>
      <p className="subtitle">Ringkasan analisis kesehatan mental remaja</p>

      {/* Metrics Cards */}
      <div className="metrics-grid">
        <div className="metric-card">
          <div className="metric-icon total-data">👥</div>
          <div className="metric-content">
            <h3>Total Data Dialanalisis</h3>
            <p className="metric-value">{metrics?.totalData}</p>
            <p className="metric-label">Data Remaja</p>
            <p className="metric-change positive">
              ↑ {metrics?.previousMonthComparison.totalDataChange}% dari bulan lalu
            </p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon screen-time">⏱️</div>
          <div className="metric-content">
            <h3>Rata-rata Screen Time (Harian)</h3>
            <p className="metric-value">{metrics?.avgScreenTime} jam</p>
            <p className="metric-label">Per hari</p>
            <p className="metric-change positive">
              ↑ {metrics?.previousMonthComparison.screenTimeChange}% dari bulan lalu
            </p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon social">👨‍👩‍👧‍👦</div>
          <div className="metric-content">
            <h3>Rata-rata Interaksi Sosial</h3>
            <p className="metric-value">{metrics?.avgSocialInteraction}</p>
            <p className="metric-label">Level (1-3)</p>
            <p className="metric-change negative">
              ↓ {Math.abs(metrics?.previousMonthComparison.socialInteractionChange || 0)}% dari bulan lalu
            </p>
          </div>
        </div>

        <div className="metric-card">
          <div className="metric-icon risk">📊</div>
          <div className="metric-content">
            <h3>Persentase Risiko Depresi</h3>
            <p className="metric-value">{metrics?.depressionRiskPercentage}%</p>
            <p className="metric-label">Berisiko</p>
            <p className="metric-change positive">
              ↑ {metrics?.previousMonthComparison.depressionRiskChange}% dari bulan lalu
            </p>
          </div>
        </div>
      </div>

      {/* Status & Charts Section */}
      <div className="dashboard-charts">
        <div className="chart-section">
          <h2>Status Kesehatan Mental Anda</h2>
          <div className="chart-content">
            <div className="risk-indicator">
              <div className="circular-progress">
                <p className="progress-text">78%</p>
                <p className="progress-label">Probabilitas Depresi</p>
              </div>
            </div>
            <div className="risk-description">
              <p>Hasil analisis menunjukkan bahwa Anda memiliki kemungkinan tinggi mengalami gangguan depresi.</p>
              <p>Disarankan untuk mengurangi penggunaan media sosial dan meningkatkan interaksi sosial secara langsung.</p>
              <button className="btn-primary">Lihat Hasil Prediksi Selengkapnya →</button>
            </div>
          </div>
        </div>
      </div>

      {/* Recommendations */}
      <div className="recommendations">
        <h2>Rekomendasi untuk Anda</h2>
        <div className="recommendations-grid">
          <div className="recommendation-card">
            <div className="rec-icon">⏱️</div>
            <h3>Kurangi Screen Time</h3>
            <p>Batasi penggunaan media sosial maksimal 2 jam per hari.</p>
          </div>
          <div className="recommendation-card">
            <div className="rec-icon">👥</div>
            <h3>Tingkatkan Interaksi Sosial</h3>
            <p>Luangkan waktu untuk bertemu dan berinteraksi.</p>
          </div>
          <div className="recommendation-card">
            <div className="rec-icon">🏃</div>
            <h3>Aktivitas Fisik</h3>
            <p>Olahraga teratur dapat membantu meningkatkan suasana hati.</p>
          </div>
          <div className="recommendation-card">
            <div className="rec-icon">🧘</div>
            <h3>Kelola Stres</h3>
            <p>Lakukan meditasi atau aktivitas relaksasi setiap hari.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;