import { useState } from "react";
import { makeEnquiry } from "../APIs/Enquiry";


export default function CallToAction() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phoneNumber: "",
    role: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id || e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    setSuccess(false);
    try {
      console.log("formData" , formData);
      await makeEnquiry(formData);
      
      setSuccess(true);
      setFormData({ firstName: "", lastName: "", phoneNumber: "", role: "", message: "" });
    } catch (err: any) {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };


  return (
    <section className="w-full py-12 md:py-24 lg:py-32 border-t px-4 xxs:w-[100%] overflow-x-hidden ml-auto xxs:ml-0">
      <div className="container px-4 md:px-6">
        <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center w-[100%]">
          <div className="flex flex-col justify-center space-y-4">
            <div className="space-y-2" data-aos="fade-left" data-aos-duration="1000">
              <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm text-[#092030]">
                Join Us Today
              </div>
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl xxs:text-2xl">
                Ready to Transform Education?
              </h2>
              <p className="max-w-[600px] text-muted-foreground md:text-xl">
                Whether you're a school seeking qualified teachers, a parent
                looking for tutoring, or a student eager to learn, Edu-Spur is
                here to help.
              </p>
            </div>
            {/* <div className="flex flex-col gap-2 min-[400px]:flex-row">
              <button className="h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-emerald-600 hover:bg-emerald-700">
                Get Started Now
              </button>
              <button className="h-10 px-4 py-2 text-sm font-medium border rounded-md border-input bg-background hover:bg-accent hover:text-accent-foreground">
                Schedule a Consultation
              </button>
            </div> */}
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none xxs:w-[100%] xxs:flex xxs:flex-wrap" data-aos="fade-right" data-aos-duration="1000">
            <div className="rounded-lg border bg-card text-card-foreground shadow-sm w-full">
              <div className="flex flex-col space-y-1.5 p-6">
                <h3 className="text-2xl font-semibold leading-none tracking-tight">
                  Have further enquiries?
                </h3>
                <p className="text-sm text-muted-foreground">
                  Fill out this form and our team will get in touch with you
                  shortly.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="p-6 space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2 xxs:w-full">
                    <label
                      htmlFor="first-name"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      First name
                    </label>
                    <input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label
                      htmlFor="lastName"
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Last name
                    </label>
                    <input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="phoneNumber"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    PhoneNumber
                  </label>
                  <input
                    id="phoneNumber"
                    type="text"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Enter your phoneNumber"
                  />
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="role"
                    className="text-sm font-medium leading-none"
                  >
                    I am a / an :
                  </label>
                  <select
                    id="role"

                    defaultValue=""
                    value={formData.role}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  >
                    <option value="" disabled>
                      Select an option
                    </option>
                    <option value="School Administrator">School Administrator</option>
                    <option value="Parent">Parent</option>
                    <option value="Student">Student</option>
                    <option value="Educator">Educator</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="flex min-h-[100px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    placeholder="Tell us about your educational needs"
                  ></textarea>
                </div>
                  <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center w-full h-10 px-4 py-2 text-sm font-medium text-white rounded-md bg-[#133b55] hover:bg-[#133b55] transition-transform duration-300 hover:scale-105 hover:shadow-lg"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
                {success && <p className="text-green-600 text-sm mt-2">Enquiry submitted successfully!</p>}
                {error && <p className="text-red-600 text-sm mt-2">{error}</p>}
              </form>
              <div className="flex items-center p-6 pt-0">
              


              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
