import React from 'react';
import { exportToPDF, exportToExcel } from './exportUtils'; // assume these utility functions are defined

const LaporanExport = () => {
    const handleExportPDF = () => {
        exportToPDF();
    };

    const handleExportExcel = () => {
        exportToExcel();
    };

    const handleScheduleReport = () => {
        // Add scheduling logic here
        alert('Feature to schedule report generation is yet to be implemented.');
    };

    return (
        <div>
            <h1>Laporan Export</h1>
            <button onClick={handleExportPDF}>Export to PDF</button>
            <button onClick={handleExportExcel}>Export to Excel</button>
            <button onClick={handleScheduleReport}>Schedule Report Generation</button>
        </div>
    );
};

export default LaporanExport;