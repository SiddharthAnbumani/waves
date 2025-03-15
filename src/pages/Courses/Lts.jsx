import Timings from '../../components/Timings'


export default function Lts(){
    return (
        <div className="mx-10 flex-col items-center">
            <div className="mt-5 mb-15">
            <h1 className='text-4xl text-center font-bold font-serif'>LEARN TO SWIM COURSES</h1>
            </div>
            <div>
                <div className='flex '>
                    <div className='w-2/3 bg-blue-500'>

                    <div className="flex justify-evenly">
                    <div>     
                        <button className='bg-white text-blue-800 font-bold px-10 py-5 rounded-md my-5 w-70'>
                        LEARN TO SWIM KIDS
                        </button>
                    </div>
                    <div>     
                    <button className='bg-white text-blue-800 font-bold px-10 py-5 rounded-md border-t-cyan-50 my-5 w-70'>
                        LEARN TO SWIM KIDS
                        </button>
                    </div>
                    </div>

                    <div className="flex justify-evenly">
                    <div>     
                    <button className='bg-white text-blue-800 font-bold px-10 py-5 rounded-md border-t-cyan-50 my-5 w-70'>
                        LEARN TO SWIM KIDS
                        </button>
                    </div>
                    <div>     
                    <button className='bg-white text-blue-800 font-bold px-10 py-5 rounded-md border-t-cyan-50 my-5 w-70'>
                        LEARN TO SWIM KIDS
                        </button>
                    </div>
                    </div>
                    </div>

                    <div className='w-1/3 bg-blue-700'>
                    A picture wil come Here
                    </div>
                </div>
                </div>
           

            <div>
            <h1 className="text-5xl"> SEMI-PRIVATE AND PRIVATE SWIMMING LESSONS:</h1>

            </div>
            <div className="mx-5  bg-amber-50 text-lg">
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
                <div className="w-1/2 text-lg">
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
    <h1 className='text-4xl font-bold text-center'>
    Every swimmer who joins us will learn to swim at their own pace in a learning environment that emphasizes empowerment and skill retention.
    </h1>
</div>

<div className='my-10'>
    <h1 className='text-5xl text-center'>SWIMMING PROGRAMME FOR ADULTS</h1>

    <p className='mx-10 text-lg mt-5'>
    We understand that everyone enjoys or gets the most out of our LEARN TO SWIM programme. 
    That’s why we give you the option of a bespoke swimming membership for you to develop 
    further.Swimming is great exercise, too. It lets you get a full-body workout without 
    putting too much strain through your joints and you’ll burn calories and build muscle 
    at the same time.With an Everyone Active swimming membership, you get complete access
    to our swimming pool. Whether you want to pound the lanes to up your fitness, hone your technique, 
    or just enjoy the water. The choice is yours and there aresessions to suit everybody.
    </p>

    <div className='flex justify-center my-10'>
    <div className='flex flex-col'>
        <button className='w-120 bg-blue-500 px-10 py-4 font-extrabold border-2 rounded-md text-center'>
            ONE MONTH MEMBERSHIP
        </button>
        <button className='w-120 bg-white px-10 py-4 font-extrabold border-2 rounded-md text-center'>
            THREE MONTHS MEMBERSHIP (QUARTERLY)
        </button>
        <button className='w-120 bg-blue-500 px-10 py-4 font-extrabold border-2 rounded-md text-center'>
            SIX MONTHS MEMBERSHIP (HALF YEARLY)
        </button>
        <button className='w-120 bg-white px-10 py-4 font-extrabold border-2 rounded-md text-center'>
            ANNUAL MEMBERSHIP
        </button>
        <button className='w-120 bg-blue-500 px-10 py-4 font-extrabold border-2 rounded-md text-center'>
            MEMBERSHIP WITH COACH PROGRAMME
        </button>
    </div>
</div>

</div>

</div>
    )
}