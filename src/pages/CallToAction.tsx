"use client"

import type React from "react"

import { useState } from "react"
import { makeEnquiry } from "../APIs/Enquiry"

export default function CallToAction() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    message: "",
  })

  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.id || e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")
    setSuccess(false)
    try {
      console.log("formData", formData)
      await makeEnquiry(formData)

      setSuccess(true)
      setFormData({ firstName: "", lastName: "", email: "", role: "", message: "" })
    } catch (err: any) {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="w-full py-16 md:py-24 lg:py-32 border-t px-4 overflow-x-hidden">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12 items-center">
          <div className="flex flex-col justify-center space-y-6">
            <div className="space-y-4" data-aos="fade-left" data-aos-duration="1000">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100 px-4 py-1.5 text-sm font-medium text-red-700">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                </svg>
                Join Us Today
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-slate-800">
                Ready to Transform Education?
              </h2>
              <p className="max-w-[600px] text-gray-600 md:text-lg leading-relaxed">
                Whether you're a school seeking qualified teachers, a parent looking for tutoring, or a student eager to
                learn, Edu-Spur is here to help.
              </p>
            </div>
          </div>
          <div className="mx-auto w-full max-w-[500px] lg:max-w-none" data-aos="fade-right" data-aos-duration="1000">
            <div className="rounded-2xl border border-gray-200 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 w-full">
              <div className="flex flex-col space-y-2 p-6 pb-4">
                <h3 className="text-2xl font-semibold leading-none tracking-tight text-gray-900">
                  Have further enquiries?
                </h3>
                <p className="text-sm text-gray-600">
                  Fill out this form and our team will get in touch with you shortly.
                </p>
              </div>
              <form onSubmit={handleSubmit} className="p-6 pt-2 space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="first-name" className="text-sm font-medium leading-none text-gray-700">
                      First name
                    </label>
                    <input
                      id="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="text-sm font-medium leading-none text-gray-700">
                      Last name
                    </label>
                    <input
                      id="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium leading-none text-gray-700">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                    placeholder="Enter your email"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="role" className="text-sm font-medium leading-none text-gray-700">
                    I am a / an :
                  </label>
                  <select
                    id="role"
                    defaultValue=""
                    value={formData.role}
                    onChange={handleChange}
                    className="flex h-10 w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
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
                  <label htmlFor="message" className="text-sm font-medium leading-none text-gray-700">
                    Messag
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="flex min-h-[100px] w-full rounded-lg border border-gray-300 bg-white px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                    placeholder="Tell us about your educational needs"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="inline-flex items-center justify-center w-full h-11 px-6 py-2 text-sm font-semibold text-white rounded-lg bg-red-500 hover:bg-red-600 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {loading ? "Submitting..." : "Submit Request"}
                </button>
                {success && <p className="text-green-600 text-sm font-medium mt-2">Enquiry submitted successfully!</p>}
                {error && <p className="text-red-600 text-sm font-medium mt-2">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
