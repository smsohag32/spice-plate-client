import React, { createRef } from "react";
import bg from "../../assets/bg/bg3.jpg";
import Pdf from "react-to-pdf";
import { useLoaderData } from "react-router-dom";
import Faq from "../../components/Faq";
import useTitle from "../../hooks/useTitle";
const ref = createRef();
const Blogs = () => {
  const faqs = useLoaderData();
  useTitle("Blogs");
  const options = {
    orientation: "landscape",
    unit: "in",
    format: [10, 18],
  };
  return (
    <div>
      <div
        className="h-60"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)),url('${bg}')`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="text-white flex justify-center items-center h-full default-container">
          <Pdf targetRef={ref} options={options} filename="code-example.pdf">
            {({ toPdf }) => (
              <button className="primary-btn" onClick={toPdf}>
                Generate Pdf
              </button>
            )}
          </Pdf>
        </div>
      </div>

      {/* pdf generate content and faq */}
      <div ref={ref} className="w-[100%] h-full">
        <div className="default-container mt-8">
          <h1 className="text-center opacity-50 text-2xl">FAQ</h1>
          <div className="grid mt-5 gap-10">
            {faqs?.map((faq) => (
              <Faq key={faq.id} faq={faq} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
