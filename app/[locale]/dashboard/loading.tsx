function Loading() {
   return (
      <div className="space-y-6 animate-pulse">
         {/* Page title skeleton */}
         <div className="mb-6">
            <div className="h-8 bg-gray-200 rounded w-48"></div>
         </div>

         {/* Content cards skeleton */}
         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {[...Array(3)].map((_, index) => (
               <div key={index} className="bg-foreground p-6 rounded-lg">
                  <div className="space-y-4">
                     <div className="flex items-center space-x-4">
                        <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                        <div className="space-y-2 flex-1">
                           <div className="h-4 bg-gray-200 rounded w-3/4"></div>
                           <div className="h-3 bg-gray-200 rounded w-1/2"></div>
                        </div>
                     </div>
                     <div className="h-4 bg-gray-200 rounded w-full"></div>
                  </div>
               </div>
            ))}
         </div>

         {/* Table/List skeleton */}
         <div className="bg-foreground rounded-lg p-6">
            <div className="mb-4">
               <div className="h-6 bg-gray-200 rounded w-40"></div>
            </div>

            {/* Table rows skeleton */}
            <div className="space-y-4">
               {[...Array(5)].map((_, index) => (
                  <div
                     key={index}
                     className="flex items-center justify-between py-3 border-b border-border/20">
                     <div className="flex items-center gap-4">
                        <div className="w-8 h-8 bg-gray-200 rounded-full"></div>
                        <div className="space-y-1">
                           <div className="h-4 bg-gray-200 rounded w-32"></div>
                           <div className="h-3 bg-gray-200 rounded w-20"></div>
                        </div>
                     </div>
                     <div className="h-4 bg-gray-200 rounded w-16"></div>
                  </div>
               ))}
            </div>
         </div>
      </div>
   );
}

export default Loading;
