'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { createClient } from '@/lib/supabase'
import { Disc3, Lock, Mail, Eye, EyeOff } from 'lucide-react'

export default function AdminLoginPage() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()
  const supabase = createClient()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setError('')
    setIsLoading(true)

    try {
      const { error: signInError } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (signInError) {
        setError('Invalid credentials')
        setIsLoading(false)
        return
      }

      router.push('/admin/dashboard')
      router.refresh()
    } catch (err) {
      setError('An error occurred. Please try again.')
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-cb-black flex items-center justify-center p-4">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-cb-purple/5 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-cb-violet/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative w-full max-w-md">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-cb-purple/10 border border-cb-purple/30 rounded-full mb-4">
            <Disc3 className="w-8 h-8 text-cb-purple" />
          </div>
          <h1 className="font-[family-name:var(--font-gothic)] text-3xl text-cb-white mb-2">
            CIRCUIT<span className="text-cb-purple">BREAKER</span>
          </h1>
          <p className="text-cb-muted">Admin Panel</p>
        </div>

        <div className="bg-cb-abyss border border-cb-concrete p-8 relative">
          <div className="absolute top-0 left-0 w-6 h-6 border-l-2 border-t-2 border-cb-purple" />
          <div className="absolute top-0 right-0 w-6 h-6 border-r-2 border-t-2 border-cb-purple" />
          <div className="absolute bottom-0 left-0 w-6 h-6 border-l-2 border-b-2 border-cb-purple" />
          <div className="absolute bottom-0 right-0 w-6 h-6 border-r-2 border-b-2 border-cb-purple" />

          <h2 className="text-xl font-bold text-cb-white mb-6 text-center">
            Sign In
          </h2>

          {error && (
            <div className="mb-6 p-4 bg-red-500/10 border border-red-500/30 text-red-400 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-dim" />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full bg-cb-black border border-cb-concrete pl-12 pr-4 py-3 text-cb-white
                           placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                  placeholder="admin@circuitbreaker.eu"
                />
              </div>
            </div>

            <div>
              <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                Password
              </label>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-dim" />
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full bg-cb-black border border-cb-concrete pl-12 pr-12 py-3 text-cb-white
                           placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                  placeholder="••••••••"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-cb-dim hover:text-cb-white transition-colors"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className="w-full btn-primary py-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <span className="flex items-center justify-center gap-2">
                  <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Signing in...
                </span>
              ) : (
                'Sign In'
              )}
            </button>
          </form>

          <div className="mt-6 text-center">
            <a href="/" className="text-cb-muted hover:text-cb-purple text-sm transition-colors">
              ← Back to website
            </a>
          </div>
        </div>

        <p className="text-center text-cb-dim text-xs mt-8">
          Circuit Breaker Admin Panel • Secure Access Only
        </p>
      </div>
    </div>
  )
}
