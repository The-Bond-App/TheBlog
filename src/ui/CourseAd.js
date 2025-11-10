import { useState } from 'react'

export default function CourseAd(){
      // ad  
      const [showEmail, setShowEmail] = useState(false);
      const [email, setEmail] = useState('');
      const [submitted, setSubmitted] = useState(false);
    
      const handleSubmit = () => {
        if (email && email.includes('@')) {
          setSubmitted(true);
        }
      };
    return(
        <div className="grid md:grid-cols-2 gap-0">
            {/* Left: The Hook */}
            <div className="rounded-xl bg-gradient-to-br from-gray-900 to-gray-800 p-12 flex flex-col justify-center text-white">
            <h1 className="text-5xl font-bold mb-6 leading-tight">
                Your emotions<br />cheat sheet.
            </h1>
            <p className="text-xl text-gray-300 mb-6 leading-relaxed">
                No theory. No textbooks. Just analogies that make emotions click instantly.
            </p>
            <div className="bg-white/5 border border-white/10 rounded-xl p-5 mb-6">
                <p className="text-gray-300 text-base leading-relaxed italic">
                "A toxic relationship is like a cup of piss with a tablespoon of sugar in it. You're thirsty for something sweet, but you can't separate the sugar from the piss. Will your drink it or will you go to the market to find a good M&Ms?"
                </p>
            </div>
            <p className="text-lg text-gray-400">
                That's how we teach. Raw analogies that you'll never forget.
            </p>
            </div>

            {/* Right: The Offer */}
            <div className="p-12 flex flex-col justify-center bg-gradient-to-br from-blue-50 to-purple-50">
            <div className="inline-block px-3 py-1 bg-blue-100 text-blue-700 text-xs font-bold uppercase tracking-wide rounded-full mb-4 self-start">
                New Course
            </div>
            
            <h2 className="text-4xl font-bold text-gray-900 mb-3">
                The Feeling Decoder
            </h2>
            
            <p className="text-lg text-gray-600 mb-8">
                Turn every emotion into something you actually understand.
            </p>

            <div className="flex items-baseline gap-2 mb-8">
                <span className="text-6xl font-bold text-gray-900">$19.99</span>
                <span className="text-xl text-gray-500">one time</span>
            </div>

            {/* CTA */}
            {!submitted ? (
                !showEmail ? (
                <button
                    onClick={() => setShowEmail(true)}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white text-lg font-semibold rounded-xl hover:shadow-xl hover:scale-[1.02] transition-all"
                >
                    Get Early Access
                </button>
                ) : (
                <div className="space-y-3">
                    <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full px-5 py-4 bg-white border-2 border-gray-200 text-gray-900 rounded-xl focus:outline-none focus:border-blue-500 transition-all"
                    />
                    <button
                    onClick={handleSubmit}
                    className="w-full py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-xl hover:shadow-xl transition-all"
                    >
                    Notify Me
                    </button>
                </div>
                )
            ) : (
                <div className="flex items-center gap-3 bg-green-50 border-2 border-green-200 rounded-xl p-4 text-green-800">
                <Check className="w-5 h-5" />
                <span className="font-medium">You're on the list.</span>
                </div>
            )}

            <p className="text-sm text-gray-500 mt-6 text-center">
                Launches in 2 weeks. Limited spots.
            </p>
            </div>
        </div>
    )
}