import React from 'react';

const Faq = () => {
    return (
        <div className='my-10 lg:mx-0 mx-4'>
             <h2 className='font-bold text-2xl text-center'> Frequently Asked Questions </h2>
             <div className="grid sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-6 gap-4 mt-6">
                <div className="bg-red-600 rounded-lg"></div>
                <div className="sm:col-span-2 md:col-span-3 lg:col-span-4">
                    <div className="collapse collapse-arrow bg-gray-200 border-base-300">
                        <input type="radio" name="my-accordion-2" defaultChecked />
                        <div className="collapse-title font-semibold">What is Budget Tourism?</div>
                        <div className="collapse-content text-sm">
                            Click the "Sign Up" button in the top right corner and follow the registration process.
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-gray-200 border-base-300 my-2">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">What is Budget Tourism?</div>
                        <div className="collapse-content text-sm">
                            Click on "Forgot Password" on the login page and follow the instructions sent to your email.
                        </div>
                    </div>
                    <div className="collapse collapse-arrow bg-gray-200 border-base-300">
                        <input type="radio" name="my-accordion-2" />
                        <div className="collapse-title font-semibold">The Tourism Budget of a Country?</div>
                        <div className="collapse-content text-sm">
                            Go to "My Account" settings and select "Edit Profile" to make changes.
                        </div>
                    </div>
                </div>
                <div className="bg-red-500 rounded-lg"></div>
            </div>
        </div>
    );
};

export default Faq;