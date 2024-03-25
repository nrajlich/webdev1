export default function GridImage({ src, alt, className }) {
    return <img src={src} alt={alt} className={`object-cover w-full h-full object-center ${className}}`} />
}