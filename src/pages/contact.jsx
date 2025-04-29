import PageBanner from "@/src/components/PageBanner";
import Layouts from "@/src/layouts/Layouts";
import { Formik } from 'formik';
import appData from "@data/app.json";
import { useForm, ValidationError } from '@formspree/react';

const Contact = () => {
  return (
    <Layouts fullWidth
    >
        <PageBanner pageTitle={"Entre em contato!"} align={"center"} />
      
{/* map */}
<div style={{
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  marginTop: '40px',
  marginBottom: '60px'
}}>
  <iframe
    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7472.740109314172!2d-47.38307872416385!3d-20.53203455733901!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94b0a605531a365b%3A0xaa475a78bf1929c9!2sR.%20Dr.%20Clemente%20Segundo%20Pinho%2C%20Franca%20-%20SP%2C%2014401-362%2C%20Brazil!5e0!3m2!1sen!2sus!4v1745925797420!5m2!1sen!2sus"
    style={{
      border: 0,
      borderRadius: '10px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
      width: '90%',
      maxWidth: '900px',
      height: '450px'
    }}
    allowFullScreen=""
    loading="lazy"
    referrerPolicy="no-referrer-when-downgrade"
  ></iframe>
</div>
{/* map end */}


        {/* info */}
        <div>
            <ul className="mil-puplication-details mil-up mil-mb-90">
                <li>
                    <span className="mil-upper mil-accent">WhatsApp: </span>&nbsp;&nbsp;
                    <span className="mil-upper mil-dark">+55 16 999882117</span>
                </li>
                <li>
                    <span className="mil-upper mil-accent">E-mail: </span>&nbsp;&nbsp;
                    <span className="mil-upper mil-dark">agnyhhelena9gmail.com</span>
                </li>
            </ul>
        </div>


        <div className="mil-section-title mil-up">
            <div className="mil-divider" />
            <h3>Vamos conversar</h3>
        </div>

        {/* contact */}
        <div id="contact" className="mil-p-90-60">
        <Formik
            initialValues = {{ email: '', name: '', message: '' }}
            validate = { values => {
                const errors = {};
                if (!values.email) {
                    errors.email = 'Required';
                } else if (
                    !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
                ) {
                    errors.email = 'Invalid email address';
                }
                return errors;
            }}
            onSubmit = {( values, { setSubmitting } ) => {
                const form = document.getElementById("contactForm");
                const status = document.getElementById("contactFormStatus");
                const data = new FormData();

                data.append('name', values.name);
                data.append('email', values.email);
                data.append('message', values.message);

                fetch(form.action, {
                    method: 'POST',
                    body: data,
                    headers: {
                        'Accept': 'application/json'
                    }
                }).then(response => {
                    if (response.ok) {
                        status.innerHTML = "Thanks for your submission!";
                        form.reset()
                    } else {
                        response.json().then(data => {
                            if (Object.hasOwn(data, 'errors')) {
                                status.innerHTML = data["errors"].map(error => error["message"]).join(", ")
                            } else {
                                status.innerHTML = "Oops! There was a problem submitting your form"
                            }
                        })
                    }
                }).catch(error => {
                    status.innerHTML = "Oops! There was a problem submitting your form"
                });

                setSubmitting(false);
            }}
            >
            {({
                values,
                errors,
                touched,
                handleChange,
                handleBlur,
                handleSubmit,
                isSubmitting,
                /* and other goodies */
            }) => (
            <form onSubmit={handleSubmit} id="contactForm" action={appData.settings.formspreeURL} className="row align-items-center">
                <div className="col-lg-6 mil-up">
                    <input 
                      type="text" 
                      placeholder=" Seu nome"
                      name="name" 
                      required="required" 
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.name} 
                    />
                </div>
                <div className="col-lg-6 mil-up">
                    <input 
                      type="email" 
                      placeholder="Seu Email"
                      name="email"
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.email} 
                    />
                </div>
                <div className="col-lg-12 mil-up">
                    <textarea 
                      placeholder="Sua mensagem"
                      name="message" 
                      required="required"
                      onChange={handleChange}
                      onBlur={handleBlur}
                      value={values.message} 
                    />
                </div>
                <div className="col-lg-8">
                    <p className="mil-up mil-mb-30"><span className="mil-accent">*</span> I promise not to disclose your personal information to third parties.</p>
                </div>
                <div className="col-lg-4">
                    <div className="mil-adaptive-right mil-up mil-mb-30">
                        <button type="submit" className="mil-btn mil-sm-btn">
                            <span>Enviar mensagem</span>
                        </button>
                    </div>
                </div>
                <div className="form-status" id="contactFormStatus" />
            </form>
            )}
            </Formik>
        </div>
        {/* contact end */}
    
    </Layouts>
  );
};
export default Contact;
