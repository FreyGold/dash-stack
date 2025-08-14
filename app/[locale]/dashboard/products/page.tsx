// import FeaturedSlider from "@/components/dashboard/products/featuredSlider/FeaturedSlider";
import ProductSlider from "@/components/dashboard/products/productSlider/ProductSlider";

function page() {
  return (
    <div>
      {/* <FeaturedSlider /> */}
      <div className="flex justify-between pb-7 mt-10">
        <ProductSlider />
        <ProductSlider />
        <ProductSlider />
      </div>
    </div>
  );
}

export default page;
