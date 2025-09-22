import React from 'react';

const NewsLetter = () => {
    return (
<section className="bg-gray-900 text-white py-16 px-6  rounded-none md:rounded-3xl max-w-7xl mx-auto my-5">
      <div className="text-center space-y-4">
        <h2 className="text-3xl sm:text-4xl font-bold">
          Subscribe to Our Newsletter
        </h2>
        <p className="text-gray-300 text-lg sm:text-xl">
          Get the latest updates, tips, and exclusive offers straight to your inbox.
        </p>
      </div>

      <form className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-bordered w-full sm:w-80 text-black"
          required
        />
        <button className="btn btn-primary w-full sm:w-auto">
          Subscribe
        </button>
      </form>

      <p className="mt-4 text-gray-400 text-sm text-center">
        We respect your privacy. Unsubscribe at any time.
      </p>
    </section>
    );
};

export default NewsLetter;