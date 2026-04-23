import { useState, useEffect } from "react";
import { useLocation, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import * as S from "./TwoFactor.styles";
import Button from "../../../../components/flat/ui/Button";
import { TailSpin } from "react-loader-spinner";
import * as auth from "../../_redux/authRedux";
import { verifyTwoFactor, resendTwoFactorCode } from "../../_redux/authCrud";

interface PageProps {
  setUserLoginId: (loginId: number | null) => void;
  login: (authToken: string) => void;
}

interface LocationState {
  email: string;
  userId: number;
  password?: string;
  tempToken: string;
}

function TwoFactorPage(props: PageProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [isResending, setIsResending] = useState(false);
  const [otpCode, setOtpCode] = useState("");
  const [error, setError] = useState({ isError: false, message: "" });
  const [successMessage, setSuccessMessage] = useState("");
  const [otpInputKey, setOtpInputKey] = useState(0);
  const [retryAt, setRetryAt] = useState<Date | null>(null);
  const [countdown, setCountdown] = useState<string | null>(null);

  const location = useLocation<LocationState>();
  const history = useHistory();

  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState<number | null>(null);
  const [password, setPassword] = useState("");
  const [tempToken, setTempToken] = useState("");

  useEffect(() => {
    if (location.state) {
      setEmail(location.state.email);
      setUserId(location.state.userId);
      setPassword(location.state.password || "");
      setTempToken(location.state.tempToken);
    } else {
      history.push("/auth/login");
    }
  }, [location, history]);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const updateCountdown = () => {
      if (retryAt) {
        const now = Date.now();
        const retryTime = retryAt.getTime();
        const difference = retryTime - now;

        if (difference > 0) {
          const totalSeconds = Math.ceil(difference / 1000);
          setCountdown(
            `Aguarde ${totalSeconds} segundo${totalSeconds !== 1 ? "s" : ""}`
          );
        } else {
          setCountdown(null);
          setRetryAt(null);
          if (timer) clearInterval(timer);
        }
      }
    };

    if (retryAt) {
      updateCountdown();
      timer = setInterval(updateCountdown, 1000);
    }

    return () => {
      if (timer) clearInterval(timer);
    };
  }, [retryAt]);

  const handleOtpComplete = (code: string) => {
    setOtpCode(code);
    setError({ isError: false, message: "" });
    setSuccessMessage("");
    handleSubmit(code);
  };

  const handleSubmit = async (codeToSubmit: string) => {
    setError({ isError: false, message: "" });
    setSuccessMessage("");

    if (codeToSubmit.length !== 6) {
      setError({
        isError: true,
        message: "Por favor, preencha todos os dígitos do código.",
      });
      return;
    }

    setIsLoading(true);

    try {
      const { data: responseData } = await verifyTwoFactor(
        codeToSubmit,
        tempToken
      );

      if (responseData.status === "success") {
        const finalToken = responseData.data.token;
        props.setUserLoginId(userId);
        props.login(finalToken);
        history.push("/");
      } else {
        setError({
          isError: true,
          message:
            responseData.message || "A verificação falhou. Tente novamente.",
        });
        setOtpInputKey(prevKey => prevKey + 1);
      }
    } catch (err) {
      setError({
        isError: true,
        message:
          err.response?.data?.message ||
          "Código inválido! Confirme seu número e tente novamente.",
      });
      setOtpInputKey(prevKey => prevKey + 1);
    } finally {
      setIsLoading(false);
    }
  };

  const handleResendCode = async () => {
    setIsResending(true);
    setError({ isError: false, message: "" });
    setSuccessMessage("");
    try {
      const { data: responseData } = await resendTwoFactorCode(tempToken);

      if (responseData?.data?.accessToken) {
        setTempToken(responseData.data.accessToken);
      }
      setSuccessMessage("Novo código enviado com sucesso!");
      setRetryAt(null);
    } catch (error) {
      if (error?.response?.data?.data?.retryAt) {
        setRetryAt(new Date(error.response.data.data.retryAt));
      }

      setError({
        isError: true,
        message:
          error?.response?.data?.message ??
          "Falha ao reenviar o código. Tente novamente.",
      });
    } finally {
      setIsResending(false);
    }
  };

  return (
    <>
      <S.Header>
        <img src="/media/logos/logo.svg" alt="Logo Jusfy" />
      </S.Header>

      <S.Wrapper>
        <S.Section>
          <S.Container>
            <S.Div>
              <S.Title>Enviamos um código para seu e-mail</S.Title>
              <S.Subtitle>
                Insira o código de verificação enviado para o seu e-mail. Caso
                não encontre, verifique sua pasta de spam.
              </S.Subtitle>
              <S.StyledBadge content={email} />
            </S.Div>
            <S.StyledInputOtp
              key={otpInputKey}
              onComplete={handleOtpComplete}
              disabled={isLoading || isResending}
              isError={error.isError}
              errorMessage={error.message}
            />
            {successMessage && (
              <S.SuccessMessage>{successMessage}</S.SuccessMessage>
            )}
            <Button
              width="100%"
              padding="10px 40px"
              borderRadius="5px"
              hoverBackgroundColor="#007656"
              onClick={() => handleSubmit(otpCode)}
              disabled={isLoading || isResending}
            >
              <S.ButtonText>
                {isLoading ? (
                  <TailSpin
                    visible={true}
                    height="20"
                    width="20"
                    color="#ffffff"
                    ariaLabel="tail-spin-loading"
                    wrapperStyle={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    wrapperClass=""
                  />
                ) : (
                  "Acessar plataforma"
                )}
              </S.ButtonText>
            </Button>
            <S.Div>
              <S.Span>
                Precisa de um novo código?{" "}
                <S.ResendLink
                  isDisabled={isLoading || isResending || !!retryAt}
                  onClick={e => {
                    if (isLoading || isResending || !!retryAt) {
                      e.preventDefault();
                      return;
                    }
                    handleResendCode();
                  }}
                >
                  {countdown
                    ? countdown
                    : isResending
                    ? "Reenviando..."
                    : "Reenviar código"}
                </S.ResendLink>
              </S.Span>
            </S.Div>
          </S.Container>
        </S.Section>
        <S.Banner src="/media/flat/mail-inbox.svg" />
      </S.Wrapper>
    </>
  );
}

export { TwoFactorPage as UnconnectedTwoFactorPage };
export default connect(null, auth.actions)(TwoFactorPage);
