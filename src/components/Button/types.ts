export interface IButtonProps {
    title: string;
    onClick?: React.MouseEventHandler<HTMLButtonElement>;
    // hidden: boolean;
    disabled: boolean;
}