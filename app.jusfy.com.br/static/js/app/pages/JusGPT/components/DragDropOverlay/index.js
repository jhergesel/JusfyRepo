import React from "react";
import AttachFileIcon from '@mui/icons-material/AttachFile';
import * as S from "./styles";

const DragDropOverlay = ({
    isDragOver
}) => {
    if (!isDragOver) return null;

    return ( <
        S.Overlay >
        <
        S.DropZone >
        <
        S.IconContainer >
        <
        AttachFileIcon sx = {
            {
                fontSize: '40px',
                color: '#01AB7D',
                transform: 'rotate(45deg)'
            }
        }
        /> <
        /S.IconContainer>

        <
        S.TextContainer >
        <
        S.MainText >
        Solte o documento aqui <
        /S.MainText> <
        S.SubText >
        Adicione documentos, imagens ou arquivos < br / >
        <
        S.SizeLimit >
        Tamanho máximo: 50 MB <
        /S.SizeLimit> <
        /S.SubText> <
        /S.TextContainer>

        <
        S.ProgressIndicator >
        <
        S.ProgressBar / >
        <
        /S.ProgressIndicator> <
        /S.DropZone> <
        /S.Overlay>
    );
};

export default DragDropOverlay;