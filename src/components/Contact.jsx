import './Contact.css';
import Divider from './Divider';

const Contact = () => {
    return (
        <form className="contact" action="https://public.herotofu.com/v1/5adb50a0-91ea-11ec-8462-6960be7ce578" method="post">
            <h2 className="contact__header">Let's Talk!</h2>
            <Divider isHorizontal={true} />
            <div className="contact__row">
                <input className="contact__input" name="Name" id="name" type="text" placeholder="Name" required />
                <input className="contact__input" name="Email" id="email" type="email" placeholder="Email" required  />
            </div>
            <textarea cols="30" rows="5" className="contact__input contact__message" name="Message" id="message" type="text" placeholder="Message" required/>
            <input className="contact__button interactable" type="submit" value="Send" />
        </form>
    );
}

export default Contact;