export type TextBlockType = {
    text: string;
    color: string;
    align: 'left' | 'right' | 'center'
}

const TextBlock = ({ text, color, align }: TextBlockType) => (
    <p style={{ color: color, textAlign: align }}>{text}</p>
);

export default TextBlock