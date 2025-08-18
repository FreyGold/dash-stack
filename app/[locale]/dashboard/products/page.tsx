import FeaturedSlider from "@/components/dashboard/products/featuredSlider/FeaturedSlider";
import ProductSlider from "@/components/dashboard/products/productSlider/ProductSlider";

function page() {
  return (
    <div>
      <FeaturedSlider />
      <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-7 grid-cols-1 pb-7 mt-10 mx-auto">
        <ProductSlider />
        <ProductSlider />
        <ProductSlider />
      </div>
    </div>
  );
}

export default page;
