'use client';
import React from 'react';
import styled from 'styled-components';
import { useGlobalState } from "@/app/context/globalProvider";

const Sidebar = () => {
  const theme = useGlobalState();
  console.log(theme);
  return (
    <SidebarStyled>
      Sidebar
    </SidebarStyled>
  )
}

const SidebarStyled = styled.nav`
  position: relative;
  width: ${(props) => props.theme.sidebarWidth};
  background-color: ${(props) => props.theme.colorBg2};

`;

export default Sidebar;
