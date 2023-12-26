import { useState, useEffect } from "react";

function Carosal() {
  let imageUrl = [
    "https://th.bing.com/th/id/OIP.6sPhq9sCxNc4cCq-XW70mwHaE8?w=258&h=180&c=7&r=0&o=5&dpr=1.5&pid=1.7",
    "https://photomarketingwizard.com/wp-content/uploads/2018/02/ecommerce-product-photography-25.jpg",
    "https://th.bing.com/th/id/OIP.RFnEKabBollap8uJieMHGAHaE8?rs=1&pid=ImgDetMain",
    "https://petapixel.com/assets/uploads/2017/03/product_feat.jpg",
  ];

  const [imgIndex, setImageIndex] = useState(0);

  function handleNext() {
    imgIndex === imageUrl.length - 1
      ? setImageIndex(0)
      : setImageIndex((prev) => prev + 1);
  }

  function handlePrevious() {
    imgIndex === 0
      ? setImageIndex(imageUrl.length - 1)
      : setImageIndex((prev) => prev - 1);
  }

  useEffect(() => {
    let timeOutId = setTimeout(() => {
      handleNext();
    }, 2000);

    return () => clearTimeout(timeOutId);
  }, [imgIndex]);

  return (
    <>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            height: "20rem",
            alignItems: "center",
          }}
        >
          <button
            style={{ height: "1.5rem", marginRight: ".5rem" }}
            onClick={handlePrevious}
          >
            previous
          </button>

          {imageUrl.map((url, index) => {
            if (imgIndex === index) {
              return (
                <img
                  src={url}
                  alt={`image${index}`}
                  key={index}
                  style={{
                    width: "30rem",
                    height: "20rem",
                  }}
                ></img>
              );
            }
          })}

          <button
            style={{ height: "1.5rem", marginLeft: ".5rem" }}
            onClick={handleNext}
          >
            next
          </button>
        </div>
      </div>
    </>
  );
}

export default Carosal;
