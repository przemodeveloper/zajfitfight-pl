import { object, string } from 'yup';
import { useRef, useState } from 'react';
import update from 'immutability-helper';
import Form from './Form';
import emailjs from '@emailjs/browser';

const formSchema = object().shape({
  name: string().required('Imię jest wymagane'),
  email: string().email().required('Email jest wymagany'),
  message: string().required('Wiadomość jest wymagana')
});

const ContactForm = () => {
  const formRef = useRef(null);

  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [success, setSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);
  const [errors, setErrors] = useState({});

  const fieldChange = (name, value) => {
    setValues((prevState) =>
      update(prevState, {
        [name]: {
          $set: value
        }
      })
    );
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const isFormValid = await formSchema.isValid(values, { abortEarly: false });

    if (isFormValid) {
      emailjs
        .sendForm(
          process.env.REACT_APP_SERVICE_ID,
          process.env.REACT_APP_TEMPLATE_ID,
          formRef.current,
          process.env.REACT_APP_PUBLIC_KEY
        )
        .then(
          () => {
            setSuccess(true);
            setSubmitError(false);
          },
          () => {
            setSuccess(false);
            setSubmitError(true);
          }
        );

      setValues((prevState) =>
        update(prevState, {
          $set: {
            name: '',
            email: '',
            message: ''
          }
        })
      );
      setErrors((prevState) =>
        update(prevState, {
          $set: {}
        })
      );
    } else {
      formSchema.validate(values, { abortEarly: false }).catch((error) => {
        const errors = error.inner.reduce((acc, error) => {
          return {
            ...acc,
            [error.path]: error.message
          };
        }, {});

        setErrors((prevState) =>
          update(prevState, {
            $set: errors
          })
        );
      });
    }
  };

  return (
    <div id="contact" data-aos="fade-right" data-aos-once="true" className="mt-8">
      <div className="mx-2 sm:mx-0">
        <Form
          values={values}
          errors={errors}
          onTextFieldChange={fieldChange}
          onSubmit={onSubmit}
          formRef={formRef}
          success={success}
          submitError={submitError}
        />
      </div>
    </div>
  );
};

export default ContactForm;
