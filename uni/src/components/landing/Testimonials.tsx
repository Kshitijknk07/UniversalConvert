import { Star } from "lucide-react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Digital Marketing Manager",
      content:
        "UniversalConvert has been a game-changer for our marketing team. We convert dozens of files daily, and the speed and quality are unmatched.",
      rating: 5,
      avatar: "SJ",
    },
    {
      name: "Michael Chen",
      role: "Freelance Designer",
      content:
        "As a designer working with multiple file formats, this tool saves me hours every week. The batch conversion feature is particularly useful.",
      rating: 5,
      avatar: "MC",
    },
    {
      name: "Emily Rodriguez",
      role: "Content Creator",
      content:
        "I've tried many conversion tools, but UniversalConvert is by far the most reliable. The quality preservation is impressive!",
      rating: 4,
      avatar: "ER",
    },
  ];

  return (
    <section className="py-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold mb-4">What Our Users Say</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Join thousands of satisfied users who trust UniversalConvert for their
          file conversion needs
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((testimonial, index) => (
          <div
            key={index}
            className="bg-white rounded-xl p-6 shadow-md border border-gray-100 hover:shadow-lg transition-shadow"
          >
            <div className="flex mb-4">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < testimonial.rating
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-gray-300"
                  }`}
                />
              ))}
            </div>
            <p className="text-gray-700 mb-6 italic">"{testimonial.content}"</p>
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-gradient-to-r from-pink-500 to-orange-400 flex items-center justify-center text-white font-medium mr-3">
                {testimonial.avatar}
              </div>
              <div>
                <h4 className="font-semibold">{testimonial.name}</h4>
                <p className="text-sm text-gray-600">{testimonial.role}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <div className="inline-flex items-center justify-center p-1 rounded-full bg-gray-100 mb-6">
          <span className="px-4 py-1 rounded-full bg-white shadow-sm text-sm font-medium">
            Trusted by 50,000+ users worldwide
          </span>
        </div>
        <div className="flex flex-wrap justify-center gap-8 opacity-70">
          {["Adobe", "Microsoft", "Google", "Dropbox", "Slack"].map(
            (company) => (
              <span key={company} className="text-lg font-bold text-gray-400">
                {company}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
