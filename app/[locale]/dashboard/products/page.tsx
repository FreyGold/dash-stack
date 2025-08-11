import FeaturedSlider from "@/components/dashboard/products/featuredSlider/FeaturedSlider";
import ProductSlider from "@/components/dashboard/products/productSlider/ProductSlider";

function page() {
  return (
    <div>
      <FeaturedSlider />
      <div className="bg-amber-600 mt-10">
        <ProductSlider />
      </div>
    </div>
  );
}

export default page;
