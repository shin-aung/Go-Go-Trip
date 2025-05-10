'use client'
import { cn } from '@/libs'
import React, { useState } from 'react'

interface ContactInfo {
  fullName: string
  companyName: string
  email: string
  phoneNumber: string
}

interface ContactFormProps {
  initialValues: ContactInfo
  onSubmit: (contactInfo: ContactInfo) => void
}

const ContactForm: React.FC<ContactFormProps> = ({
  initialValues,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<ContactInfo>(initialValues)
  const [errors, setErrors] = useState<Partial<ContactInfo>>({})

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))

    // Clear error when user types
    if (errors[name as keyof ContactInfo]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }))
    }
  }

  const validateForm = (): boolean => {
    const newErrors: Partial<ContactInfo> = {}
    let isValid = true

    if (!formData.fullName.trim()) {
      newErrors.fullName = 'Full name is required'
      isValid = false
    }

    if (!formData.companyName.trim()) {
      newErrors.companyName = 'Company name is required'
      isValid = false
    }

    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
      isValid = false
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email is invalid'
      isValid = false
    }

    setErrors(newErrors)
    return isValid
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    if (validateForm()) {
      onSubmit(formData)
    }
  }

  return (
    <div className="animate-fade-in">
      <h2 className="mb-6">Ready to get in touch?</h2>
      <p className="mb-6">
        Please provide your contact details and we&apos;ll reach out to discuss
        your project.
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="full_name">
            Full Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            id="full_name"
            className={cn(
              'w-full p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-consultancy/50 text-black',
              errors.fullName ? 'border-red-500' : 'border-gray-300'
            )}
            placeholder="John Doe"
            value={formData.fullName}
            onChange={handleChange}
          />
          {errors.fullName && (
            <p className="mt-1 text-sm text-red-500">{errors.fullName}</p>
          )}
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="company_name"
          >
            Company Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="companyName"
            id="company_name"
            className={cn(
              'w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-consultancy/50 text-black',
              errors.companyName ? 'border-red-500' : 'border-gray-300'
            )}
            placeholder="Acme Inc."
            value={formData.companyName}
            onChange={handleChange}
          />
          {errors.companyName && (
            <p className="mt-1 text-sm text-red-500">{errors.companyName}</p>
          )}
        </div>

        <div>
          <label className="block text-sm font-medium mb-1" htmlFor="email">
            Email Address <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            id="email"
            className={cn(
              'w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-consultancy/50 text-black',
              errors.email ? 'border-red-500' : 'border-gray-300'
            )}
            placeholder="john.doe@example.com"
            value={formData.email}
            onChange={handleChange}
          />
          {errors.email && (
            <p className="mt-1 text-sm text-red-500">{errors.email}</p>
          )}
        </div>

        <div>
          <label
            className="block text-sm font-medium mb-1"
            htmlFor="phone_number"
          >
            Phone Number <span className="text-gray-500">(Optional)</span>
          </label>
          <input
            type="tel"
            name="phoneNumber"
            id="phone_number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-consultancy/50 text-black"
            placeholder="+1 (123) 456-7890"
            value={formData.phoneNumber}
            onChange={handleChange}
          />
        </div>

        <div className="pt-4">
          <button
            type="submit"
            className="w-full bg-consultancy bg-gradient-to-r from-blue-500 to-purple-600 text-white font-bold py-3 px-6 rounded-md transition-colors text-lg"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  )
}

export default ContactForm
