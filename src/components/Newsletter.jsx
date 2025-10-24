import { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSuccess(true);
      setEmail("");
    }
  };

  return (
    <div className="bg-[#0f0f1a] py-16 text-white px-4 text-center  my-16">
      <h2 className="text-3xl font-bold mb-2">
        Subscribe to Gamehub Newsletter
      </h2>
      <p className="mb-6">
        Get latest game news, releases, and updates directly to your inbox.
      </p>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col md:flex-row  justify-center items-center gap-2 max-w-md mx-auto"
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="input input-neutral p-3 rounded-lg flex-1 text-white"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold px-6 py-2 rounded-lg hover:bg-purple-500 hover:text-white transition"
        >
          Subscribe
        </button>
      </form>

      {success && (
        <p className="mt-4 text-green-300">Subscribed successfully!</p>
      )}
    </div>
  );
};

export default Newsletter;
