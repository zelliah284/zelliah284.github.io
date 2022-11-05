import Footer from '../Components/Footer';



function Contact() {
  return (
    <>
         <form>
          <header className='header'>
        <h1>Contact Me</h1>
        <p>Hi there contact me to ask about anything you have in mind</p>
        </header>
        <div className='name-input'>
        <div className='first-name'>
          <label>First Name</label>
          <input type="text" placeholder="Enter your first name" id="first_name" required/>
          </div>
          <div className='last-name'>
          <label>Last Name</label>
          <input type="text" placeholder="Enter your Last name" id="last_name" required/>
        </div>
        </div> 

         <div className='email'>
        <label>Email</label>
        <input type="email" placeholder="yourname@email.com" id="email" required/>
        </div>

        <div className='message'>
        <label>Message</label>
        <textarea id="message" title="message" placeholder="Send me a message and i'll reply you as soon as possible" required />
         </div>

         <div className='checkbox'>
        <input type="checkbox" title="check" />
        <label>You agree to providing your data to Odunewu Elizabeth who may contact you.</label>
        </div>

        <button type="submit" id="btn__submit">Send Message</button>
      </form>
      <hr />
      <Footer />
        </>
  )
}
export default Contact;