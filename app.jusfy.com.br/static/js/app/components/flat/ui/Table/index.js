import * as S from "./Table.styles";
import {
    TABLE_STYLES
} from "./constants";

const Table = ({
    columns,
    data
}) => {
    return <S.Table columns = {
        columns
    }
    data = {
        data
    }
    customStyles = {
        TABLE_STYLES
    }
    />;
};

export default Table;