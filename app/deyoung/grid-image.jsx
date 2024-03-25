export default function GridImage({ src, alt, rows = 1, cols = 1 }) {
    return <img src={src} alt={alt} className={`object-cover w-full h-full object-center row-span-${rows} col-span-${cols}`} />
}