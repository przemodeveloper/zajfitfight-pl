const ContactBlock = ({ email, phone }) => {
  return (
    <div className="flex justify-center items-center text-4xl md:text-5xl text-white flex-col md:flex-row">
      <p className="border-b-4 pb-4 md:border-b-0 md:pb-0 md:border-r-4 md:pr-4">{email}</p>
      <p className="pt-4 md:pt-0 md:pl-4">{phone}</p>
    </div>
  );
};

export default ContactBlock;
