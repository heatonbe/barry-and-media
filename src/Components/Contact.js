import React, { Component } from 'react';
import * as emailjs from 'emailjs-com';

class Contact extends React.PureComponent {
   constructor(props) {
     super(props);
     this.state = {
       name: '',
       email: '',
       subject: '',
       message: ''
     };
 
     this.handleSubmit = this.handleSubmit.bind(this);
     this.resetForm = this.resetForm.bind(this);
     this.handleChange = this.handleChange.bind(this);
   }

   handleSubmit(event) {
      event.preventDefault();
      const { name, email, subject, message } = this.state;
      const templateParams = {
         from_name: name,
         from_email: email,
         to_name: 'barret@barry-and.media',
         subject,
         message: message,
      };
      emailjs.send(
         'service_hbszo9k',
         'template_njrfdbp',
         templateParams,
         'user_54SoZ3gSxixymwzafLU3x'
      )
      this.resetForm();
   };

   resetForm() {
      this.setState({
         name: '',
         email: '',
         subject: '',
         message: '',
      });
   }

   handleChange(event) {
      this.setState({ [event.target.name]: event.target.value });
   }

   render() {
      const { name, email, subject, message, sentMessage } = this.state;

      if (this.props.data) {
         var myName = this.props.data.name;
         var street = this.props.data.address.street;
         var city = this.props.data.address.city;
         var state = this.props.data.address.state;
         var zip = this.props.data.address.zip;
         var phone = this.props.data.phone;
         var contentMessage = this.props.data.contactmessage;
      }

      return (
         <section id="contact">
            <div className="row section-head">
               <div className="two columns header-col">
                  <h1><span>Get In Touch.</span></h1>
               </div>
               <div className="ten columns">
                  <p className="lead">{contentMessage}</p>
               </div>
            </div>
            <div className="row">
               <div className="eight columns">
                  <form onSubmit={this.handleSubmit}>
                     <fieldset>
                        <div>
                           <label htmlFor="contactName">Name <span className="required">*</span></label>
                           <input type="text" defaultValue="" value={name} size="35" id="contactName" name="name" onChange={this.handleChange} />
                        </div>
                        <div>
                           <label htmlFor="contactEmail">Email <span className="required">*</span></label>
                           <input type="text" defaultValue="" value={email} size="35" id="contactEmail" name="email" onChange={this.handleChange} />
                        </div>
                        <div>
                           <label htmlFor="contactSubject">Subject</label>
                           <input type="text" defaultValue="" value={subject} size="35" id="contactSubject" name="subject" onChange={this.handleChange} />
                        </div>
                        <div>
                           <label htmlFor="contactMessage">Message <span className="required">*</span></label>
                           <textarea value={message} cols="50" rows="15" id="contactMessage" name="message" onChange={this.handleChange}></textarea>
                        </div>
                        <div>
                           <button name="submit" className="submit">Submit</button>
                           <span id="image-loader">
                              <img alt="" src="images/loader.gif" />
                           </span>
                        </div>
                     </fieldset>
                  </form>

                  <div id="message-warning"> Error boy</div>
                  <div id="message-success">
                     <i className="fa fa-check"></i>Your message was sent, thank you!<br />
                  </div>
               </div>
               <aside className="four columns footer-widgets">
                  <div className="widget widget_contact">

                     <h4>Address and Phone</h4>
                     <p className="address">
                        {myName}<br />
                        {street} <br />
                        {city}, {state} {zip}<br />
                        <span>{phone}</span>
                     </p>
                  </div>
                  {/* <div className="widget widget_tweets">
                  <h4 className="widget-title">Latest Tweets</h4>
                  <ul id="twitter">
                     <li>
                        <span>
                        This is Photoshop's version  of Lorem Ipsum. Proin gravida nibh vel velit auctor aliquet.
                        Aenean sollicitudin, lorem quis bibendum auctor, nisi elit consequat ipsum
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">2 Days Ago</a></b>
                     </li>
                     <li>
                        <span>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam,
                        eaque ipsa quae ab illo inventore veritatis et quasi
                        <a href="#">http://t.co/CGIrdxIlI3</a>
                        </span>
                        <b><a href="#">3 Days Ago</a></b>
                     </li>
                  </ul>
		         </div> */}
               </aside>
            </div>
         </section>
      );
   }
}

export default Contact;
