// LoadingSkeleton placeholder 
export default function LoadingSkeleton({ count = 1 }) {
    return (
      <div className="space-y-4">
        {Array.from({ length: count }).map((_, index) => (
          <div
            key={index}
            className="w-full h-48 bg-gray-700 animate-pulse rounded-md"
          ></div>
        ))}
      </div>
    );
  }