import React from 'react';
import JusfyPayFrame from './JusfyPayFrame';

export const JusfyPayDashboard: React.FC = () => <JusfyPayFrame path="/dashboard" />;
export const JusfyPayPaymentLinks: React.FC = () => <JusfyPayFrame path="/payment-links" />;
export const JusfyPayPayments: React.FC = () => <JusfyPayFrame path="/payments" />;
export const JusfyPayWallet: React.FC = () => <JusfyPayFrame path="/wallet" />;
export const JusfyPayProfile: React.FC = () => <JusfyPayFrame path="/profile" />;
export const JusfyPayNewCharge: React.FC = () => <JusfyPayFrame path="/payment-links" newPaymentLink />;