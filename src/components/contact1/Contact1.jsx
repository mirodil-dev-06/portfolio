import React, { useState } from 'react';
import '../contact1/Contact1.css';
import 'react-phone-number-input/style.css';
import PhoneInput from 'react-phone-number-input';
import { Container, DefaultButton } from '../../utils/Utils';
import { FaMap, FaEnvelope, FaPhone, FaUser, FaCopy } from 'react-icons/fa';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact1 = () => {
    const [uName, setUName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (event) => {
        setUName(event.target.value);
    };

    const handlePhoneChange = (value) => {
        setPhone(value);
    };

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleMessageChange = (event) => {
        setMessage(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const telegramBotId = '6456711758:AAGhN0zQzQG9Xfr6gRG6pD5xcJmlTN_eIOc';
        const chatId = '5084402296';

        const telegramMessage = `Ismi: ${uName}\nPhone: ${phone}\nEmail: ${email}\nIzoh: ${message}`;

        const settings = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'cache-control': 'no-cache',
            },
            body: JSON.stringify({
                chat_id: chatId,
                text: telegramMessage,
            }),
        };

        fetch(`https://api.telegram.org/bot${telegramBotId}/sendMessage`, settings)
            .then((response) => {
                if (response.ok) {
                    toast.success('Message sent successfully!');
                } else {
                    toast.error('Failed to send message.');
                }
            })
            .catch((error) => {
                toast.error('Failed to send message.');
                console.error(error);
            });

        setUName('');
        setPhone('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='contact1' id='contact'>
            <Container>
                <h1 className="contact1__title">
                    <span>Get</span>  In Touch
                </h1>
                <div className="contact__item">
                    <div className="contact__item-left">
                        <h2 className='contact__item-left__title'>DON'T BE SHY !</h2>
                        <p className='contact__item-left__subtitle'>Feel free to get in touch me. I am always open to new project <br /> created ideas. Get in touch to organize and develop your <br /> business</p><br />
                        <div className="contact__item-left__box">
                            <FaMap />
                            <span>
                                <h3>ADDRESS POINT</h3>
                                <a href="https://maps.app.goo.gl/SxZDssxSRdDvUqbR6" target='_blank'>Tashkent / Uzbekistan</a>
                            </span>
                        </div>
                        <div className="contact__item-left__box">
                            <FaEnvelope />
                            <span>
                                <h3>EMAIL ME</h3>
                                <a href="mirodil.mavlonov.2023@gmail.com" target='_blank'>mirodil.mavlonov.2023@gmail.com</a>
                            </span>
                        </div>
                        <div className="contact__item-left__box">
                            <FaPhone />
                            <span>
                                <h3>CALL ME</h3>
                                <a href="tel:912210623">+998 93 421 16 23</a>
                            </span>
                        </div>
                    </div>
                    <form onSubmit={handleSubmit} className="contact__item-right">
                        <div className="contact__item-right__inp">
                            <FaUser />
                            <input
                                type="text"
                                value={uName}
                                onChange={handleNameChange}
                                placeholder="Ism Familiya"
                                required
                            />
                        </div>
                        <div className="contact__item-right__inp">
                            <PhoneInput
                                placeholder="Enter phone number"
                                value={phone}
                                onChange={handlePhoneChange}
                                defaultCountry="UZB"
                                required
                            />
                        </div>
                        <div className="contact__item-right__inp">
                            <FaEnvelope />
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Elektron manzil"
                                required
                            />
                        </div>
                        <div className="contact__item-right__inp">
                            <FaCopy />
                            <textarea
                                value={message}
                                onChange={handleMessageChange}
                                placeholder="Qisqacha murojatingiz haqida yozing!"
                                required
                            ></textarea><br />
                        </div>
                        <DefaultButton text='Send Message' type="submit" />
                    </form>
                </div>
            </Container>
            <ToastContainer />
        </div>
    );
}

export default Contact1;
