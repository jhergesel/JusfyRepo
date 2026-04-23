import {
    components
} from "react-select";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

/*export const customSelectStyle = {
    control: (provided, { isSelected, isFocused }) => ({
        ...provided,
        borderColor: (isSelected || isFocused) ? '#41C78F' : '#E4E6EF',
        '&:hover': {
            borderColor: '#41C78F'
        }  
    }),
    option: (provided, {isSelected, isFocused}) => ({
        ...provided,
        backgroundColor: (isSelected ? '#41C78F' : (isFocused ? '#E9F8F1' : '#FFF')),
    })
}*/

export const customSelectStyle = theme => ({
    ...theme,
    borderRadius: 10,
    zIndex: 9999,
    colors: {
        ...theme.colors,
        primary25: "#fff",
        primary: "#41C78F",
    },
});

export const customSelectStyleItem = theme => ({
    ...theme,
    borderRadius: "5px",
    borderWidth: "1px",
    borderColor: "#CAC9CF",
    fontFamily: "Noto Sans",
    colors: {
        ...theme.colors,
        primary25: "#fafafa",
        primary: "#01AB7D",
    },
    control: (provided, state) => ({
        ...provided,
        borderColor: state.isFocused ? "#01AB7D" : "#CAC9CF",
        "&:hover": {
            borderColor: "#01AB7D",
        },
        boxShadow: state.isFocused ? "0 0 0 1px #01AB7D" : provided.boxShadow,
        height: "40px",
    }),
    option: (provided, state) => ({
        ...provided,
        backgroundColor: state.isSelected ?
            "#E4F6EF" :
            state.isFocused ?
            "#E9F8F1" :
            "#FFF",
        color: state.isSelected ? "#000" : "#000",
        padding: "10px",
        "&:hover": {
            backgroundColor: state.isSelected ? "#E4F6EF" : "#E9F8F1",
        },
    }),
    singleValue: (provided, state) => ({
        ...provided,
        color: "#000",
    }),
    dropdownIndicator: provided => ({
        ...provided,
        color: "#808080 !important",
    }),
    menu: (provided, state) => ({
        ...provided,
        boxShadow: "0 4px 16px rgba(0, 0, 0, 0.1)",
        borderRadius: "5px",
        marginTop: "4px",
    }),
    menuList: (provided, state) => ({
        ...provided,
        paddingBottom: "10px",
    }),
});

const DropdownIndicator = props => {
    const {
        selectProps
    } = props;
    const rotation = selectProps.menuIsOpen ? "rotate(180deg)" : "rotate(0deg)";
    return ( <
        components.DropdownIndicator { ...props
        } >
        <
        ArrowDropDownIcon style = {
            {
                transform: rotation,
                transition: "transform 0.2s ease",
            }
        }
        /> <
        /components.DropdownIndicator>
    );
};

export const customComponents = {
    DropdownIndicator,
};