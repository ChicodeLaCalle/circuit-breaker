'use client'

import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

export default function Template({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  const [isLoading, setIsLoading] = useState(false)
  const [displayChildren, setDisplayChildren] = useState(children)

  useEffect(() => {
    // Show loading when pathname changes
    setIsLoading(true)
    
    // Small delay to show loading animation
    const timer = setTimeout(() => {
      setDisplayChildren(children)
      setIsLoading(false)
    }, 800)

    return () => clearTimeout(timer)
  }, [pathname, children])

  return (
    <>
      {/* Page Content with Fade Transition */}
      <div 
        className={`transition-opacity duration-300 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
      >
        {displayChildren}
      </div>

      {/* Loading Overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-cb-black z-50 flex items-center justify-center animate-fade-in">
          {/* Background Effects */}
          <div className="absolute inset-0">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cb-purple/5 rounded-full blur-[150px]" />
          </div>

          {/* Loading Animation Container */}
          <div className="relative flex flex-col items-center">
            {/* Circuit Logo Animation */}
            <div className="relative w-20 h-20 mb-6">
              {/* Outer Ring */}
              <div className="absolute inset-0 border-2 border-cb-concrete rounded-full" />
              <div className="absolute inset-0 border-2 border-cb-purple rounded-full animate-spin" 
                   style={{ 
                     borderTopColor: 'transparent',
                     borderBottomColor: 'transparent',
                     animationDuration: '1.5s'
                   }} />
              
              {/* Inner Ring */}
              <div className="absolute inset-3 border-2 border-cb-concrete/50 rounded-full" />
              <div className="absolute inset-3 border-2 border-cb-purple/50 rounded-full animate-spin" 
                   style={{ 
                     borderLeftColor: 'transparent',
                     borderRightColor: 'transparent',
                     animationDuration: '1s',
                     animationDirection: 'reverse'
                   }} />
              
              {/* Center Pulse */}
              <div className="absolute inset-6 bg-cb-purple/20 rounded-full animate-pulse" />
              <div className="absolute inset-7 bg-cb-purple rounded-full" />
            </div>

            {/* Loading Text */}
            <div className="text-center">
              <div className="flex items-center justify-center gap-1 text-cb-muted text-sm font-mono">
                <span>LOADING</span>
                <span className="animate-pulse">.</span>
                <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
                <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
              </div>
            </div>
          </div>

          {/* Corner Accents */}
          <div className="absolute top-6 left-6 w-8 h-8 border-l border-t border-cb-purple/30" />
          <div className="absolute top-6 right-6 w-8 h-8 border-r border-t border-cb-purple/30" />
          <div className="absolute bottom-6 left-6 w-8 h-8 border-l border-b border-cb-purple/30" />
          <div className="absolute bottom-6 right-6 w-8 h-8 border-r border-b border-cb-purple/30" />
        </div>
      )}
    </>
  )
}
