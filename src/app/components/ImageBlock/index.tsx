export type ImageBlockType = {
    src: string;
    alt?: string;
}

const ImageBlock = ({ src, alt = "" }: ImageBlockType) => (
    <img src={src} alt={alt} className='rounded-md shadow-md transition-transform transform-gpu hover:-rotate-1'/>
);

export default ImageBlock