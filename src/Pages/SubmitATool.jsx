import React, {useState} from 'react'
import diamondLatticeImg from "../Assets/diamond-lattice.png";
import { Link } from 'react-router-dom';
import { FaCheck } from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import FaqContent from '../Components/FaqContent';



function SubmitATool() {

    const[showContent, setShowContent] = useState(false);

    const toggleAnswer = (e) => {
        console.log(e)
        setShowContent(!showContent)
    }

    console.log(showContent);
  return (
    <div className='w-full  bg-[#E1EFFA] mt-[75px] '>
   {/* Reach million section */}
      <div className='w-full px-8 pt-4'>
      <div className='text-gray-500'><Link to="/">Home</Link> / Submit AI Tool</div>
        <div className='w-full flex flex-col items-center'>
            
            <h1 className='text-[45px] pt-4 font-bold'>Reach Millions Of AI Enthusiasts</h1>
            <h4 className='text-center w-[50%] text-gray-500 py-6 text-lg'>Futurepedia is the #1 collection of AI tools for work, dedicated to showcasing the
             best AI tools, GPTs and apps to over 400k proactive professionals every month. Choose 
             the listing option that best aligns with your product. Feel free to <Link className="text-blue-600"> book time with us </Link>
              if you have questions.</h4>
        </div>
      </div>


      {/* Card */}

      <div className='px-16 flex justify-between mt-8'>
      {/* card1 */}
        <div className='bg-white w-[32%] h-[566px] px-8 py-8 rounded-3xl border border-gray-300'>
            <button className='border-2 py-2 px-5 font-medium text-gray-900 rounded-full border-black'>Verified Listing</button>
            <div className='flex justify-between border-b border-gray-400/30 items-center py-4'>
                <h2 className='text-4xl font-bold'>$247</h2> 
                <h3 className='text-blue-500 text-sm font-medium'>Why we charge?</h3>
            </div>

            <div className='border-b border-gray-400/30' >
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Published within 7 days</h2>
            <h2 className='flex gap-3 pb-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> No click guarantee</h2>
            </div>

            <div className='py-4'>
            <h1 className='text-gray-500 font-bold text-sm'>Listing includes</h1>
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Verified check mark</h2>
            <h2 className='flex gap-3  text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Featured video</h2>
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Case studies</h2>
            <h2 className='flex gap-3  text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> FAQ Section</h2>
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Indexed on Google</h2>
            </div>

            <button className='bg-blue-500 hover:bg-blue-400 w-full py-3 font-medium text-white rounded-full'>Submit your tool</button>
        </div>

        {/* card2 */}
        <div className='bg-white w-[32%] h-[602px] px-8 border border-gray-300 py-8 rounded-3xl'>
            <button className='border-2 py-2 px-5 font-medium text-gray-900 rounded-full border-green-500'>Verified Listing + 1000 clicks</button>
            <div className='flex justify-between border-b border-gray-400/30 items-center py-4'>
                <h2 className='text-4xl font-bold'>$497</h2> 
                <h3 className='text-blue-500 text-sm font-medium'>Why we charge?</h3>
            </div>

            <div className='border-b border-gray-400/30' >
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Published within 2 business days</h2>
            <h2 className='flex gap-3 pb-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> 1,000+ unique click guarantee
</h2>
            </div>

            <div className='py-4'>
            <h1 className='text-gray-500 font-bold text-sm'>Listing includes</h1>
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Verified check mark</h2>
            <h2 className='flex gap-3  text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Featured video</h2>
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Case studies</h2>
            <h2 className='flex gap-3  text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> FAQ Section</h2>
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Indexed on Google</h2>
            <h2 className='flex gap-3 pb-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Free newsletter feature ($399 value)</h2>
            </div>

            <button className='bg-blue-500 hover:bg-blue-400 w-full py-3 font-medium text-white rounded-full'>Submit your tool</button>
        </div>

        {/* card3 */}
        <div className='bg-white w-[32%] h-[474px] border border-gray-300 px-8 py-8 rounded-3xl'>
            <button className='border-2 py-2 px-5 font-medium text-gray-900 rounded-full border-black'>Enterprise Packages</button>
            <div className='flex justify-between border-b border-gray-400/30 items-center py-4'>
                <h2 className='text-4xl font-bold'>Custom Pricing</h2> 
                
            </div>
            <div>
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Dedicated account manager</h2>
            <h2 className='flex gap-3  text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Sponsorship bundles and discounts</h2>
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/>Conbranded webinars or workshops</h2>
            <h2 className='flex gap-3  text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Custom editorial content</h2>
            <h2 className='flex gap-3 py-4 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> YouTube Sponsorships</h2>
            <h2 className='flex gap-3 pb-8 text-sm text-gray-500'><FaCheck className="text-blue-500 text-lg"/> Creator and influencer campaigns</h2>
            </div>

            <button className='bg-blue-500 hover:bg-blue-400 w-full py-3 font-medium text-white rounded-full'>Submit your tool</button>
        </div>
        
      </div>


    <div className='w-full flex justify-center mt-24 pb-24 '>
        <div className='w-[50%]'>
        <h1 className='text-xl font-bold pb-2'>Disclosure of term</h1>
        <p className='text-gray-500'>All tool submissions subject to editorial approval. Tools may be denied or removed from the site if at any time, the tool’s features are deemed inappropriate for our audience.
</p></div>
    </div>


    <div className='flex flex-col items-center pb-28'>
        <h1 className='text-2xl pb-8 font-bold'>Frequently asked questions</h1>
        <div className='w-[50%] bg-white pt-8 rounded-xl shadow-2xl'>
                <FaqContent
                question="Why do you charge a verification fee?"
          answer="In the dynamic AI technology field, we encounter various tools, 
          from hobbyist to commercial. Our priority is providing users with a high-quality,
           reliable selection. We have a verification process with a fee, ensuring quality and 
           integrity. This fee covers quality checks, supports unbiased reviews, and allows refunds
            if standards aren't met." />

<FaqContent
                question="How can I request an update to my listing?"
          answer="If you've paid for your listing you can request updates using this form. Updates generally take between 2-3 business days." />
        
        
        <FaqContent
                question="Does the click guarantee have an expiration?"
          answer="We aim to deliver the 1000 clicks within the first month after booking however during busy times, where more campaigns are active, it can take longer. We will issue a pro rata refund if 1000 clicks aren't delivered within 1 year." />


<FaqContent
                question="Can I purchase more clicks?"
          answer="Yes, please inquire about custom pricing through this meeting link to discuss this with us." />
            <FaqContent
                question="I have a large budget. What options do I have?"
          answer="We generally recommend a blended sponsorship across website, newsletter and youtube. The best thing to do is reach out to sales inquire here, because we can offer custom solutions as well (ie. webinars)." />
            <FaqContent
                question="What is your refund policy?"
          answer="We guarantee a full, automatic refund if your AI is not accepted by our editorial team. Once a tool is accepted and published, refunds are no longer valid." />
            <FaqContent
                question="Do you offer clicks for free?"
          answer="Yes, once your tool is approved and published, it can be discovered through site search, category pages, guides and resources forever. If you paid for guaranteed clicks, our team will aim to identify the best opportunities for enhanced visibility to help your tool acquire users." />
            <FaqContent
                question="Do you offer free listings?"
          answer="Yes. Please complete this application. It can take up to 30 days for the editorial team to review and make a determination. If accepted, there are limitations to the listing features and we are unable to provide support or edits to listings." />


        </div>
    </div>

    </div>
  )
}

export default SubmitATool