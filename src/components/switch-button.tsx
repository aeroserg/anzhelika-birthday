
import { FaArrowRight, FaArrowLeft } from 'react-icons/fa'

interface SwitchButtonProps {
    type: 'left' | 'right' | 'muted';
    onClick?: () => void;
}

export default function SwitchButton(props: SwitchButtonProps) {
    switch (props.type) {
        case 'left':
            return (
                <button className={`switch-button_${props.type}`} onClick={props.onClick}> {<FaArrowLeft size={30} style={{opacity:0.6}} />}</button>
            )
        case 'right':
            return (
                <button className={`switch-button_${props.type}`} onClick={props.onClick}> {<FaArrowRight size={30} style={{opacity:0.6}} />}</button>
            )
        case 'muted':
            return (
                <button className={`switch-button_left`}> {<FaArrowLeft size={30} style={{opacity:0.1}} />}</button>
            )
        default:
            return (
                <button>Switch</button>
            )

    };
}