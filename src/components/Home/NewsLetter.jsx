const NewsLetter = () => {
  return (
    <div className="bg-white py-16 text-gray-600">
      <div className="mx-auto w-9/12 text-center">
        <div className="space-y-4">
          <p className="text-4xl font-bold">Join Our Mailing List</p>
          <p className="mx-auto text-center text-gray-500 sm:w-5/12">
            Sign up to receive inspiration, product updates, and special offers
            from our team.
          </p>
        </div>

        <div className="mt-4 flex rounded-md border border-[#011C42] sm:inline-block sm:flex-none">
          <input
            type="text"
            name="text"
            id=""
            placeholder="Please enter your email"
            className="rounded-md bg-white px-4 py-3 placeholder:text-xs placeholder:text-gray-400 focus:outline-none sm:w-80"
          />
          <button className="bg-[#011C42] px-5 py-5 text-sm font-bold text-white">
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
