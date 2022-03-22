import React from 'react';
import Slide from '../../components/reveal/Slide';

const componentBased = `
   <Formik
     initialValues={{ email: '', password: '' }}
     validate={true}
     onSubmit={console.log}
   >
     {({ isSubmitting }) => (
       <Form>
         <Field type="email" name="email" />
         <ErrorMessage name="email" component="div" />
         <button type="submit" disabled={isSubmitting}>
           Submit
         </button>
       </Form>
     )}
   </Formik>
`;

const hookBased = `
 const { register, handleSubmit, errors } = useForm();
 const onSubmit = (data) => console.log(data);

 return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input defaultValue="test" {...register("fName")} />
      <input {...register("lName", { required: true })} />
      {errors.exampleRequired && <span>required!</span>}
      <input type="submit" />
    </form>
 );
`;

const FormsChapter: React.FC = () => {
  return (
    <>
      <Slide>
        <Slide isMain>
          <h2>7. Forms</h2>
        </Slide>
        <Slide>
          <p>
            More of a personal preference,
            <br />
            but there are a few popular libs:
          </p>
          <ul className='fragment'>
            <li>
              <a href='https://github.com/jaredpalmer/formik'>Formik</a>
            </li>
            <li>
              <a href='https://github.com/react-hook-form/react-hook-form'>React Hook Form</a>
            </li>
            <li>
              <a href='https://github.com/final-form/react-final-form'>React Final Form</a>
            </li>
          </ul>
          <aside className='notes'>Depends on personal preference, used UI libs/frameworks and performance requirements.</aside>
        </Slide>
        <Slide>
          <div>
            Components based
            <pre className=''>
              <code data-trim data-noescape data-line-numbers>
                {componentBased}
              </code>
            </pre>
          </div>
        </Slide>
        <Slide>
          <div>
            Hooks based
            <pre className=''>
              <code data-trim data-noescape data-line-numbers>
                {hookBased}
              </code>
            </pre>
          </div>
          <aside className='notes'>Better performance wise. Just updates necessary children.</aside>
        </Slide>
        <Slide>
          <h2>Further Reads</h2>
          <ul>
            <li>
              <a href='https://dev.to/pmbanugo/looking-for-the-best-react-form-library-in-2021-it-s-probably-on-this-list-e2h'>
                📄 Comparison of four form libraries
              </a>
            </li>
          </ul>
          <aside className='notes'>Recommend Kent C. Dotts blog posts. You won&apos;t need redux anymore!</aside>
        </Slide>
        <Slide>
          <h2>💪 Exercise</h2>
        </Slide>
      </Slide>
    </>
  );
};

export default FormsChapter;
