import React from 'react'

function Membercard() {
  return (

    <div>
      <div className=' flex justify-center text-[#FF2B06] font-semibold text-4xl py-10 font-inter' >Aryan Kumar</div>
      <div className='flex justify-center pb-32'>
        <div className=' relative border-2 rounded-3xl  w-8/12 bg-blend-overlay  bg-opacity-10 bg-white'>
          <div class=" absolute -top-20 -left-20 mix-blend-exclusion blur-sm h-40 w-40 bg-[#FF2B06] rounded-full"></div>
          <div class=" absolute -bottom-20 -right-20 mix-blend-exclusion blur-sm h-40 w-40 bg-[#FFFFFF] rounded-full"></div>
          <div className='flex justify-between px-28 pt-20 '>
          <picture>
            <img width={350} src="/Group 33.svg" alt="" />
          </picture>
          <div className='text-center'>
            <div className=' text-4xl text-[#FF2B06] font-bold mb-16 font-inter'>Member Technical</div>
            <div className=' flex justify-center mb-6 items-center'>
              <picture>
                <img className=' w-8 mr-2' src="/Vector.svg" alt="" />
              </picture>
              <div className=' text-2xl font-inter font-semibold'> : Aryan Kumar</div>
            </div>
            <div className=' flex justify-center mb-6 items-center'>
              <picture>
                <img className=' w-8 mr-2' src="/Vector (1).svg" alt="" />
              </picture>
              <div className=' text-2xl font-inter font-semibold'> : Aryan Kumar</div>
            </div>
            <div className=' flex justify-center mb-6 items-center'>
              <picture>
                <img className=' w-8 mr-2' src="/Vector (2).svg" alt="" />
              </picture>
              <div className=' text-2xl font-inter font-semibold'> : Aryan Kumar</div>
            </div>
            <div className=' flex justify-center mb-6 items-center'>
              <picture>
                <img className=' w-8 mr-2' src="/Vector (3).svg" alt="" />
              </picture>
              <div className=' text-2xl font-inter font-semibold'> : Aryan Kumar</div>
            </div>
          </div>
        </div>
        {/* No UI Provided for lower component */}
        <div className=' mx-10 text-justify py-20'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum ut saepe nulla iste non, quidem, eum sit perferendis hic a sequi, perspiciatis vero. Culpa amet neque voluptatibus cupiditate quo suscipit nam sunt? Ab impedit harum placeat sequi numquam? Corporis hic excepturi sint quibusdam consequuntur, perferendis omnis beatae consectetur nisi dolor blanditiis, dignissimos itaque deleniti obcaecati nobis. l Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus iure architecto error perspiciatis officiis repellat eligendi voluptatibus est, ut dolorum harum soluta natus, asperiores provident suscipit at molestiae autem praesentium delectus minima! Inventore ad nesciunt sequi distinctio, delectus nisi ab alias asperiores odit pariatur voluptatibus non omnis ratione? Beatae eaque saepe fugiat assumenda aperiam distinctio quidem.
        </div>
      </div>
    </div>
  </div>
  )
}

export default Membercard
