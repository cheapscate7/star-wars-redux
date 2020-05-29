import Arrow from '../icons/Arrow';
import React from 'react';
import CurvedButton from './CurvedButton';

// Scroll the window to a passed ref
const scrollToRef = (ref) => {
    if (ref) {
        window.scrollTo(0, ref.current.offsetTop);
    } else {
        throw new Error('No ref passed to scrollToRef()');
    }
};

interface IGotoButtonProps {
    label: string;
    gotoRef: any;
}

const GotoButton: React.FC<IGotoButtonProps> = ({ label, gotoRef }) => {
    const executeScroll = () => {
        scrollToRef(gotoRef);
    };
    return (
        <CurvedButton aria-label={'Go to ' + label} onClick={executeScroll}>
            <Arrow
                direction={'bottom'}
                match={'coloured_button_foreground'}
                id={'arrow_goto_characters_button'}
            />
        </CurvedButton>
    );
};

export default GotoButton;
