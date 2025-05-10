'use client'

import { useState } from 'react'
import ContactForm from '@/components/questionnaire/ContactForm'

interface ContactInfo {
  fullName: string
  companyName: string
  email: string
  phoneNumber: string
}

const ContactFormSection = () => {
  const [submittedData, setSubmittedData] = useState<ContactInfo | null>(null)

  const initialValues: ContactInfo = {
    fullName: '',
    companyName: '',
    email: '',
    phoneNumber: '',
  }

  const handleFormSubmit = (data: ContactInfo) => {
    setSubmittedData(data)
  }

  const handleConfirm = () => {
    // TODO : this data is be sent to your backend (API integration)
    setSubmittedData(null)
  }

  return (
    <div className="h-[650px] bg-white/10 backdrop-blur-sm rounded-xl p-6 shadow-lg border border-white/20 space-y-4 overflow-auto text-white">
      {submittedData ? (
        <div className="space-y-6">
          <div className="bg-white/5 border border-white/20 rounded-lg p-4 space-y-3">
            <div className="flex items-start gap-2">
              <span className="font-semibold w-32">Full Name:</span>
              <span>{submittedData.fullName}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold w-32">Company Name:</span>
              <span>{submittedData.companyName}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold w-32">Email:</span>
              <span>{submittedData.email}</span>
            </div>
            <div className="flex items-start gap-2">
              <span className="font-semibold w-32">Phone Number:</span>
              <span>{submittedData.phoneNumber || 'N/A'}</span>
            </div>
          </div>

          <div className="text-right">
            <button
              onClick={handleConfirm}
              className="bg-white text-consultancy font-semibold py-2 px-6 rounded-lg hover:bg-gray-100 transition-colors shadow"
            >
              Confirm
            </button>
          </div>
        </div>
      ) : (
        <ContactForm
          initialValues={initialValues}
          onSubmit={handleFormSubmit}
        />
      )}
    </div>
  )
}

export default ContactFormSection
