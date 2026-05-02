const Section = ({ children, className = "", ...rest }) => {
  return (
    <section className={className} {...rest}>
      <div className="w-full max-w-11/12 mx-auto py-5 my-5">{children}</div>
    </section>
  );
};

export default Section;
