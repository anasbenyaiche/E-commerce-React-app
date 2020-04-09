import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export const OptionContainerStyle = css`
  padding: 10px 15px;
  cursor: pointer;
`;

export const HeaderContainer = styled.div`
  height: 70px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin-bottom: 25px;
`;
export const LogoContainer = styled(Link)`
  height: 100%;
  width: 75px;
  padding: 25px;
`;
export const OptionsContainer = styled.div`
  width: 50%;
  height: 100%;
  align-items: center;
  display: flex;
  justify-content: flex-end;
`;
export const OptionLink = styled(Link)`
${OptionContainerStyle}
`
export const OptionDiv = styled.div`
${OptionContainerStyle}
`