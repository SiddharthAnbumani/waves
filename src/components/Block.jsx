export default function Block({text, pcolor, hcolor}){
    return (
        <button className={`${pcolor} font-bold text-white rounded-md px-10 transition hover:${hcolor}`}> 
                {text}
        </button>
    )
}