import React from 'react';
import styled, { css } from 'styled-components';

interface IArrowProps {
    direction: string;
    match: string;
    id?: string;
}

/**
 * An SVG arrow
 * @param direction left | right | top | bottom     the direction the arrow points
 * @param match     a key to a color stored in the current theme to fill the svg path
 * @param id    a unique id for the svg
 * @constructor
 */
const Arrow: React.FC<IArrowProps> = ({ direction, match, id }) => {
    return (
        <SVG
            direction={direction}
            version="1.1"
            id={id || `arrow_${direction}`}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 477.175 477.175"
        >
            <g>
                <Path
                    match={match}
                    d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
                        c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
                        "
                />
            </g>
        </SVG>
    );
};

export default Arrow;

const SVG = styled.svg`
    width: 16px;
    height: 16px;
    ${({ direction }) => {
        if (direction === 'left') {
            return css`
                transform: rotate(180deg);
            `;
        } else if (direction === 'right') {
            return css`
                transform: rotate(0deg);
            `;
        } else if (direction === 'top') {
            return css`
                transform: rotate(270deg);
            `;
        } else if (direction === 'bottom') {
            return css`
                transform: rotate(90deg);
            `;
        }
    }};
`;

const Path = styled.path`
    ${({ theme, match }) => css`
        fill: ${theme.colors[match]};
    `};
`;
