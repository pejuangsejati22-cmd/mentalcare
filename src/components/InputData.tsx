import React, { useState } from 'react';
import { Patient, MentalHealthData } from '../types';
import './InputData.css';

const InputData: React.FC = () => {
  const [formStep, setFormStep] = useState<'patient' | 'health'>('patient');
  const [patientData, setPatientData] = useState<Partial<Patient>>({});
  const [healthData, setHealthData] = useState<Partial<MentalHealthData>>({});
  const [submitted, setSubmitted] = useState(false);

  const handlePatientChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setPatientData(prev => ({ ...prev, [name]: value }));
  };

  const handleHealthChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setHealthData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Patient Data:', patientData);
    console.log('Health Data:', healthData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormStep('patient');
      setPatientData({});
      setHealthData({});
    }, 2000);
  };

  return (
    <div className="input-data-container">
      <h1>Input Data Pasien</h1>
      <p className="subtitle">Masukkan data pasien dan informasi kesehatan mental</p>

      {submitted && <div className="success-message">✓ Data berhasil disimpan!</div>}

      <form onSubmit={handleSubmit} className="input-form">
        {/* Step 1: Patient Information */}
        {formStep === 'patient' && (
          <div className="form-step">
            <h2>Informasi Pasien</h2>
            <div className="form-group">
              <label htmlFor="name">Nama Lengkap</label>
              <input
                type="text"
                id="name"
                name="name"
                value={patientData.name || ''}
                onChange={handlePatientChange}
                placeholder="Masukkan nama lengkap"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="age">Umur</label>
              <input
                type="number"
                id="age"
                name="age"
                value={patientData.age || ''}
                onChange={handlePatientChange}
                placeholder="Masukkan umur"
                min="10"
                max="25"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={patientData.email || ''}
                onChange={handlePatientChange}
                placeholder="Masukkan email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone">No. Telepon</label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={patientData.phone || ''}
                onChange={handlePatientChange}
                placeholder="Masukkan nomor telepon"
                required
              />
            </div>

            <button
              type="button"
              className="btn-next"
              onClick={() => setFormStep('health')}
            >
              Lanjut ke Informasi Kesehatan →
            </button>
          </div>
        )}

        {/* Step 2: Health Information */}
        {formStep === 'health' && (
          <div className="form-step">
            <h2>Data Kesehatan Mental</h2>

            <div className="form-group">
              <label htmlFor="screenTime">Screen Time (jam/hari)</label>
              <input
                type="number"
                id="screenTime"
                name="screenTime"
                value={healthData.screenTime || ''}
                onChange={handleHealthChange}
                placeholder="Masukkan durasi screen time"
                step="0.1"
                min="0"
                max="24"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="socialInteraction">Tingkat Interaksi Sosial (1-3)</label>
              <input
                type="number"
                id="socialInteraction"
                name="socialInteraction"
                value={healthData.socialInteraction || ''}
                onChange={handleHealthChange}
                placeholder="Masukkan tingkat interaksi sosial"
                min="1"
                max="3"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="riskLevel">Tingkat Risiko</label>
              <select
                id="riskLevel"
                name="riskLevel"
                value={healthData.riskLevel || ''}
                onChange={handleHealthChange}
                required
              >
                <option value="">-- Pilih Tingkat Risiko --</option>
                <option value="rendah">Rendah</option>
                <option value="sedang">Sedang</option>
                <option value="tinggi">Tinggi</option>
              </select>
            </div>

            <div className="form-buttons">
              <button
                type="button"
                className="btn-back"
                onClick={() => setFormStep('patient')}
              >
                ← Kembali
              </button>
              <button type="submit" className="btn-submit">
                Simpan Data
              </button>
            </div>
          </div>
        )}
      </form>
    </div>
  );
};

export default InputData;