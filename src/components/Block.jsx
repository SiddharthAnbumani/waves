export default function Block(text, pcolor, hcolor){
    return (
        <button className={`bg-${pcolor} font-bold font-white rounded-md px-10 hover:bg-${hcolor} transition`}> 
                {text}
        </button>
    )
}