export type ImageBlockType = {
    src: string;
    alt?: string;
}

const ImageBlock = ({ src, alt = "" }: ImageBlockType) => (
    <img className="rounded-md shadow-md transition-transform transform-gpu hover:-rotate-1" src={src} alt={alt} />
);

export default ImageBlock