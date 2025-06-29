import React from "react";

const Courses = () => {
  const courses = [
    {
      id: 1,
      title: "Basic Baking Course",
      description: "Learn the fundamentals of baking cakes and pastries.",
      price: "₹499",
    },
    {
      id: 2,
      title: "Advanced Cake Design",
      description: "Master the art of decorating designer cakes.",
      price: "₹899",
    },
    {
      id: 3,
      title: "Chocolate Delights",
      description: "Everything about chocolate cakes, ganache & more.",
      price: "₹699",
    },
    {
      id: 4,
      title: "Cake Business Starter",
      description: "Start and grow your own cake business online.",
      price: "₹999",
    },
  ];

  const handleBuyNow = (courseTitle) => {
    alert(`You clicked "Buy Now" for: ${courseTitle}`);
    // Later: Add Razorpay or payment logic here
  };

  return (
    <div className="min-h-screen bg-white p-6">
      <h1 className="text-3xl font-bold text-center mb-10">Cake Courses</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {courses.map((course) => (
          <div
            key={course.id}
            className="bg-yellow-50 border border-yellow-300 rounded-xl shadow p-5 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-xl font-semibold mb-2">{course.title}</h2>
              <p className="text-gray-700 text-sm mb-4">{course.description}</p>
              <p className="text-lg font-bold text-yellow-600">{course.price}</p>
            </div>
            <button
              onClick={() => handleBuyNow(course.title)}
              className="mt-6 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 transition"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
