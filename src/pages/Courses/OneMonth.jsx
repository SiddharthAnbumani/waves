import NewHeader from '../../components/NewHeader'

export default function OneMonth(){
    return (
        <div>
            <div>
                <h1 className='text-5xl font-bold text-center'>One Month Course</h1>
            </div>
            <div className='flex'>
                <div className='w-2/3'>
                    <h1 className='text-2xl'>Duration of course – 1 month</h1>
                    <p className=''>
                        In this class, children will learn how to swim the strokes of 
                        Freestyle (with side breathing) and will be introduced to Backstroke. 
                        The Freestyle side breathing skill may be the most important skill a 
                        child learns in swim lessons. Swim Strokes is drill-oriented and follows 
                        these skill progressions during each class:
                    </p>
                    <ul>
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
                    </ul>
                </div>

                <div className='w-1/3 bg-blue-300'>
                An Image will Come here
                </div>
            </div>
        </div>
    )
}


