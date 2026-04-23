import styled from "styled-components";
import {
    toAbsoluteUrl
} from "../../../../_helpers";
import {
    Link
} from "react-router-dom";

export const MenuList = styled.ul `
  font-family: "Switzer", sans-serif;

  .menu-item span,
  .menu-link .menu-arrow {
    color: #898989 !important;
    white-space: nowrap;

    &:not(.menu-toggle span) {
      padding-left: 12px;
    }
  }

  .menu-item:not(.menu-item-parent):not(.menu-item-open):not(.menu-item-here):not(.menu-item-active):hover
    a {
    background-color: transparent;
  }

  li.divider {
    border-color: #111219;

    &.new-feature::after {
      content: "Novo";
      position: absolute;
      background: #E94F0E;
      color: #FDEDE7;
      right: 20px;
      border-radius: 3px;
      text-align: center;
      width: 40px;
      height: 17px;
      margin-top: 3.5px;
      line-height: 110%;
      font-family: "Noto Sans";
      font-size: 13px;
      font-weight: 400;
      text-transform: none !important;
    }
  }

  .menu-item.menu-item-active > .menu-link,
  .menu-item:hover > .menu-link,
  .menu-item .menu-submenu .menu-item.menu-item-active > .menu-link,
  .menu-item .menu-submenu .menu-item:hover > .menu-link {
    background: linear-gradient(
      90deg,
      rgba(65, 199, 143, 0.12) 0%,
      #41c78f 100%
    ) !important;

    span {
      color: #fff !important;
    }

    img {
      filter: brightness(0) invert(1);
    }
  }

  .menu-item:hover > .my-office {
    background: #111219 !important;

    span {
      color: #898989 !important;
    }
  }

  li > a.uppercase span {
    text-transform: uppercase;
  }

  > li > a {
    background-color: #111219 !important;
    align-items: center !important;
  }

  .menu-subnav li a {
    display: flex;
    align-items: center !important;
  }

  .divisor__collapsed {
    background-color: #898989;
    width: 70%;
    height: 1px;
    display: none;
    margin: 0 auto;
  }
`;

export const MenuListCollapse = styled.li `
  .menu-link:hover i {
    color: #898989 !important;
  }
`;

export const Tools = styled.li `
  > a {
    align-items: center;
  }

  a > span {
    flex: 0 !important;
  }

  svg g [fill] {
    fill: #898989 !important;
  }
`;

export const Content = styled.div `
  display: flex;
  flex-direction: column;

  > span {
    font-size: 14px;
    line-height: 16px;

    &:nth-of-type(2) {
      font-size: 10px;
    }
  }

  ${({ messagesCount }) => messagesCount ? `::before {
    content: "${messagesCount}";
    position: absolute;
    background: #01AB7D;
      color: # fff;
    top: calc(50 % -12 px);
    height: 20 px;
    right: 20 px;
    border - radius: 6 px;
    text - align: center;
    width: 20 px;
    font - family: "Noto Sans";
    font - size: 13 px;
    font - weight: 400;
}
` : `
`}

  ${({ isBeta }) => isBeta ? `::after {
    content: "Beta";
    position: absolute;
    background: #E94F0E;
    width: 45 px;
    color: #FDEDE7;
    top: calc(50 % -12 px);
    height: 21 px;
    right: 20 px;
    border - radius: 3 px;
    text - align: center;
    width: 40 px;
    height: 17 px;
    margin - top: 3.5 px;
    line - height: 110 % ;
    font - family: "Noto Sans";
    font - size: 13 px;
    font - weight: 400;
    ` : `
    `}

  ${({ isNew, isNewness }) =>
    isNew
      ? `::after {
        content: "Novo";
        position: absolute;
        background: #E94F0E;
        width: 45 px;
        color: #FDEDE7;
        top: calc(50 % -12 px);
        height: 21 px;
        right: 20 px;
        border - radius: 3 px;
        text - align: center;
        width: 40 px;
        height: 17 px;
        margin - top: 3.5 px;
        line - height: 110 % ;
        font - family: "Noto Sans";
        font - size: 13 px;
        font - weight: 400;
    }
    `
      : isNewness
      ? `::after {
        content: "Novidade";
        position: absolute;
        background: #c95bef;
        width: 70 px;
        color: white;
        top: calc(50 % -12 px);
        height: 21 px;
        right: 20 px;
        border - radius: 20 px;
        text - align: center;
    }
    `
      : null}
`;

    export const Icon = styled.img `
  filter: invert(56%) sepia(3%) saturate(90%) hue-rotate(336deg) brightness(95%)
    contrast(98%);
`;

    export const BtnCalculator = styled(Link).withConfig({
        shouldForwardProp: (prop) => !["isMinimized"].includes(prop),
    })
    `
  font-family: "Poppins", sans-serif;
  display: flex;
  align-items: center;
  padding: 10px 20px;
  font-weight: 600;
  font-size: 14px;
  justify-content: space-around;
  margin: 1rem auto 0;
  width: 80%;

  ${({ isMinimized }) =>
    isMinimized
      ? "font-size: 8px; padding: 5px;"
      : ` &: before {
        content: "";
        display: inline - block;
        mask: url($ {
            toAbsoluteUrl(
                "/media/sidebar/calculos.svg"
            )
        }) no - repeat 50 % 50 % ;
        mask - size: cover;
        height: 24 px;
        width: 24 px;
        background - color: #fff;
    }
    `}
`;

    export const Anchor = styled.a ``;

    export const BannerListItem = styled.li `
  list-style: none;
  margin-top: 15px;
  padding: 0 26.5px
`;