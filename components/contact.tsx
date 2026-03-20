export default function Contact() {
  return (
    <main className="bg-black text-white px-6 py-16">

      <div className="max-w-2xl mx-auto text-center">

        {/* Title */}
        <h1 className="text-5xl font-bold mb-10">
          Contact Me
        </h1>

        <p className="text-gray-400 mb-10">
          Feel free to reach out for opportunities or collaborations.
        </p>

        <div className="space-y-8">

          {/* Email */}
          <div>
            <p className="text-red-500 uppercase text-sm tracking-wider">Email</p>
            <a 
              href="mailto:kushalgudibandi@gmail.com"
              className="text-xl hover:text-blue-400 transition"
            >
              kushalgudibandi@gmail.com
            </a>
          </div>

          {/* Phone */}
          <div>
            <p className="text-red-500 uppercase text-sm tracking-wider">Phone</p>
            <p className="text-xl">
              +1 850-980-1485
            </p>
          </div>

          {/* LinkedIn */}
          <div>
            <p className="text-red-500 uppercase text-sm tracking-wider">LinkedIn</p>
            <a 
              href="https://www.linkedin.com/in/kushal-eshwar-reddy-gudibandi-b92420167/"
              target="_blank"
              className="text-xl hover:text-blue-400 transition"
            >
              View Profile
            </a>
          </div>

        </div>

      </div>

    </main>
  );
}