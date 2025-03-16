import NewHeader from '../../components/NewHeader'

export default function OneMonth(){
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center'>One Month Course</h1>
            </div>
            <div className='flex'>
                <div className='w-2/3 bg-blue-200'>
                    <h1 className='text-2xl text-center font-black mt-5'>Duration of course – 1 month</h1>
                    <p className='text-lg font-semibold mt-5'>
                        In this class, children will learn how to swim the strokes of 
                        Freestyle (with side breathing) and will be introduced to Backstroke. 
                        The Freestyle side breathing skill may be the most important skill a 
                        child learns in swim lessons. Swim Strokes is drill-oriented and follows 
                        these skill progressions during each class:
                    </p>
                    <ul className='mt-5 ml-5 font-semibold'>
                        <li>
                            Further practice of breath control
                        </li>
                        <li>
                            Flutter kicking with kickboard, and in streamline on tummy and back
                        </li>
                        <li>
                            Stationary side breathing
                        </li>
                        <li>
                            Freestyle with side breathing
                        </li>
                        <li>
                            Float on Back – introduction to back st
                        </li>
                        <li>
                        Dive from block and swim freestyle
                        </li>
                    </ul>
                    <h1 className='text-xl font-extrabold'>
                        Graduate Skills:
                    </h1>
                    <p className='text-lg font-semibold'>
                        Swim 25 M Freestyle, demonstrating at least 3 side breaths,
                         Swim 10 M Backstroke on the surface of the water. Kick 25M 
                         on the back,with a kick board, with the arms at the sides. 
                         Kick 10M on the stomach in streamline, without a kick board.
                    </p>
                    <span className='inline-flex'>
                    <h1 className='text-xl font-extrabold'>
                        NOTES:
                    </h1>
                    <p className='text-lg font-semibold ml-2'>
                        After graduating from this technique,
                        you may choose to take Advanced Swim Strokes.
                    </p>
                    </span>
                   
                </div>

                <div className='w-1/3 bg-blue-300'>
                An Image will Come here
                </div>
            </div>
        </div>
    )
}




