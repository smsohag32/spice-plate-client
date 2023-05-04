import React from "react";

const Faq = ({ faq }) => {
  const { author, question, answer } = faq;
  return (
    <article className="w-full border-2 p-5 leading-4">
      <h3 className="font-bold text-2xl md:text-3xl w-[80%] py-4">
        {question}
      </h3>
      <p className="mb-5 ms-3">
        <small>{answer}</small>
      </p>
      <p className=" ms-5 md:mr-10 primary-text">_{author}</p>
    </article>
  );
};

export default Faq;
