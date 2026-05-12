import { Settings, Save, Bell, Lock, Globe, Mail } from 'lucide-react'

export default function AdminSettingsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="font-[family-name:var(--font-gothic)] text-3xl text-cb-white mb-2">
          Settings
        </h1>
        <p className="text-cb-muted">
          Manage your admin account and site preferences
        </p>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Sidebar Navigation */}
        <div className="lg:col-span-1">
          <div className="bg-cb-abyss border border-cb-concrete p-4 space-y-1 sticky top-8">
            {[
              { label: 'General', icon: Settings, active: true },
              { label: 'Account', icon: Lock },
              { label: 'Notifications', icon: Bell },
              { label: 'Email', icon: Mail },
              { label: 'Site', icon: Globe },
            ].map((item) => {
              const Icon = item.icon
              return (
                <button
                  key={item.label}
                  className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                    item.active
                      ? 'bg-cb-purple/20 text-cb-purple border-l-2 border-cb-purple'
                      : 'text-cb-muted hover:bg-cb-black hover:text-cb-white'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="text-sm font-medium">{item.label}</span>
                </button>
              )
            })}
          </div>
        </div>

        {/* Settings Form */}
        <div className="lg:col-span-2 space-y-6">
          {/* General Settings */}
          <div className="bg-cb-abyss border border-cb-concrete p-6">
            <h2 className="text-lg font-bold text-cb-white mb-6 flex items-center gap-2">
              <Settings className="w-5 h-5 text-cb-purple" />
              General Settings
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                  Site Name
                </label>
                <input
                  type="text"
                  defaultValue="Circuit Breaker"
                  className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                           focus:border-cb-purple focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                  Site Description
                </label>
                <textarea
                  rows={3}
                  defaultValue="Premier Hard Techno agency representing the darkest corners of industrial electronic music."
                  className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                           focus:border-cb-purple focus:outline-none transition-colors resize-none"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                    Contact Email
                  </label>
                  <input
                    type="email"
                    defaultValue="bookings@circuitbreaker.eu"
                    className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                             focus:border-cb-purple focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                    Contact Phone
                  </label>
                  <input
                    type="tel"
                    defaultValue="+49 123 456 7890"
                    className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                             focus:border-cb-purple focus:outline-none transition-colors"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Account Settings */}
          <div className="bg-cb-abyss border border-cb-concrete p-6">
            <h2 className="text-lg font-bold text-cb-white mb-6 flex items-center gap-2">
              <Lock className="w-5 h-5 text-cb-purple" />
              Change Password
            </h2>

            <div className="space-y-6">
              <div>
                <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                  Current Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                           placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                  New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                           placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs uppercase tracking-wider text-cb-muted mb-2">
                  Confirm New Password
                </label>
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-cb-black border border-cb-concrete px-4 py-3 text-cb-white
                           placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
                />
              </div>
            </div>
          </div>

          {/* Notification Settings */}
          <div className="bg-cb-abyss border border-cb-concrete p-6">
            <h2 className="text-lg font-bold text-cb-white mb-6 flex items-center gap-2">
              <Bell className="w-5 h-5 text-cb-purple" />
              Notifications
            </h2>

            <div className="space-y-4">
              {[
                { label: 'New booking requests', checked: true },
                { label: 'Artist status changes', checked: true },
                { label: 'News article published', checked: false },
                { label: 'Weekly summary email', checked: true },
              ].map((item) => (
                <label key={item.label} className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    defaultChecked={item.checked}
                    className="w-4 h-4 bg-cb-black border-cb-concrete text-cb-purple focus:ring-cb-purple rounded"
                  />
                  <span className="text-cb-white text-sm">{item.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Save Button */}
          <div className="flex justify-end">
            <button className="btn-primary flex items-center gap-2">
              <Save className="w-4 h-4" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
