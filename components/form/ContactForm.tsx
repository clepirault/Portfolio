import { FC } from 'react';
import { Field, FormikHelpers, Form, Formik } from 'formik';
import Button from '../button/Button';
import { ToastContainer, toast } from 'react-toastify';

type Props = {
  firstname: string;
  lastname: string;
  email: string;
  subject: string;
  message: string;
};

type Values = {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  Subject: string;
  Message: string;
};

const ContactForm: FC<Props> = (props) => {
  const { firstname, lastname, email, subject, message } = props;
  const initialValues = {
    FirstName: '',
    LastName: '',
    EmailAddress: '',
    Subject: '',
    Message: '',
  };

  const onSubmit = async (values: Values, { resetForm }) => {
    try {
      await fetch('/api/sendgrid', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
        body: JSON.stringify(values),
      });
      await toast('Thank you for your message !');
      await resetForm({});
    } catch (error) {
      toast('Something went wrong');
    }
  };

  const input =
    'border-solid border-gray-300 border rounded-sm bg-white w-full';
  const row = 'flex flex-col mb-8';

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting }) => {
        return (
          <div className='flex flex-col items-center w-full'>
            <Form>
              <div className='flex sm:flex-row flex-col'>
                <div className='flex flex-col mr-2 mb-8'>
                  <label htmlFor='FirstName'>{firstname}</label>
                  <Field id='FirstName' name='FirstName' type='text'>
                    {({ field }) => (
                      <input type='text' className={input} {...field} />
                    )}
                  </Field>
                </div>
                <div className={row}>
                  <label htmlFor='LastName'>{lastname}</label>
                  <div>
                    <Field id='LastName' name='LastName'>
                      {({ field }) => (
                        <input type='text' className={input} {...field} />
                      )}
                    </Field>
                  </div>
                </div>
              </div>
              <div className={row}>
                <label htmlFor='EmailAddress'>{email}</label>
                <div>
                  <Field id='EmailAddress' name='EmailAddress'>
                    {({ field }) => (
                      <input type='email' className={input} {...field} />
                    )}
                  </Field>
                </div>
              </div>
              <div className={row}>
                <label htmlFor='Subject'>{subject}</label>
                <div>
                  <Field id='Subject' name='Subject'>
                    {({ field }) => (
                      <input type='text' className={input} {...field} />
                    )}
                  </Field>
                </div>
              </div>
              <div className={row}>
                <label htmlFor='Message'>{message}</label>
                <div>
                  <Field id='Message' name='Message'>
                    {({ field }) => (
                      <textarea rows='5' className={input} {...field} />
                    )}
                  </Field>
                </div>
              </div>
              <div className='my-8'>
                <div className='mb-4'>
                  <Button type='submit'>Submit</Button>
                </div>
                <ToastContainer />
              </div>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};

export default ContactForm;
