export interface Patient {
  id: string;
  name: string;
  age: number;
  email: string;
  phone: string;
  createdAt: string;
}

export interface MentalHealthData {
  id: string;
  patientId: string;
  screenTime: number;
  socialInteraction: number;
  riskLevel: 'rendah' | 'sedang' | 'tinggi';
  depressionProbability: number;
  timestamp: string;
}

export interface DashboardMetrics {
  totalData: number;
  avgScreenTime: number;
  avgSocialInteraction: number;
  depressionRiskPercentage: number;
  previousMonthComparison: {
    totalDataChange: number;
    screenTimeChange: number;
    socialInteractionChange: number;
    depressionRiskChange: number;
  };
}

export interface PredictionResult {
  patientId: string;
  probability: number;
  riskLevel: 'rendah' | 'sedang' | 'tinggi';
  factors: string[];
  recommendations: string[];
}