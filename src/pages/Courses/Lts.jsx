import Timings from '../../components/Timings'


export default function Lts(){
    return (
        <div className="mx-10 flex-col items-center">
            <div>
            <h1 className="text-5xl"> SEMI-PRIVATE AND PRIVATE SWIMMING LESSONS:</h1>

            </div>
            <div className="mx-5  bg-amber-50">
                <p>(SHOULD BE CONFIRMED PRIOR OF JOINING)
                While our core group swim classes are small, 
                our private and semi-private swimming classes provide a more personalized experience. 
                Private lessons are 60 minutes long and pair one swimmer with one instructor. Semi-private 
                lessons also last 60 minutes, but two swimmers can join the same lesson, which makes these lessons 
                a wonderful fit for siblings or friends who want to swim together. </p>
            </div>
            <div>
               <h1 className="text-4xl" >
               We will follow these basic skill progressions during each class:
               </h1>
            </div>
            <div className="flex">
                <div className="w-1/2">
                    <ul>
                        <li>
                        Graduate Skills
                        </li>
                        <li>
                            Full submersion underwater (always child-led, never forced)
                        </li>
                        <li>
                            Breath holding and breath
                        </li>
                        <li>
                            Graduate Skills
                        </li>
                        <li>
                            Front kicking

                        </li>
                        <li>
                            In-line kicking
                        </li>
                        <li>
                            Paddle stroke
                        </li>
                        <li>
                            Freestyle stroke with a “Pop-up” breath
                        </li>
                    </ul>
                </div>
                <div className="bg-amber-500 w-1/2">
                A picture will come here
                </div>
            </div>

            <div className='bg-blue-200 rounded-4xl my-10 py-5'>
            <h1 className='text-5xl text-center'>BATCHES DETAILS</h1>
            <div className="flex">
                <div className= ' flex flex-col items-center w-1/2'>
                <div>
                    <Timings text='7.00 - 8.00 AM'/>
                </div>
                <div>
                <Timings text='7.00 - 8.00 AM'/>
                    
                </div>
                <div>
                <Timings text='7.00 - 8.00 AM'/>
                    
                </div>
                <div>
                <Timings text='7.00 - 8.00 AM'/>

                </div>
                <div>
                <Timings text='7.00 - 8.00 AM'/>

                </div>
                   
                </div>
                <div className=' flex flex-col items-center w-1/2'>
                <div>
                    <Timings text='7.00 - 8.00 AM'/>
                </div>
                <div>
                <Timings text='7.00 - 8.00 AM'/>
                    
                </div>
                <div>
                <Timings text='7.00 - 8.00 AM'/>
                    
                </div>
                <div>
                <Timings text='7.00 - 8.00 AM'/>

                </div>
                <div>
                <Timings text='7.00 - 8.00 AM'/>

                </div>
                </div>
            </div>
            </div>
<div>
    <h1 className='text-5xl'>
    Every swimmer who joins us will learn to swim at their own pace in a learning environment that emphasizes empowerment and skill retention.
    </h1>
</div>

<div>
    <h1 className='text-5xl'>SWIMMING PROGRAMME FOR ADULTS</h1>
</div>

            </div>
    )
}