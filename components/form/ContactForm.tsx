import { FC } from 'react';
import { Field, FieldProps, Form, Formik } from 'formik';
import Button from '../button/Button';
import { ToastContainer, toast } from 'react-toastify';

type Props = {
  //
};

type Values = {
  FirstName: string;
  LastName: string;
  EmailAddress: string;
  Subject: string;
  Message: string;
};

const ContactForm: FC<Props> = () => {
  const initialValues = {
    FirstName: '',
    LastName: '',
    EmailAddress: '',
    Subject: '',
    Message: '',
  };

  const onSubmit = async (values: Values, { resetForm }) => {
    console.log(JSON.stringify(values));
    await resetForm({});
    await toast('Thank you for your message');
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      {({ isSubmitting, values }) => {
        return (
          <div className='flex flex-col items-center w-full'>
            <Form>
              <div className='flex sm:flex-row flex-col'>
                <div className='flex flex-col mr-2'>
                  <label htmlFor='FirstName'>First Name</label>
                  <Field id='FirstName' name='FirstName'></Field>
                </div>
                <div className='flex flex-col'>
                  <label htmlFor='LastName'>Last Name</label>
                  <Field id='LastName' name='LastName'></Field>
                </div>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='EmailAddress'>Email Address</label>
                <Field id='EmailAddress' name='EmailAddress'></Field>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='Subject'>Subject</label>
                <Field id='Subject' name='Subject'></Field>
              </div>
              <div className='flex flex-col'>
                <label htmlFor='Message'>Message</label>
                <Field id='Message' name='Message'></Field>
              </div>
              <div>
                <Button type='submit'>Submit</Button>
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
