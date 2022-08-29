import React from 'react';
import Chapter, { GenericChapterProps } from '../../components/helper/Chapter';
import Code from '../../components/helper/Code';
import Slide from '../../components/reveal/Slide';

const componentBased = `<Formik
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

const hookBased = `const { register, handleSubmit, errors } = useForm<MyForm>();
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

const FormsChapter: React.FC<GenericChapterProps> = (props: GenericChapterProps) => {
  return (
    <Chapter {...props}>
      <Slide>
        <p>
          More of a personal preference,
          <br />
          but there are a few popular libs:
        </p>
        <ul className='fragment'>
          <li>
            <a href='https://github.com/jaredpalmer/formik' target='_blank' rel='noreferrer'>
              Formik
            </a>
          </li>
          <li>
            <a href='https://github.com/react-hook-form/react-hook-form' target='_blank' rel='noreferrer'>
              React Hook Form
            </a>
          </li>
        </ul>
        <aside className='notes'>Depends on personal preference, used UI libs/frameworks and performance requirements.</aside>
      </Slide>
      <Slide>
        <div>
          Components based
          <Code>{componentBased}</Code>
        </div>
      </Slide>
      <Slide>
        <div>
          Hooks based
          <Code>{hookBased}</Code>
        </div>
        <aside className='notes'>Better performance wise. Just updates necessary children.</aside>
      </Slide>
      <Slide>
        <h2>Further Reads</h2>
        <ul>
          <li>
            <a
              href='https://dev.to/pmbanugo/looking-for-the-best-react-form-library-in-2021-it-s-probably-on-this-list-e2h'
              target='_blank'
              rel='noreferrer'
            >
              📄 Comparison of four form libraries
            </a>
          </li>
        </ul>
        <aside className='notes'>Recommend Kent C. Dotts blog posts. You won&apos;t need redux anymore!</aside>
      </Slide>
      <Slide>
        <h2>💪 Exercise</h2>
        <ul>
          <li>
            extend your booklist with the possibility to add a new book to your list. (For example, add some button that shows a form
            onClick())
          </li>
          <li>
            install{' '}
            <a href='https://react-hook-form.com/api/useform/' target='_blank' rel='noreferrer'>
              useForm
            </a>
          </li>
          <li>
            In case you're finished early: try to use{' '}
            <a href='https://formik.org/docs/overview' target='_blank' rel='noreferrer'>
              Formik
            </a>{' '}
            🤓
          </li>
        </ul>
      </Slide>
    </Chapter>
  );
};

export default FormsChapter;
