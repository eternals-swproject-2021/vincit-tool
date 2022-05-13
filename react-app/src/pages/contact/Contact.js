import React, { useRef } from 'react'
import emailjs from 'emailjs-com'
import Swal from 'sweetalert2'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './contact.css'

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_f58ydd9', 'template_urme8pn', form.current, 'mGj89G4WsnsSUt1jc')
            .then((result) => {
                Swal.fire({
                    title: 'Email Successfully Sent',
                    icon: 'success'
                })
            }, (error) => {
                Swal.fire({
                    title: 'Email Failed to Send',
                    icon: 'error'
                })
                console.log(error.text);
            });
        e.target.reset()
    };

    const notify = () => toast.info("Sending a message...", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
    });

    return (
        <div>
            <h1 className="headline">Contact Us</h1>
            <div className="contact">
                <div className="container contact__container">
                    <div>
                        <div>
                            <h2 className="subheader-line">Let's get<br />in touch! </h2>
                            <h5><i>We'd love to hear more from you...</i></h5>
                        </div>
                        <div className="subheader-content">
                            Please write us a message, or please feel free to visit the source code on our  <a href="https://github.com/eternals-swproject-2021/vincit-tool" target="_blank">GitHub</a> repository.
                        </div>
                    </div>

                    <form ref={form} onSubmit={sendEmail} className="contact-form">
                        <input type="text" name="" placeholder="Your Full Name" required />
                        <input type="email" name="email" placeholder="Your Email" required />
                        <textarea name="message" rows="7" placeholder="Your Message" required ></textarea>
                        <button type="submit" className="btn-submit" onClick={notify}>Send A Message </button>
                        <ToastContainer
                            position="top-right"
                            autoClose={5000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss={false}
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Contact