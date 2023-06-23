import styles from './Form.module.scss';

const Form = ({
  onSubmit,
  formRef,
  errors,
  submitError,
  success,
  sendingInProgress,
  fields,
  values,
  onTextFieldChange
}) => {
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div className="flex flex-col">
        {fields.map((field) => {
          return (
            <fieldset key={field._uid} className="mr-4 w-full mb-4 text-white">
              <field.tag
                name={field.name}
                placeholder={field.placeholder}
                className={`text-2xl w-full bg-transparent ${styles.input}`}
                type={field.type}
                id={field.name}
                value={values?.[field.name]}
                onChange={(e) => onTextFieldChange(field.name, e.target.value)}
                {...(field.tag === 'textarea' && { rows: 7 })}
              />

              {errors?.[field.name] && <p>{errors?.[field.name]}</p>}
            </fieldset>
          );
        })}
      </div>

      {submitError && !success && !Object.values(errors).length && (
        <p className="text-white mb-4">Coś poszło nie tak, spróbuj ponownie później.</p>
      )}

      {!submitError && success && !Object.values(errors).length && (
        <p className="text-white mb-4">Wiadomość została wysłana, niedługo się odezwiemy!</p>
      )}

      <div className="flex justify-end">
        <button
          disabled={sendingInProgress}
          type="submit"
          className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 border-primary border-4 disabled:opacity-75">
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default Form;
