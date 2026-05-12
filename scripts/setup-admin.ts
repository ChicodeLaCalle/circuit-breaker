// Script to create initial admin user
// Run with: npx ts-node scripts/setup-admin.ts

import bcrypt from 'bcryptjs'
import connectDB from '../lib/mongodb'
import { User } from '../lib/models'

async function setupAdmin() {
  try {
    await connectDB()

    // Check if admin already exists
    const existingAdmin = await User.findOne({ email: 'admin@circuitbreaker.eu' })
    
    if (existingAdmin) {
      console.log('Admin user already exists')
      process.exit(0)
    }

    // Create admin user
    const hashedPassword = await bcrypt.hash('admin123', 10)
    
    const admin = new User({
      email: 'admin@circuitbreaker.eu',
      password: hashedPassword,
      name: 'Admin',
      role: 'admin',
    })

    await admin.save()
    
    console.log('✅ Admin user created successfully')
    console.log('Email: admin@circuitbreaker.eu')
    console.log('Password: admin123')
    console.log('')
    console.log('⚠️  Please change the default password after first login!')
    
    process.exit(0)
  } catch (error) {
    console.error('❌ Error creating admin:', error)
    process.exit(1)
  }
}

setupAdmin()
