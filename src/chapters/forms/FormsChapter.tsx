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

const hookBased = `interface MyForm {
  fName: string;
  lName: string;
}
const { register, 
  handleSubmit, 
  formState: {errors, isDirty}
} = useForm<MyForm>({
  mode: "onChange",
  defaultValues: {
    fName: 'Erika',
    lName: 'Musterfrau'
 }});
const onSubmit = (data) => console.log(data);

return (
  <form onSubmit={handleSubmit(onSubmit)}>
    <input defaultValue="test" {...register("fName")} />
    <input {...register("lName", { required: true, minLength: 5 })} />
    {errors.lName.type === "required" && <span>required!</span>}
    {errors.lName.type === "minLength" && <span>Your input is too short!</span>}
    <input type="submit" />
  </form>
);
`;

const validationProperties = `const { register, 
  handleSubmit, 
  formState: {errors}
} = useForm<MyForm>({
  mode: "onChange",
  reValidateMode: "onChange"
});
`;

const errorExample = `{
  fName: {
    type: 'required,
    message: '',
    ref: input#fname,
  }
}
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
            <div>
              <small>(34k stars on github)</small>
            </div>
          </li>
          <li>
            <a href='https://github.com/react-hook-form/react-hook-form' target='_blank' rel='noreferrer'>
              React Hook Form
            </a>
            <div>
              <small>(40k stars on github)</small>
            </div>
          </li>
        </ul>
        <aside className='notes'>Depends on personal preference, used UI libs/frameworks and performance requirements.</aside>
      </Slide>
      <Slide>
        <div>
          <h2>Components based</h2>
          <Code>{componentBased}</Code>
        </div>
      </Slide>
      <Slide>
        <div>
          <h2>Hook based</h2>
          <Code>{hookBased}</Code>
        </div>
        <aside className='notes'>
          <ul>
            <li>Better performance wise. Just updates necessary children.</li>
            <li>very mighty: we'll focus on the basics here</li>
            <li>register a form by using 'useForm': make it typesafe</li>
            <li>you can add custom logic to submit behaviour, but you need to use useForms handleSubmit Method</li>
            <li>
              By using the formState Attribute, you're able to see every field's state: has it been touched? is it dirty? are there any
              errors?
            </li>
          </ul>
        </aside>
      </Slide>
      <Slide>
        <div>
          <h2>Validation with useForm-Hook</h2>
          <ul>
            <li>
              <b>formState: </b>access errors
            </li>
            <li>
              <b>mode: </b>Validation strategy before submitting
            </li>
            <li>
              <b>reValidateMode: </b>Validation strategy after submitting
            </li>
          </ul>
        </div>
        <Code highlightedLines='3,5,6' className='fragment'>
          {validationProperties}
        </Code>
      </Slide>
      <Slide>
        <div>
          <h2>Validation with useForm-Hook - Error Type</h2>
          <ul>
            <li>Object containing the name of your registered fields as keys in case they contain errors</li>
            <li>each field contains the error type, which your're able to react to.</li>
          </ul>
        </div>
        <Code>{errorExample}</Code>
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
      </Slide>
      <Slide>
        <div style={{ display: 'flex', justifyContent: 'center', gap: 24 }}>
          <h2>💪 Exercise</h2>
          <small>⏱️ 45min</small>
        </div>
        <ul>
          <li>
            <code>git checkout 05-routing-chapter</code>
          </li>
          <li>extend your booklist with the possibility to add a new book to your list: Add a button, that opens a form on click</li>
          <li>
            install{' '}
            <a href='https://react-hook-form.com/api/useform/' target='_blank' rel='noreferrer'>
              react-hook-form
            </a>
          </li>
          <li>
            Do not forget to validate your form (<a href='https://react-hook-form.com/docs/useform/register'>Doc will help 🤓</a>)
            <ul>
              <li>inputs should never be empty before the user submits the form</li>
              <li>one input field should require a maxLength of 20 characters</li>
              <li>one input field should require a minLength of 3 characters</li>
              <li>one field should only allow character inputs [a-zA-Z]</li>
            </ul>
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
