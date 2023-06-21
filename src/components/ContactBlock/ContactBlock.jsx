const ContactBlock = ({ email, phone }) => {
  return (
    <div className="flex justify-center items-center text-4xl md:text-5xl text-white flex-col md:flex-row">
      <p className="md:border-r-4 md:pr-4">{email}</p>
      <p className="md:pl-4">{phone}</p>
    </div>
  );
};

export default ContactBlock;
