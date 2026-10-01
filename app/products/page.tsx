import { Suspense } from "react";
import ProductsContent from "./ProductsContent";

export default function ProductsPage() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center bg-gray-50">
          <p className="text-sm font-semibold text-gray-500">
            Đang tải sản phẩm...
          </p>
        </div>
      }
    >
      <ProductsContent />
    </Suspense>
  );
}