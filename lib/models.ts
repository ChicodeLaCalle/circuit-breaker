import mongoose from 'mongoose'

// User Schema (Admin)
const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum: ['admin', 'editor'],
    default: 'admin',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  lastLogin: {
    type: Date,
  },
})

// News Article Schema
const NewsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  excerpt: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ['Tour', 'Release', 'Label', 'Live', 'Artist', 'Behind the Scenes'],
    required: true,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  image: {
    type: String,
    default: '',
  },
  published: {
    type: Boolean,
    default: false,
  },
  publishedAt: {
    type: Date,
  },
  readTime: {
    type: String,
    default: '3 min read',
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Artist Schema
const ArtistSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  slug: {
    type: String,
    required: true,
    unique: true,
  },
  genre: {
    type: String,
    required: true,
  },
  bpm: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  bio: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    enum: ['available', 'on-tour', 'limited', 'booked'],
    default: 'available',
  },
  price: {
    type: String,
    enum: ['€', '€€', '€€€', '€€€€'],
    default: '€€',
  },
  image: {
    type: String,
    default: '',
  },
  socials: {
    instagram: String,
    soundcloud: String,
    spotify: String,
    youtube: String,
  },
  featured: {
    type: Boolean,
    default: false,
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Booking Request Schema
const BookingSchema = new mongoose.Schema({
  artistId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Artist',
    required: true,
  },
  eventName: {
    type: String,
    required: true,
  },
  eventDate: {
    type: Date,
    required: true,
  },
  eventTime: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  venue: {
    type: String,
  },
  capacity: {
    type: String,
    required: true,
  },
  budget: {
    type: String,
    required: true,
  },
  contactName: {
    type: String,
    required: true,
  },
  contactEmail: {
    type: String,
    required: true,
  },
  contactPhone: {
    type: String,
  },
  message: {
    type: String,
  },
  status: {
    type: String,
    enum: ['pending', 'confirmed', 'declined', 'completed'],
    default: 'pending',
  },
  notes: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  updatedAt: {
    type: Date,
    default: Date.now,
  },
})

// Export models (handle hot reload in dev)
export const User = mongoose.models.User || mongoose.model('User', UserSchema)
export const News = mongoose.models.News || mongoose.model('News', NewsSchema)
export const Artist = mongoose.models.Artist || mongoose.model('Artist', ArtistSchema)
export const Booking = mongoose.models.Booking || mongoose.model('Booking', BookingSchema)
