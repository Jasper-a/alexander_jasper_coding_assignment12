import React,{FC} from 'react';
import styled from 'styled-components';

import {TableProps} from "./Table.types"

const StyledTable = styled.table<TableProps>`
    line-height: 1;
    font-size: 15px;
    font-weight: 700;
    font-weight: bold;
    border-radius: 3px;
    display: inline-block;
    padding: 9px 30px 11px;
    border: 0;
    color: #000000;
    background-color: ${props => props.backgroundColor};
    cursor: ${props => props.disabled ? "not-allowed" : "pointer"};
    opacity: ${props => props.disabled ? 0.5 : 1};
`;

const Table: FC<TableProps> = ({disabled, text, backgroundColor, onClick, ...props}) => {
    return (
        <StyledTable type="table" onClick={onClick} disabled={disabled} backgroundColor={backgroundColor} {...props}>
            {text}
        </StyledTable>
    )
};

export default Table;