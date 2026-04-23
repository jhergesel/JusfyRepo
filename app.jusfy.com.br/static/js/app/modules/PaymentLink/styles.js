import styled from "styled-components";

/* Global styles to ensure white background */
export const GlobalStyles = styled.div `
  html,
  body {
    background-color: white !important;
    margin: 0;
    padding: 0;
    width: 100%;
    min-height: 100vh;
  }

  * {
    box-sizing: border-box;
  }
`;

export const PaymentPage = styled.div `
  min-height: 100vh;
  background-color: white !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin: 0;
  padding: 0;
  width: 100vw;
  min-width: 100vw;
  background: white;
  position: relative;
  overflow-x: hidden;
`;

/* Header */
export const PaymentHeader = styled.header `
  background-color: white;
  border-bottom: 2px solid #e9ecef;
  padding: 1rem 0;
  margin: 0;
  width: 100vw;
  min-width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const HeaderContent = styled.div `
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;

  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const Logo = styled.img `
  height: 40px;
  width: auto;
  margin: 0;

  @media (max-width: 768px) {
    height: 32px;
  }
`;

/* Main Container */
export const PaymentContainer = styled.div `
  max-width: 1000px;
  margin: 4rem auto;
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 0.5rem 2rem;
  padding: 0 2rem;
  position: relative;
  align-items: start;
  min-height: 0;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0 1rem;
    margin: 1rem auto;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
`;

/* Section Header - Outside the cards */
export const SectionHeader = styled.div `
  grid-column: 1;
  margin-bottom: 1.5rem;
  padding-top: 0;

  h1 {
    font-size: 1.625rem; // 26px
    font-weight: 700;
    margin: 0 0 0.5rem 0;
    color: #2c3e50;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  p {
    color: #7f8c8d;
    margin: 0;

    @media (max-width: 768px) {
      font-size: 0.875rem;
    }
  }

  @media (max-width: 768px) {
    grid-column: 1 / -1;
    margin-bottom: 1rem;
  }
`;

/* Left Column - Payment Details */
export const PaymentDetails = styled.div `
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  margin-top: 0;
  grid-column: 1;
  min-height: 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.5rem;
    grid-column: 1;
    order: 2;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
  }
`;

/* Payment Method Section */
export const PaymentMethodSection = styled.div `
  margin-bottom: 2rem;

  h3 {
    font-size: 1.25rem;
    margin: 0 0 1rem 0;
    color: #2c3e50;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

export const PaymentMethodCard = styled.div `
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 0rem;
  margin-bottom: 0;

  .method-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .method-icon {
      font-size: 1.5rem;
    }
  }

  .method-badge {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .recommended {
      background: rgba(39, 174, 96, 0.12);
      color: #1e9e6e;
      padding: 0.5rem 0.875rem;
      border-radius: 12px;
      font-size: 0.875rem;
      font-weight: 600;
    }

    /* Custom radio styled like the screenshot */
    input[type="radio"] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      width: 22px;
      height: 22px;
      border: 2px solid #111827; /* dark ring */
      border-radius: 50%;
      display: grid;
      place-items: center;
      background: #ffffff;
      cursor: pointer;
      outline: none;
      position: relative;
    }

    input[type="radio"]::before {
      content: "";
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #27ae60; /* green center */
      box-shadow: 0 0 0 3px #ffffff; /* small white gap */
      transform: scale(0);
      transition: transform 120ms ease-in-out;
    }

    input[type="radio"]:checked::before {
      transform: scale(1);
    }
  }

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 1rem;
    align-items: flex-start;
    padding: 1rem;

    .method-badge {
      align-self: flex-end;
    }
  }
`;

export const PaymentMethodDivider = styled.div `
  height: 1px;
  background-color: #e5e5e5;
  margin: 1rem 0;
  width: 100%;
`;

/* Form Styles */
export const CreditCardForm = styled.div `
  margin-bottom: 2rem;
`;

export const BoletoForm = styled.div `
  margin-bottom: 2rem;
`;

export const BillingAddress = styled.div `
  margin-bottom: 2rem;

  h3 {
    font-size: 1.25rem;
    margin: 0 0 1rem 0;
    color: #2c3e50;

    @media (max-width: 768px) {
      font-size: 1.125rem;
    }
  }
`;

export const FormRow = styled.div `
  display: grid !important;
  gap: 1rem;
  margin-bottom: 0.3rem;
  width: 100%;
  min-height: 0;

  &.full-width {
    grid-template-columns: 1fr !important;
  }

  &.two-columns {
    grid-template-columns: 1fr 1fr !important;
  }

  &.two-columns-uneven {
    grid-template-columns: 2fr 1fr !important;
  }

  &.three-columns {
    grid-template-columns: 2fr 1fr !important;
  }

  .form-group {
    display: flex;
    flex-direction: column;
    width: 100%;
    min-width: 0;

    &.wide {
      width: 100%;
    }

    &.narrow {
      width: 100%;
    }

    label {
      font-weight: 500;
      margin-bottom: 0.5rem;
      color: #2c3e50;

      @media (max-width: 768px) {
        font-size: 0.875rem;
      }
    }

    input,
    select {
      width: 100%;
      padding: 0.75rem;
      border: 2px solid #e9ecef;
      border-radius: 8px;
      font-size: 1rem;
      transition: border-color 0.2s;
      background: white;
      box-sizing: border-box;
      min-width: 0;

      &:focus {
        outline: none;
        border-color: #27ae60;
      }

      @media (max-width: 768px) {
        padding: 0.875rem;
        font-size: 0.875rem;
      }
    }
  }

  @media (max-width: 768px) {
    &.two-columns,
    &.two-columns-uneven,
    &.three-columns {
      grid-template-columns: 1fr !important;
      gap: 0.75rem;
    }

    gap: 0.75rem;
  }
`;

/* Terms Section */
export const TermsSection = styled.div `
  margin-bottom: 2rem;

  .checkbox-container {
    display: flex;
    align-items: flex-start;
    gap: 0.75rem;
    cursor: pointer;

    /* Custom checkbox */
    input[type="checkbox"] {
      appearance: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      margin: 0;
      width: 18px;
      height: 18px;
      border: 1px solid #e5e5e5; /* light gray border */
      border-radius: 4px; /* slightly rounded corners */
      background: #ffffff;
      display: block;
      cursor: pointer;
      position: relative;
      outline: none;
      transition: border-color 0.2s ease;
    }

    input[type="checkbox"]:checked {
      background: #27ae60;
      border-color: #27ae60;
    }

    input[type="checkbox"]:checked::after {
      content: "✓";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-size: 12px;
      font-weight: bold;
      line-height: 1;
    }

    input[type="checkbox"]:hover {
      border-color: #27ae60;
    }

    .terms-text {
      font-size: 0.875rem;
      color: #7f8c8d;
      line-height: 1.4;

      a {
        color: #27ae60;
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      @media (max-width: 768px) {
        font-size: 0.75rem;
        line-height: 1.3;
      }
    }
  }
`;

/* Action Button */
export const ConfirmPaymentBtn = styled.button `
  width: 100%;
  background: #27ae60;
  color: white;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.125rem;
  font-weight: 600;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background: #229954;
  }

  @media (max-width: 768px) {
    padding: 1rem 1.5rem;
    font-size: 1rem;
  }
`;

/* Right Column - Purchase Details */
export const PurchaseDetails = styled.div `
  background: white;
  padding: 2rem;
  border-radius: 12px;
  border: 2px solid #e9ecef;
  height: fit-content;
  grid-column: 2;
  min-height: 0;
  overflow: hidden;
  margin-top: -80px;

  @media (max-width: 768px) {
    grid-column: 1;
    order: 1;
    margin-top: 0;
    width: 100%;
    max-width: 100%;
    box-sizing: border-box;
    padding: 1.5rem;
  }

  .selected-plan,
  .purchase-summary {
    h3 {
      font-size: 1.25rem;
      margin: 0 0 1rem 0;
      color: #2c3e50;

      @media (max-width: 768px) {
        font-size: 1.125rem;
      }
    }
  }

  .plan-info {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    padding: 0;
    background: transparent;
    border-radius: 0;
    margin-bottom: 2rem;
    padding-bottom: 1.5rem;
    border-bottom: 1px solid #e9ecef;

    .plan-icon {
      font-size: 1.5rem;
      color: #27ae60;
    }

    .plan-texts {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;

      .title {
        font-weight: 600;
        color: #2c3e50;
        line-height: 1.2;
      }

      .plan-name {
        color: #7f8c8d;
        font-size: 0.95rem;
        line-height: 1.2;
      }
    }

    @media (max-width: 768px) {
      padding: 0.875rem;
      margin-bottom: 1.5rem;
    }
  }

  .price-details {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
  }

  .price-row {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    padding: 0;

    &.total {
      border-bottom: none;
      font-weight: 600;
      font-size: 1.125rem;
      margin-top: 0.5rem;
      padding-top: 0;
      /* removed border-top to avoid double divider */
    }

    .price-values {
      text-align: right;

      /* Secondary small line (e.g., R$ 2.000,00) */
      > div:last-child {
        color: #7f8c8d;
        font-size: 0.875rem;
        margin-top: 0.125rem;
      }

      .total-amount {
        font-weight: 600;
        color: inherit; /* remove green color */
      }
    }

    @media (max-width: 768px) {
      padding: 0.5rem 0;
      font-size: 0.875rem;

      &.total {
        font-size: 1rem;
      }
    }
  }

  .security-message {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin-top: 2rem;
    padding: 0;
    background: transparent;
    border-radius: 0;
    font-size: 0.875rem;
    color: #95a5a6;

    .lock-icon {
      font-size: 1.25rem;
    }

    @media (max-width: 768px) {
      margin-top: 1.5rem;
      padding: 0;
      font-size: 0.75rem;
    }
  }

  @media (max-width: 768px) {
    padding: 1.5rem;
    grid-column: 1;
    margin-top: 0;
    order: 1;
  }
`;

/* Floating WhatsApp Button */
export const FloatingWhatsApp = styled.div `
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 1000;

  .whatsapp-btn {
    width: 60px;
    height: 60px;
    background: #27ae60;
    color: white;
    border: none;
    border-radius: 50%;
    font-size: 1.5rem;
    cursor: pointer;
    box-shadow: 0 4px 12px rgba(39, 174, 96, 0.3);
    transition: transform 0.2s;

    &:hover {
      transform: scale(1.1);
    }
  }

  @media (max-width: 768px) {
    bottom: 1rem;
    right: 1rem;

    .whatsapp-btn {
      width: 50px;
      height: 50px;
      font-size: 1.25rem;
    }
  }
`;

/* Responsive Design */
export const ResponsiveContainer = styled.div `
  @media (max-width: 768px) {
    ${PaymentContainer} {
      grid-template-columns: 1fr;
      gap: 1rem;
      padding: 0 1rem;
    }
    
    ${PaymentDetails},
    ${PurchaseDetails} {
      padding: 1.5rem;
    }
    
    ${FormRow}.two-columns,
    ${FormRow}.two-columns-uneven,
    ${FormRow}.three-columns {
      grid-template-columns: 1fr !important;
    }
    
    ${HeaderContent} {
      text-align: center;
    }
  }
`;

/* Mobile Actions Styles */
export const MobileActions = styled.div `
  display: none;
  padding: 1rem;
  background: white;
  border-top: 1px solid #e9ecef;
  margin-top: 1rem;

  @media (max-width: 768px) {
    display: block;
  }
`;

export const DesktopActions = styled.div `
  @media (max-width: 768px) {
    display: none;
  }
`;

export const SubmitSection = styled.div `
  @media (max-width: 768px) {
    order: 3;
  }
`;

/* Security notice centered outside columns */
export const SecurityNotice = styled.div `
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: #95a5a6;
  font-size: 0.875rem;
  margin: 2rem 0 0 0;

  .lock-icon {
    font-size: 1.1rem;
  }

  @media (max-width: 768px) {
    font-size: 0.75rem;
    margin-top: 1.5rem;
  }
`;

/* Payment Link Expired Component Styles */
export const ExpiredPage = styled.div `
  min-height: 100vh;
  background-color: white !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin: 0;
  padding: 0;
  width: 100vw;
  min-width: 100vw;
  background: white;
  position: relative;
  overflow-x: hidden;
`;

export const ExpiredHeader = styled.header `
  background-color: white;
  border-bottom: 2px solid #e9ecef;
  padding: 1rem 0;
  margin: 0;
  width: 100vw;
  min-width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;

  @media (max-width: 768px) {
    padding: 0.75rem 0;
  }
`;

export const ExpiredContainer = styled.div `
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: calc(100vh - 80px);

  @media (max-width: 768px) {
    padding: 2rem 1rem;
    min-height: calc(100vh - 60px);
  }
`;

export const ExpiredContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
`;

export const ClockIllustration = styled.div `
  margin-bottom: 2rem;

  svg {
    height: auto;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const ExpiredText = styled.div `
  margin-bottom: 2rem;
`;

export const ExpiredTitle = styled.h1 `
  font-size: 1.75rem;
  font-weight: 700;
  color: #2c3e50;
  margin: 0 0 1rem 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.5rem;
    margin-bottom: 0.75rem;
  }
`;

export const ExpiredDescription = styled.p `
  font-size: 1rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin: 0;
  max-width: 400px;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    max-width: 100%;
  }
`;

export const SupportButton = styled.button `
  background-color: #67cdb1;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 0.875rem 2rem;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(103, 205, 177, 0.3);

  &:hover {
    background-color: #5bb8a0;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(103, 205, 177, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.75rem 1.5rem;
    font-size: 0.9rem;
  }
`;

/* Payment Link Paid Component Styles */
export const PaidPage = styled.div `
  min-height: 100vh;
  background-color: white !important;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
  margin: 0;
  padding: 0;
  width: 100vw;
  min-width: 100vw;
  background: white;
  position: relative;
  overflow-x: hidden;
`;

export const PaidContainer = styled.div `
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem 2rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 2rem 1rem;
  }
`;

export const PaidContent = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 500px;
`;

export const SuccessIllustration = styled.div `
  margin-bottom: 2rem;

  svg {
    width: 100%;
    height: auto;
    max-width: 100%;
  }

  @media (max-width: 768px) {
    margin-bottom: 1.5rem;
  }
`;

export const PaidText = styled.div `
  margin-bottom: 2rem;
`;

export const PaidTitle = styled.h1 `
  font-size: 2rem;
  font-weight: 700;
  color: #27ae60;
  margin: 0 0 1rem 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 0.75rem;
  }
`;

export const PaidDescription = styled.p `
  font-size: 1.1rem;
  color: #7f8c8d;
  line-height: 1.6;
  margin: 0;
  max-width: 450px;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`;

export const ActionButton = styled.button `
  background-color: #27ae60;
  color: white;
  border: none;
  border-radius: 8px;
  padding: 1rem 2.5rem;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.2s ease;
  box-shadow: 0 2px 8px rgba(39, 174, 96, 0.3);

  &:hover {
    background-color: #229954;
    transform: translateY(-1px);
    box-shadow: 0 4px 12px rgba(39, 174, 96, 0.4);
  }

  &:active {
    transform: translateY(0);
  }

  @media (max-width: 768px) {
    padding: 0.875rem 2rem;
    font-size: 1rem;
  }
`;