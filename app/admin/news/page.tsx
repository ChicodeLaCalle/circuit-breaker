import connectDB from '@/lib/mongodb'
import { News } from '@/lib/models'
import { Newspaper, Plus, Search, Edit2, Trash2, Eye } from 'lucide-react'

async function getNews() {
  await connectDB()
  const news = await News.find().sort({ createdAt: -1 }).limit(20)
  return JSON.parse(JSON.stringify(news))
}

export default async function AdminNewsPage() {
  const news = await getNews()

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-[family-name:var(--font-gothic)] text-3xl text-cb-white mb-2">
            News Articles
          </h1>
          <p className="text-cb-muted">
            Manage news articles and announcements
          </p>
        </div>
        <a
          href="/admin/news/new"
          className="btn-primary flex items-center gap-2"
        >
          <Plus className="w-4 h-4" />
          Add Article
        </a>
      </div>

      {/* Search & Filter */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-cb-dim" />
          <input
            type="text"
            placeholder="Search articles..."
            className="w-full bg-cb-black border border-cb-concrete pl-12 pr-4 py-2 text-cb-white
                     placeholder:text-cb-dim focus:border-cb-purple focus:outline-none transition-colors"
          />
        </div>
        <select className="bg-cb-black border border-cb-concrete px-4 py-2 text-cb-white focus:border-cb-purple focus:outline-none">
          <option value="">All Categories</option>
          <option value="Tour">Tour</option>
          <option value="Release">Release</option>
          <option value="Label">Label</option>
          <option value="Live">Live</option>
          <option value="Artist">Artist</option>
        </select>
      </div>

      {/* Articles Table */}
      <div className="bg-cb-abyss border border-cb-concrete overflow-hidden">
        {news.length === 0 ? (
          <div className="p-12 text-center">
            <Newspaper className="w-12 h-12 text-cb-concrete mx-auto mb-4" />
            <h3 className="text-cb-white font-medium mb-2">No articles yet</h3>
            <p className="text-cb-muted text-sm mb-4">
              Get started by creating your first news article
            </p>
            <a
              href="/admin/news/new"
              className="btn-primary inline-flex items-center gap-2"
            >
              <Plus className="w-4 h-4" />
              Create Article
            </a>
          </div>
        ) : (
          <table className="w-full">
            <thead className="bg-cb-black/50 border-b border-cb-concrete">
              <tr>
                <th className="text-left text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Title
                </th>
                <th className="text-left text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Category
                </th>
                <th className="text-left text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Status
                </th>
                <th className="text-left text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Date
                </th>
                <th className="text-right text-xs uppercase tracking-wider text-cb-muted font-medium px-6 py-4">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-cb-concrete">
              {news.map((article: any) => (
                <tr key={article._id} className="hover:bg-cb-black/30 transition-colors">
                  <td className="px-6 py-4">
                    <div>
                      <p className="text-cb-white font-medium">{article.title}</p>
                      <p className="text-cb-dim text-sm truncate max-w-xs">
                        {article.excerpt}
                      </p>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-cb-purple/10 text-cb-purple text-xs uppercase tracking-wider">
                      {article.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs uppercase tracking-wider ${
                      article.published 
                        ? 'bg-green-500/10 text-green-400' 
                        : 'bg-yellow-500/10 text-yellow-400'
                    }`}>
                      {article.published ? 'Published' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-cb-muted text-sm">
                    {new Date(article.createdAt).toLocaleDateString()}
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center justify-end gap-2">
                      <button className="p-2 text-cb-muted hover:text-cb-purple transition-colors">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-cb-muted hover:text-blue-400 transition-colors">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-cb-muted hover:text-red-400 transition-colors">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  )
}
