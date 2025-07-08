import React from 'react';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';
import SocialLink from './SocialLink';

const Contact = () => {
    return (
        <section id="contact" className="py-20 bg-gray-100 text-white dark:bg-gray-800">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16 animate-fade-in">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
                    <div className="w-20 h-1 bg-indigo-600 mx-auto"></div>
                    <p className="mt-4 max-w-2xl mx-auto">Have a project in mind or want to discuss potential collaborations? Feel free to reach out!</p>
                </div>
                <div className="flex flex-col md:flex-row animate-fade-in" style={{ animationDelay: '0.2s' }}>
                    <div className="md:w-1/2 mb-10 md:mb-0 md:pr-8">
                        <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                        <div className="space-y-6">
                            <ContactInfo label="Location" value="Bhopal, India" />
                            <ContactInfo label="Email" value="yamini@example.com" />
                            <ContactInfo label="Phone" value="+1 234 567 8900" />
                        </div>
                        <div className="mt-12">
                            <h3 className="text-2xl font-semibold mb-6">Connect With Me</h3>
                            <div className="flex space-x-6">
                                <SocialLink />
                                <SocialLink />
                                <SocialLink />
                                <SocialLink />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-1/2 md:pl-8">
                        <ContactForm />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
