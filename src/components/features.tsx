import { useState } from 'react'
import { motion } from 'framer-motion'
import { Brain, Zap, Shield, Sparkles, Clipboard, MoreHorizontal } from 'lucide-react'

const features = [
  {
    icon: Brain,
    title: 'Continue Writing',
    description: 'Continue writing your article with AI, and it will help you get ideas and structure for next part of your article.'
  },
  {
    icon: Zap,
    title: 'Reading and Writing Prompts',
    description: 'Features that allow you to select text and get options to summarize, fix grammar, change tone , change writing style , and more.'
  },
  {
    icon: Shield,
    title: 'Privacy First',
    description: 'Pay once and use forever, no subscription fees. All your keys, data is kept locally on your device.'
  },
  {
    icon: Sparkles,
    title: 'Customizable Prompts',
    description: 'Add, manage, and use custom prompts to enhance your writing, reading, and publishing experience.'
  }, 
  {
    icon: Clipboard,
    title: 'Direct Pasting',
    description: 'Allows you to paste your generated content directly into your Medium article.'
  },
  {
    icon: MoreHorizontal,
    title: 'And More...',
    description: 'I have planned features to add if this extension gains more popularity, and people are interested in more features.'
  },
]

export default function FeaturesCards() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div  id="features" className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-base font-semibold leading-7 text-purple-400">Powerful Features</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Everything you need to write on Medium
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-300">
            Our AI-powered Chrome extension brings a suite of innovative features to enhance your writing on Medium.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <dl className="grid grid-cols-1 gap-x-8 gap-y-16 lg:grid-cols-2">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                className="flex flex-col"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <motion.div
                  className="group relative flex flex-col h-full overflow-hidden rounded-3xl bg-gray-800 shadow-2xl"
                  animate={{
                    scale: hoveredIndex === index ? 1.03 : 1,
                  }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <div className="px-6 py-8 sm:px-8">
                    <div className="flex items-center mb-4">
                      <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-600 mr-4"
                        animate={{
                          scale: hoveredIndex === index ? 1.1 : 1,
                          rotate: hoveredIndex === index ? 5 : 0,
                        }}
                        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                      >
                        <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </motion.div>
                      <dt className="font-semibold text-white">
                        <div className="text-2xl leading-7">{feature.title}</div>
                      </dt>
                    </div>
                    <dd className="mt-2 text-base leading-7 text-gray-300 flex-grow">{feature.description}</dd>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  )
}