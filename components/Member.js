import React from 'react'

export default function Member() {
  return (
    <div className=' flex justify-center'>
        <div className=' border-2 rounded-3xl bg-opacity-10 bg-white'>
            <div className=' text-center pt-10 -mb-10 text-[#FF2B06] text-3xl font-bold'>Aryan Kumar</div>
            <div className=' flex justify-evenly items-center p-10'>
                <picture className=' flex flex-col items-center'>
                    <img className=' rounded-full border-[#FF2B06] border-4' src="/image 6.svg" alt="" />
                    <div className=' mt-4 text-[#FF2B06] text-3xl font-bold'>Member:Technical</div>
                </picture>
                <div className=' max-w-2xl px-10 text-justify'>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nesciunt, dignissimos! In libero culpa delectus earum eligendi! Distinctio numquam quia labore, possimus officia necessitatibus dolorum ex beatae, obcaecati alias illo atque laboriosam reprehenderit voluptatum vel in. Magnam enim culpa blanditiis. Accusamus, laboriosam. Consequuntur deleniti enim aut non temporibus sed nemo accusantium voluptatum velit, a rerum iure quisquam. Atque libero deleniti hic aperiam, voluptates temporibus rerum recusandae veritatis quibusdam fugit nisi itaque quod cumque ex, labore voluptatibus. Ullam inventore similique cum cupiditate cumque praesentium, illum et totam dicta eos magni minus soluta aliquam quod, animi explicabo. Nam, provident. Eveniet aliquam fuga pariatur</p>
                    <div className=' text-right mt-10 text-xl font-bold'>READ MORE...</div>
                </div>
            </div>
        </div>
    </div>
  )
}
