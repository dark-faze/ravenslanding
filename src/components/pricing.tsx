import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Check, ExternalLink } from 'lucide-react'

export default function Pricing() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <div id="pricing" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Simple Pricing</h2>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Invest once in your writing future. No subscriptions, no hidden fees.
          </p>
        </div>
        <motion.div 
          className="mx-auto mt-16 max-w-md"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 50 }}
          transition={{ duration: 0.5 }}
        >
          <div className="rounded-3xl bg-gradient-to-br from-purple-600 to-purple-800 p-1 shadow-2xl">
            <div className="rounded-3xl bg-gray-900 px-6 py-8 sm:p-10">
              <h3 className="text-2xl font-semibold leading-8 tracking-tight text-white">Lifetime Access</h3>
              <p className="mt-4 text-base leading-7 text-gray-300">Pay once, use forever. Get all future updates included.</p>
              <div className="mt-6 flex flex-col items-start">
                <div className="flex items-center gap-x-2">
                  <span className="text-5xl font-bold tracking-tight text-white">$10</span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-gray-300">USD</span>
                  <span className="ml-2 text-sm font-medium text-purple-400">for first 10 customers</span>
                </div>
                <div className="mt-1 flex items-center">
                  <span className="text-2xl font-semibold tracking-tight text-gray-400 line-through">$25</span>
                  <span className="ml-2 text-sm font-medium text-gray-500">Regular price</span>
                </div>
              </div>
              <a
                href="https://darkfaze.gumroad.com/l/mediumraven"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-6 block w-full rounded-md bg-purple-600 px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-purple-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-purple-600 transition duration-300 ease-in-out transform hover:scale-105"
              >
                Get Lifetime Access
                <ExternalLink className="ml-2 h-4 w-4 inline" />
              </a>
              <ul role="list" className="mt-8 space-y-3 text-sm leading-6 text-gray-300">
                {[
                  'One-time payment',
                  'Lifetime updates',
                  'AI-powered writing assistance',
                  'Custom prompts',
                  'Privacy-focused',
                ].map((feature) => (
                  <li key={feature} className="flex gap-x-3">
                    <Check className="h-6 w-5 flex-none text-purple-400" aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}