import styled, {
    keyframes
} from "styled-components";
import {
    Checkbox
} from "@mui/material";

const fadeInUp = keyframes `
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const fadeInScale = keyframes `
  from {
    opacity: 0;
    transform: scale(0.95);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
`;

export const Container = styled.div `
  width: 100%;
  min-height: 100vh;
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

export const HeroSection = styled.section `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 20px;
  max-width: 1400px;
  margin: 0 auto;
  align-items: center;
  background: #F4F5F9;
  border-radius: 8px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 60px 24px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
    gap: 16px;
  }
`;

export const HeroContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 12px;
  animation: ${fadeInUp} 0.8s ease-out;
  background: #FFF;
  padding: 24px;
  border-radius: 8px;
`;

export const MainTitle = styled.h1 `
  font-size: 40px;
  font-weight: 700;
  line-height: 1.3;
  color: #1A1A1A;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 32px;
  }

  @media (max-width: 480px) {
    font-size: 26px;
  }
`;

export const SubTitle = styled.p `
  font-size: 16px;
  line-height: 1.7;
  color: #666666;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

export const BetaBadge = styled.div `
  display: inline-flex;
  align-items: center;
  width: fit-content;
  padding: 8px 16px;
  background: #EEE4FE;
  border-radius: 8px;
  color: #01AB7D;
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 4px;
`;

export const IconPurple = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  background: #4F05BE;
  border-radius: 8px;
  width: 32px;
  height: 32px;
`;

export const BadgeText = styled.div `
  display: flex;
  flex-direction: column;
  gap: 2px;
  margin-left: 8px;
`;

export const BadgeTitle = styled.h3 `
  font-size: 14px;
  font-weight: 700;
  margin: 0;
  color: #383839;
`

export const BadgeDescription = styled.p `
  font-size: 14px;
  font-weight: 400;
  margin: 0;
  color: #383839;
`

export const ButtonGroup = styled.div `
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-top: 8px;
`;

export const PrimaryButton = styled.button `
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  color: #01AB7D;
  background: white;
  border: 2px solid #01AB7D;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    background: #01AB7D;
    color: white;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(1, 171, 125, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const SecondaryButton = styled.button `
  padding: 14px 28px;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #01AB7D;
  border: 2px solid #01AB7D;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    background: #018f68;
    border-color: #018f68;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(1, 171, 125, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const HeroImageContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInScale} 0.8s ease-out 0.2s both;
  overflow: visible;
  position: relative;
`;

export const HeroImage = styled.img `
  width: 600px;
  height: auto;

  @media (max-width: 968px) {
    width: 100%;
    max-width: 500px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

export const FormCard = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 24px;
  background: white;
  border-radius: 8px;
  border: 1px solid #E4E6EF;
  margin-top: 16px;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

export const InputContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const InputLabel = styled.label `
  font-size: 14px;
  font-weight: 600;
  color: #091D5C;
`;

export const Input = styled.input `
  padding: 14px 16px;
  font-size: 16px;
  border: 2px solid #E4E6EF;
  border-radius: 8px;
  outline: none;
  transition: all 0.3s ease;
  font-family: inherit;

  &:focus {
    border-color: #01AB7D;
    box-shadow: 0 0 0 3px rgba(1, 171, 125, 0.1);
  }

  &::placeholder {
    color: #B5B5C3;
  }

  &:disabled {
    background: #F3F6F9;
    cursor: not-allowed;
  }
`;

export const ActionButton = styled.button `
  padding: 16px 32px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #01AB7D;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover:not(:disabled) {
    background: #017556;
  }

  &:active:not(:disabled) {
    transform: translateY(0);
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export const FormFooter = styled.p `
  font-size: 13px;
  color: #7E8299;
  text-align: center;
  margin: 0;
`;

export const CarouselSection = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${fadeInScale} 0.8s ease-out 0.2s both;
`;

export const CarouselWrapper = styled.div `
  width: 100%;
  max-width: 500px;
  position: relative;
`;

export const SlideContainer = styled.div `
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
  border-radius: 8px;
  background: white;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);

  @media (max-width: 480px) {
    height: 300px;
  }
`;

export const Slide = styled.div `
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: ${props => props.isActive ? 1 : 0};
  transition: opacity 0.5s ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

export const SlideImage = styled.div `
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
  }
`;

export const DotsContainer = styled.div `
  display: flex;
  justify-content: center;
  gap: 8px;
  margin-top: 20px;
`;

export const Dot = styled.button `
  width: ${props => props.isActive ? '32px' : '8px'};
  height: 8px;
  border-radius: 8px;
  border: none;
  background: ${props => props.isActive ? '#01AB7D' : '#E4E6EF'};
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.isActive ? '#01AB7D' : '#B5B5C3'};
  }
`;

export const FreeSolutionSection = styled.section `
  max-width: 1400px;
  margin: 0 auto;
  padding: 60px 40px 20px 40px;
  text-align: center;

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

export const FreeGreenText = styled.span `
  color: #01AB7D;
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 16px;
  display: block;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const SectionTitle = styled.h2 `
  font-size: 32px;
  font-weight: 700;
  color: #1A1A1A;
  text-align: center;
  margin: 0;
  line-height: 1.4;
  margin-left: auto;
  margin-right: auto;

  @media (max-width: 768px) {
    font-size: 24px;
  }
`;

export const CTAButton = styled.button `
  padding: 16px 40px;
  font-size: 18px;
  font-weight: 600;
  color: white;
  background: #01AB7D;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;

  &:hover {
    background: #018f68;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(1, 171, 125, 0.4);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const FeaturesSection = styled.section `
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 32px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 30px 40px 60px 40px;

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

export const FeaturesGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 40px;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 32px;
  }
`;

export const FeatureCard = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding: 32px 24px;
  background: white;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid #E4E6EF;
  gap: 20px;

  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
    border-color: #01AB7D;
  }

  ${SlideImage} {
    width: 100%;
    max-width: 280px;
    height: 200px;
    background: #F8F9FA;
    border-radius: 8px;
    padding: 20px;
  }
`;

export const FeatureTitle = styled.h3 `
  font-size: 18px;
  font-weight: 600;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.4;
`;

export const FeatureDescription = styled.p `
  font-size: 14px;
  line-height: 1.6;
  color: #666666;
  margin: 0;
`;

export const ValueSection = styled.section `
  max-width: 1200px;
  margin: 0 auto;
  padding: 20px 24px;
  background: white;

  @media (max-width: 768px) {
    padding: 60px 24px;
  }
`;

export const ValueContent = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

export const ValueTextContent = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ValueTitle = styled.h2 `
  font-size: 36px;
  font-weight: 700;
  color: #091D5C;
  margin: 0;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const ValueDescription = styled.p `
  font-size: 18px;
  line-height: 1.8;
  color: #5E6278;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ValueList = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const ValueItem = styled.li `
  display: flex;
  align-items: flex-start;
  gap: 12px;
  font-size: 16px;
  color: #5E6278;
  line-height: 1.6;

  svg {
    color: #01AB7D;
    flex-shrink: 0;
    margin-top: 2px;
  }
`;

export const ValueImageContainer = styled.div `
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 40px;
  background: #F3F6F9;
  border-radius: 8px;
  border: 2px solid #E4E6EF;

  @media (max-width: 480px) {
    padding: 24px;
  }
`;

export const PurpleCTASection = styled.section `
  position: relative;
  height: 400px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 40px 80px;
  background: #4F05BE;
  border-radius: 24px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 60px;
  align-items: center;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 40px;
    padding: 60px 24px;
  }
`;

export const PurpleCTALeft = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
  text-align: left;

  @media (max-width: 968px) {
    text-align: center;
    align-items: center;
  }
`;

export const PurpleCTARight = styled.div `
  position: absolute;
  right: 0;
  top: 0;
  translate: -50% 0;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {
    display: none;
  }

  img {
    max-width: 100%;
    height: 400px;
  }

  @media (max-width: 968px) {
    order: -1;
  }
`;

export const PurpleCTATitle = styled.h2 `
  font-size: 38px;
  font-weight: 700;
  color: white;
  margin: 0;
  line-height: 1.3;

  @media (max-width: 768px) {
    font-size: 28px;
  }
`;

export const PurpleCTAList = styled.ul `
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

export const PurpleCTAItem = styled.div `
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-weight: 500;

  svg {
    color: #fff !important;
  }
`;

export const PurpleCTADescription = styled.p `
  font-size: 16px;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.5;
  font-weight: 500;
  margin: 0;
`;

export const PurpleCTAButton = styled.button `
  padding: 16px 40px;
  font-size: 16px;
  font-weight: 600;
  color: #4F05BE;
  background: white;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  width: fit-content;

  &:hover {
    background: #f0f0f0;
    transform: translateY(-2px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.3);
  }

  &:active {
    transform: translateY(0);
  }
`;

export const TermsOptionContainer = styled.div `
  display: flex;
  gap: 8px;
  margin-top: 4px;
`;

export const TermsOptionCheckBox = styled(Checkbox)
`
  margin: 0 !important;
  padding: 0 !important;
  width: 18px;
  height: 18px;

  &.Mui-checked {
    color: #01AB7D !important;
  }

  &:hover {
    background-color: rgba(1, 171, 125, 0.04) !important;
  }
`;

export const TermsOptionLabel = styled.label `
  font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
  font-size: 12px;
  color: #3f4254;
  font-weight: 400;
  line-height: 1.5;

  a {
    color: #01ab7d;
    text-decoration: underline;
    cursor: pointer;
    font-weight: 600;
  }
`;

// How It Works Section
export const HowItWorksSection = styled.section `
  max-width: 1400px;
  margin: 0 auto;
  margin-top: 60px;

  @media (max-width: 768px) {
    padding: 40px 24px;
    margin-top: 40px;
  }
`;

export const HowItWorksHeader = styled.div `
  text-align: center;
  margin-bottom: 40px;
`;

export const HowItWorksGreenText = styled.span `
  color: #01AB7D;
  font-size: 16px;
  font-weight: 600;
  margin-bottom: 12px;
  display: block;
`;

export const HowItWorksTitle = styled.h2 `
  font-size: 32px;
  font-weight: 700;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.4;
  max-width: 850px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const HowItWorksContent = styled.div `
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  padding: 32px;
  border: none;

  @media (max-width: 968px) {
    grid-template-columns: 1fr;
    gap: 32px;
    padding: 0;
  }
`;

export const VideoContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const VideoWrapper = styled.div `
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  background: #E8F5F1;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 1px solid #E4E6EF;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  iframe {
    width: 100%;
    height: 100%;
    border: none;
  }
`;

export const ImageThumbail = styled.img `
  width: 100%;
  height: 100%;
  object-fit: contain;
  object-position: center;
`;

export const PlayButton = styled.div `
  position: absolute;
  width: 64px;
  height: 64px;
  background: #01AB7D;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 12px rgba(1, 171, 125, 0.3);

  &:hover {
    transform: scale(1.1);
    background: #017556;
  }

  svg {
    color: white;
    font-size: 32px;
    margin-left: 4px;
  }
`;

export const VideoFeatures = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 16px;
  padding: 16px;
  background: #F8F9FA;
  border-radius: 8px;
  border: 1px solid #E4E6EF;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const VideoFeatureItem = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  gap: 8px;

  svg {
    color: #01AB7D;
    font-size: 28px;
  }
`;

export const VideoFeatureText = styled.span `
  font-size: 12px;
  color: #5E6278;
  line-height: 1.4;
  font-weight: 500;
`;

export const FAQContainer = styled.div `
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const FAQHeader = styled.div `
  margin-bottom: 8px;
`;

export const FAQTitle = styled.h3 `
  font-size: 20px;
  font-weight: 700;
  color: #1A1A1A;
  margin: 0;
  line-height: 1.4;

  @media (max-width: 768px) {
    font-size: 18px;
  }
`;

export const FAQItem = styled.div `
  background: #FFF;
  border: 1px solid #E4E6EF;
  border-radius: 8px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: #01AB7D;
  }
`;

export const FAQQuestion = styled.div `
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  color: #1A1A1A;
  line-height: 1.5;
  gap: 12px;

  svg {
    color: #7E8299;
    font-size: 20px;
    flex-shrink: 0;
    transition: transform 0.3s ease;
    transform: ${props => props.isOpen ? 'rotate(180deg)' : 'rotate(0deg)'};
  }
`;

export const FAQAnswer = styled.div `
  padding: ${props => props.isOpen ? '0 16px 16px 16px' : '0 16px'};
  max-height: ${props => props.isOpen ? '200px' : '0'};
  overflow: hidden;
  transition: all 0.3s ease;
  font-size: 14px;
  color: #5E6278;
  line-height: 1.6;
`;

export const FAQButton = styled.button `
  padding: 16px 32px;
  width: 100%;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 16px;
  font-weight: 600;
  color: white;
  background: #01AB7D;
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: all 0.3s ease;
  font-family: inherit;
  margin-top: 8px;

  &:hover {
    background: #017556;
  }
`;