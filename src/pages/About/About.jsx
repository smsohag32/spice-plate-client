import React from "react";
import useTitle from "../../hooks/useTitle";

const About = () => {
  useTitle("About");

  return (
    <div>
      <div className="default-container">
        <h1 className="text-2xl md:4xl py-10 font-bold">About us</h1>
        <hr />
        <div className="flex flex-col mt-5 gap-4">
          <article>
            The Bangladeshi Chefs Recipes section of Spice Palate offers a rich
            collection of authentic recipes from talented Bangladeshi chefs.
            Bangladesh has a diverse culinary tradition, influenced by the
            country's history, geography, and cultural heritage. From the spicy
            curries of Chittagong to the delicate fish dishes of Sylhet,
            Bangladeshi cuisine is a true reflection of the country's vibrant
            and varied culture.
          </article>
          <article>
            At Spice Palate, we're committed to showcasing the best of
            Bangladeshi cuisine. Our collection of recipes features some of the
            most popular and beloved dishes from across the country, including
            classic dishes like biryani, dal, and bhuna khichuri, as well as
            lesser-known delicacies like shutki maach bhuna and chitol muitha.
          </article>
          <article>
            Our Bangladeshi chefs are passionate about sharing their knowledge
            and love of food with others. They bring years of experience and
            expertise to each recipe, ensuring that every dish is authentic,
            delicious, and easy to follow. Each recipe is accompanied by
            detailed instructions, helpful tips, and mouth-watering images,
            making it easy for you to recreate the dish at home. Whether you're
            a seasoned cook or a beginner, the Bangladeshi Chefs Recipes section
            of Spice Palate is the perfect destination for exploring the rich
            and diverse world of Bangladeshi cuisine. With its vast collection
            of recipes, talented chefs, and user-friendly platform, Spice Palate
            is the ultimate resource for food lovers who want to discover new
            flavors and techniques.
          </article>
        </div>
      </div>
    </div>
  );
};

export default About;
