import React from 'react'

const EmailSection = () => {
  return (
    <section className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-24 relative'>
<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18252.741245101875!2d77.29014588697625!3d28.659326677519502!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfb2d97ff9653%3A0xa236359e084edd43!2sGuru%20Gobind%20Singh%20Indraprastha%20University%20(East%20Delhi%20Campus)!5e0!3m2!1sen!2sin!4v1709991933563!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    allowFullScreen="" 
                    loading="lazy" 
                    referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div>
                <form className='flex flex-col'>
                    <div className='mb-6'>
                    <label htmlFor='email' className='text-white mb-2 block text-sm font-medium'>Your email</label>
                    <input type='email' required id='email' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='nikgil@gmail.com'/>
                    </div>
                    <div className="mb-6">
                        <label htmlFor='subject' className='text-white mb-2 block text-sm font-medium'>Subject</label>
                        <input type='text' required id='subject' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Just saying Hi!'/>
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>Message</label>
                        <textarea name='message' id='message' className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5' placeholder='Lets Talk about...'/>
                    </div>
                    <button type='submit' className='bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full'> Send Message</button>
                </form>
            </div>
    </section>
  )
}

export default EmailSection;