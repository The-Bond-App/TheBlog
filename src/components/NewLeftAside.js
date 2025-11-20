import {Home, User, FileText, Instagram, Youtube, Mail, ArrowRight} from 'lucide-react'

  const coreEmotions = [
    { id: 1, emoji: '😊', label: 'Joy', slug: 'joy' },
    { id: 2, emoji: '😢', label: 'Sad', slug: 'sad' },
    { id: 3, emoji: '😠', label: 'Angry', slug: 'angry' },
    { id: 4, emoji: '😰', label: 'Anxious', slug: 'anxious' },
    { id: 5, emoji: '😌', label: 'Calm', slug: 'calm' },
    { id: 6, emoji: '😔', label: 'Lonely', slug: 'lonely' },
    { id: 7, emoji: '😤', label: 'Frustrated', slug: 'frustrated' },
    { id: 8, emoji: '🥰', label: 'Loved', slug: 'loved' },
  ];

export default function NewLeftAside(){
    return(
        <aside className="w-64 bg-stone-100 border-r border-stone-200 p-6 flex flex-col fixed h-screen">
        
        {/* Profile */}
        <div className="flex items-center gap-3 mb-8">
          <div className="w-12 h-12 rounded-full bg-stone-800 flex items-center justify-center text-white font-semibold">
            SN
          </div>
          <div>
            <div className="font-semibold text-stone-900">Sticky Notes</div>
            <div className="text-xs text-stone-600">Emotional Wellbeing</div>
          </div>
        </div>

        {/* Main Nav */}
        <nav className="space-y-1 mb-8">
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-900 hover:bg-stone-200 transition-colors">
            <Home className="w-5 h-5" />
            <span className="text-sm">Home</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
            <User className="w-5 h-5" />
            <span className="text-sm">About</span>
          </a>
          <a href="#" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
            <FileText className="w-5 h-5" />
            <span className="text-sm">All Stories</span>
            <span className="ml-auto text-xs bg-stone-200 px-2 py-0.5 rounded">12</span>
          </a>
          <a href="#saved" className="flex items-center gap-3 px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
            </svg>
            <span className="text-sm">Saved Posts</span>
            <span className="ml-auto text-xs bg-stone-200 px-2 py-0.5 rounded">3</span>
          </a>
        </nav>

        {/* Find Me */}
        <div className="mb-8">
          <div className="text-xs uppercase tracking-wider text-stone-500 mb-3 px-3">Find Me</div>
          <div className="space-y-1">
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
              <div className="flex items-center gap-3">
                <Instagram className="w-5 h-5" />
                <span className="text-sm">Instagram</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
              <div className="flex items-center gap-3">
                <Youtube className="w-5 h-5" />
                <span className="text-sm">YouTube</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>
            <a href="#" className="flex items-center justify-between px-3 py-2 rounded-lg text-stone-600 hover:bg-stone-200 transition-colors">
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span className="text-sm">Email</span>
              </div>
              <ArrowRight className="w-4 h-4" />
            </a>
          </div>
        </div>


      </aside>
    )
}