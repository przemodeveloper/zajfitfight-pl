import styles from './Form.module.scss';

const Form = ({ onTextFieldChange, onSubmit, values, formRef }) => {
  return (
    <form onSubmit={onSubmit} ref={formRef}>
      <div className="flex flex-col sm:flex-row mb-4">
        <fieldset className="mr-4 w-full mb-4 sm:mb-0 text-white">
          <input
            type="text"
            id="name"
            name="name"
            className={`text-2xl w-full bg-transparent ${styles.input}`}
            placeholder="Imię"
            value={values.name}
            onChange={(e) => onTextFieldChange('name', e.target.value)}
          />
        </fieldset>

        <fieldset className="w-full text-white">
          <input
            type="email"
            id="email"
            name="email"
            className={`text-2xl bg-transparent w-full ${styles.input}`}
            placeholder="Email"
            value={values.email}
            onChange={(e) => onTextFieldChange('email', e.target.value)}
          />
        </fieldset>
      </div>

      <fieldset className="text-white mb-4">
        <textarea
          type="text"
          id="message"
          name="message"
          className={`w-full text-2xl bg-transparent  ${styles.input}`}
          rows="7"
          placeholder="Wiadomość..."
          value={values.message}
          onChange={(e) => onTextFieldChange('message', e.target.value)}></textarea>
      </fieldset>

      <div className="flex justify-end">
        <button
          type="submit"
          className="bg-secondary hover:bg-blue-700 text-white font-bold py-2 px-4 border-primary border-4">
          Wyślij
        </button>
      </div>
    </form>
  );
};

export default Form;
