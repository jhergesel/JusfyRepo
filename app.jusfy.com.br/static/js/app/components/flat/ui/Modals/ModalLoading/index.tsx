import React, { useEffect, useState, useRef, useMemo } from "react";
import ModalDialog from "../../ModalDialog";
import { toAbsoluteUrl } from "../../../../../../_metronic/_helpers";
import * as S from "./styles";

interface ModalLoadingProps {
  isOpen: boolean;
  duration?: number;
  title?: string;
  subtitle?: string;
  icons: [string | React.ReactNode, string | React.ReactNode, string | React.ReactNode];
  onComplete: () => void;
  externalComplete?: boolean;
}

const ModalLoading: React.FC<ModalLoadingProps> = ({
  isOpen,
  duration = 3000,
  title,
  subtitle,
  icons,
  onComplete,
  externalComplete,
}) => {
  const [progress, setProgress] = useState(0);
  const [currentIconIndex, setCurrentIconIndex] = useState(0);
  const [iconOpacity, setIconOpacity] = useState(1);
  const progressRef = useRef(0);
  const lastUpdateTimeRef = useRef(0);
  const onCompleteCalledRef = useRef(false);
  const onCompleteRef = useRef(onComplete);
  const innerIconTimeout1Ref = useRef<NodeJS.Timeout | undefined>(undefined);
  const innerIconTimeout2Ref = useRef<NodeJS.Timeout | undefined>(undefined);

  onCompleteRef.current = onComplete;

  useEffect(() => {
    if (!isOpen) {
      setProgress(0);
      progressRef.current = 0;
      setCurrentIconIndex(0);
      setIconOpacity(1);
      lastUpdateTimeRef.current = 0;
      onCompleteCalledRef.current = false;
      return;
    }

    const startTime = Date.now();
    let animationFrameId: number;
    let iconTimeout1: NodeJS.Timeout;
    let iconTimeout2: NodeJS.Timeout;
    let completionTimeout: NodeJS.Timeout;

    const throttleMs = 16;

    const animate = () => {
      const elapsed = Date.now() - startTime;
      const progressPercent = Math.min((elapsed / duration) * 100, 100);
      const now = Date.now();
      
      if (now - lastUpdateTimeRef.current >= throttleMs || progressPercent >= 100) {
        setProgress(progressPercent);
        progressRef.current = progressPercent;
        lastUpdateTimeRef.current = now;
      }

      if (progressPercent < 100) {
        animationFrameId = requestAnimationFrame(animate);
      } else {
        setProgress(100);
        progressRef.current = 100;
        if (externalComplete === undefined) {
          completionTimeout = setTimeout(() => {
            onCompleteRef.current?.();
          }, 100);
        }
      }
    };

    animationFrameId = requestAnimationFrame(animate);

    const iconIntervalDuration = duration / 3;
    const fadeDuration = 300;
    
    iconTimeout1 = setTimeout(() => {
      setIconOpacity(0);
      innerIconTimeout1Ref.current = setTimeout(() => {
        setCurrentIconIndex(1);
        setIconOpacity(1);
      }, fadeDuration);
    }, iconIntervalDuration - fadeDuration / 2);

    iconTimeout2 = setTimeout(() => {
      setIconOpacity(0);
      innerIconTimeout2Ref.current = setTimeout(() => {
        setCurrentIconIndex(2);
        setIconOpacity(1);
      }, fadeDuration);
    }, iconIntervalDuration * 2 - fadeDuration / 2);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
      if (iconTimeout1) {
        clearTimeout(iconTimeout1);
      }
      if (iconTimeout2) {
        clearTimeout(iconTimeout2);
      }
      if (innerIconTimeout1Ref.current !== undefined) {
        clearTimeout(innerIconTimeout1Ref.current);
        innerIconTimeout1Ref.current = undefined;
      }
      if (innerIconTimeout2Ref.current !== undefined) {
        clearTimeout(innerIconTimeout2Ref.current);
        innerIconTimeout2Ref.current = undefined;
      }
      if (completionTimeout) {
        clearTimeout(completionTimeout);
      }
    };
  }, [isOpen, duration]);

  useEffect(() => {
    if (isOpen && progress === 100 && externalComplete === true && !onCompleteCalledRef.current) {
      onCompleteCalledRef.current = true;
      const t = setTimeout(() => onCompleteRef.current?.(), 100);
      return () => clearTimeout(t);
    }
  }, [isOpen, progress, externalComplete]);

  const renderedIcon = useMemo(() => {
    const icon = icons[currentIconIndex];
    
    if (typeof icon === "string") {
      return (
        <img
          src={toAbsoluteUrl(icon)}
          width="24"
          height="24"
          alt="Loading icon"
        />
      );
    }
    
    return icon;
  }, [icons, currentIconIndex]);

  return (
    <ModalDialog open={isOpen}>
      <S.Container>
        <S.IconWrapper key={currentIconIndex} style={{ opacity: iconOpacity }}>
          {renderedIcon}
        </S.IconWrapper>

        {title && <S.Title>{title}</S.Title>}
        {subtitle && <S.Subtitle>{subtitle}</S.Subtitle>}

        <S.ProgressContainer>
          <S.ProgressBar>
            <S.ProgressFill progress={progress} />
            <S.ProgressIndicator progress={progress} />
          </S.ProgressBar>
        </S.ProgressContainer>
      </S.Container>
    </ModalDialog>
  );
};

export default ModalLoading;
