export default function Loading() {
  return (
    <div className="fixed inset-0 bg-cb-black z-50 flex items-center justify-center">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cb-purple/5 rounded-full blur-[150px]" />
      </div>

      {/* Loading Animation Container */}
      <div className="relative flex flex-col items-center">
        {/* Circuit Logo Animation */}
        <div className="relative w-24 h-24 mb-8">
          {/* Outer Ring */}
          <div className="absolute inset-0 border-2 border-cb-concrete rounded-full" />
          <div className="absolute inset-0 border-2 border-cb-purple rounded-full animate-spin" 
               style={{ 
                 borderTopColor: 'transparent',
                 borderBottomColor: 'transparent',
                 animationDuration: '1.5s'
               }} />
          
          {/* Inner Ring */}
          <div className="absolute inset-4 border-2 border-cb-concrete/50 rounded-full" />
          <div className="absolute inset-4 border-2 border-cb-purple/50 rounded-full animate-spin" 
               style={{ 
                 borderLeftColor: 'transparent',
                 borderRightColor: 'transparent',
                 animationDuration: '1s',
                 animationDirection: 'reverse'
               }} />
          
          {/* Center Pulse */}
          <div className="absolute inset-8 bg-cb-purple/20 rounded-full animate-pulse" />
          <div className="absolute inset-9 bg-cb-purple/40 rounded-full animate-pulse" 
               style={{ animationDelay: '0.2s' }} />
          <div className="absolute inset-10 bg-cb-purple rounded-full" />
        </div>

        {/* Loading Text */}
        <div className="text-center">
          <h2 className="font-[family-name:var(--font-gothic)] text-2xl text-cb-white mb-2 tracking-wider">
            CIRCUIT<span className="text-cb-purple">BREAKER</span>
          </h2>
          <div className="flex items-center justify-center gap-1 text-cb-muted text-sm">
            <span>Loading</span>
            <span className="animate-pulse">.</span>
            <span className="animate-pulse" style={{ animationDelay: '0.2s' }}>.</span>
            <span className="animate-pulse" style={{ animationDelay: '0.4s' }}>.</span>
          </div>
        </div>

        {/* Progress Bar */}
        <div className="mt-8 w-48 h-0.5 bg-cb-concrete/30 overflow-hidden">
          <div className="h-full bg-cb-purple animate-loading-bar" />
        </div>
      </div>

      {/* Corner Accents */}
      <div className="absolute top-8 left-8 w-12 h-12 border-l-2 border-t-2 border-cb-purple/30" />
      <div className="absolute top-8 right-8 w-12 h-12 border-r-2 border-t-2 border-cb-purple/30" />
      <div className="absolute bottom-8 left-8 w-12 h-12 border-l-2 border-b-2 border-cb-purple/30" />
      <div className="absolute bottom-8 right-8 w-12 h-12 border-r-2 border-b-2 border-cb-purple/30" />

      {/* Grid Overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
           style={{
             backgroundImage: `
               linear-gradient(rgba(147,51,234,0.3) 1px, transparent 1px),
               linear-gradient(90deg, rgba(147,51,234,0.3) 1px, transparent 1px)
             `,
             backgroundSize: '50px 50px'
           }} />
    </div>
  )
}
