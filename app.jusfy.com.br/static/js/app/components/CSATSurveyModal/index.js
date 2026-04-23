import React from "react";

import {
    toAbsoluteUrl
} from "../../../_metronic/_helpers";
import SVG from "react-inlinesvg";

import * as S from "./styles";
import {
    optionsScore
} from "./constants";
import {
    useServeyModal
} from "./useSurveyModal";

export function CSATSurveyModal() {
    const {
        is_csat_modal_open,
        closeModal,
        onSubmit,
        score,
        setScore,
        feedback_text,
        setFeedback_text,
        errorScore,
        feature_name,
        pretty_name,
    } = useServeyModal();

    return is_csat_modal_open ? ( <
        S.ModalDialogCustom open >
        <
        S.ContentModal >
        <
        S.CloseIcon onClick = {
            closeModal
        } >
        <
        SVG src = {
            toAbsoluteUrl("/media/flat/close.svg")
        }
        /> <
        /S.CloseIcon> <
        S.ContentQuestion >
        <
        S.Question > {
            pretty_name
        } <
        span className = "text-danger" > & nbsp;* < /span> <
        /S.Question>

        <
        S.ContentOptionsScore > {
            optionsScore.map(option => ( <
                S.ScoreValue key = {
                    option.value
                }
                onClick = {
                    () => setScore(option.value)
                }
                isActive = {
                    option.value === score
                }
                error = {
                    errorScore
                } >
                {
                    option.label
                } <
                /S.ScoreValue>
            ))
        } <
        /S.ContentOptionsScore> {
            errorScore ? < S.Error > Selecione a sua resposta < /S.Error> : null} <
                /S.ContentQuestion>

                <
                S.ContentQuestion >
                <
                S.Question >
                Qual é o principal motivo para sua nota ? < span > (opcional) < /span> <
                /S.Question>

                <
                S.FeedbackTextarea
            value = {
                feedback_text
            }
            onChange = {
                evt => setFeedback_text(evt.target.value)
            }
            /> <
            /S.ContentQuestion> <
            S.ContentButton >
                <
                S.ButtonSend
            onClick = {
                    () => onSubmit({
                        feature_name,
                        score,
                        feedback_text
                    })
                } >
                Enviar resposta <
                /S.ButtonSend> <
                /S.ContentButton> <
                /S.ContentModal> <
                /S.ModalDialogCustom>
        ): ( <
            > < />
        );
    }