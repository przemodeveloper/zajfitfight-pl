import { object, string } from 'yup';
import { useState } from 'react';
import update from 'immutability-helper';
import ContactForm from './ContactForm';

const formSchema = object().shape({
  name: string().required(),
  email: string().email().required(),
  message: string().required()
});

const ContactSection = () => {
  const [values, setValues] = useState({
    name: '',
    email: '',
    message: ''
  });

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
        <ContactForm
          values={values}
          errors={errors}
          onTextFieldChange={fieldChange}
          onSubmit={onSubmit}
        />
      </div>
    </div>
  );
};

export default ContactSection;
