import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Zap, Clock, TrendingUp, Users, MessageCircle, Star, CheckCircle, Lock, Crown } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { HashLink } from 'react-router-hash-link';

const CaptionCrafter = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const [selectedTopic, setSelectedTopic] = useState<string>('');

  const getCaptionForTopic = (topic: string) => {
    const captions = {
      book: `After months of late nights and countless revisions, I'm finally holding my first book! 📚✨

This journey taught me that dreams don't have deadlines - they have dedication. Every page represents a lesson learned, a fear conquered, and a step closer to my authentic voice.

To everyone who believed in this vision before I did - thank you. Your support turned my scattered thoughts into something real.

What's your biggest creative project right now? Drop it below! 👇

#BookLaunch #FirstTimeAuthor #DreamsComeTrue #WritingCommunity #BookLovers #AuthorLife #CreativeJourney #Inspiration #Bookstagram`,

      business: `From 0 to 6-figures in 18 months - here's what nobody tells you about scaling 📈

The hardest part wasn't finding customers. It wasn't even the long hours or financial stress. It was learning to let go of perfectionism and trust my team.

Growth happens when you stop being the bottleneck in your own business. I had to learn this the hard way - twice.

Now we're serving 500+ clients monthly, and I finally have my weekends back. The key? Systems, delegation, and knowing when to say no.

What's your biggest scaling challenge right now? Let's solve it together! 💪

#BusinessGrowth #Entrepreneur #ScalingUp #BusinessTips #StartupLife #EntrepreneurMindset #BusinessSuccess #GrowthHacking #BusinessOwner`,

      motivation: `5:30 AM and the world is still quiet ☀️

This is my favorite hour - before emails, before meetings, before the world needs anything from me. Just me, my coffee, and my goals.

Morning routines aren't about being perfect. They're about showing up for yourself first, so you can show up better for everyone else.

Today's intention: Progress over perfection. What's yours?

Rise and grind doesn't mean hustle until you burn out. It means rising to meet your potential, one intentional morning at a time.

#MorningMotivation #EarlyRiser #MindsetMatters #PersonalGrowth #MorningRoutine #SelfCare #Productivity #SuccessMindset #DailyHabits`,

      behind: `The reality behind the highlight reel 🎬

While you see the polished posts and success stories, here's what happened behind the scenes this week: 3 client calls that ran over, a website crash at midnight, and way too much coffee.

Entrepreneurship isn't always glamorous. Sometimes it's troubleshooting at 2 AM, having difficult conversations, and pushing through when motivation runs low.

But here's the thing - every challenge is teaching me something. Every problem solved makes me stronger. Every late night is an investment in tomorrow.

The messy middle is where the magic happens. What's your behind-the-scenes reality? Share below! 👇

#BehindTheScenes #EntrepreneurLife #RealTalk #BusinessReality #Authenticity #WorkInProgress #EntrepreneurStruggles #KeepGoing #RealLife`,

      success: `CLIENT WIN ALERT! 🎉

Remember Sarah, the fitness coach who was struggling to fill her programs? She came to us with 200 followers and zero online sales.

6 months later: 15K engaged followers, $50K in program sales, and a waitlist for her next launch. But here's what really matters - she's impacting lives daily.

The secret wasn't just better marketing. It was finding her authentic voice, understanding her ideal client deeply, and creating content that truly serves.

Sarah's success reminds me why I love what I do. When our clients win, their communities win too. That's the ripple effect of authentic business growth.

Celebrating all the wins, big and small! What victory are you celebrating today? 🙌

#ClientSuccess #FitnessCoach #BusinessGrowth #DigitalMarketing #OnlineSuccess #ClientWin #BusinessResults #TransformationTuesday #ProudMoment`
    };
    return captions[topic as keyof typeof captions] || '';
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-950 text-white pt-36 pb-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 tracking-tight">
            Captions That Convert. <span className="text-indigo-400">In Seconds.</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-4xl mx-auto leading-relaxed opacity-90">
            Stop wasting time staring at blank screens. CaptionCrafter generates engaging,
            scroll-stopping captions instantly — so you focus on creating, not overthinking.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <HashLink
              smooth
              to="/"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <Zap className="w-5 h-5 text-indigo-600" />
              Try Free Now
            </HashLink>
            <Link
              to="/contact"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-900 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Work With Us
            </Link>
          </div>
        </div>
      </section>

      {/* Key Benefits Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 tracking-tight">
            Why Choose CaptionCrafter?
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-8 rounded-xl bg-slate-50 border border-slate-100">
              <Clock className="w-16 h-16 text-slate-900 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Save Time</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                No more 20 minutes per caption. Generate engaging content in seconds,
                not hours. Focus on what matters most - your business.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-slate-50 border border-slate-100">
              <TrendingUp className="w-16 h-16 text-slate-900 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Stay Consistent</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Daily posting without burnout. Maintain your brand voice and
                posting schedule effortlessly with AI-powered assistance.
              </p>
            </div>
            <div className="text-center p-8 rounded-xl bg-slate-50 border border-slate-100">
              <Users className="w-16 h-16 text-slate-900 mx-auto mb-6" />
              <h3 className="text-2xl font-bold mb-4 text-slate-900">Boost Engagement</h3>
              <p className="text-gray-600 text-lg leading-relaxed">
                Captions tailored to grab attention and drive interaction.
                Turn followers into engaged community members.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Demo Section */}
      <section className="py-20 bg-slate-50 border-y border-slate-150">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-6 text-slate-900 tracking-tight">
              See CaptionCrafter in Action
            </h2>
            <p className="text-xl text-gray-600">
              Click any topic below to see the quality of captions we generate
            </p>
          </div>

          {/* Topic Selection Buttons */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            {[
              { key: 'book', label: '📚 Launching My First Book', icon: '📚' },
              { key: 'business', label: '📈 Scaling My Business', icon: '📈' },
              { key: 'motivation', label: '☀️ Morning Motivation', icon: '☀️' },
              { key: 'behind', label: '🎬 Behind The Scenes', icon: '🎬' },
              { key: 'success', label: '🎉 Client Success Story', icon: '🎉' }
            ].map((topic) => (
              <button
                key={topic.key}
                onClick={() => setSelectedTopic(topic.key)}
                className={`p-4 rounded-lg border-2 transition-all text-left ${selectedTopic === topic.key
                  ? 'border-slate-900 bg-slate-900 text-white'
                  : 'border-slate-200 bg-white hover:border-slate-400 text-slate-800'
                  }`}
              >
                <span className="text-2xl mr-3">{topic.icon}</span>
                <span className="font-semibold">{topic.label.replace(topic.icon + ' ', '')}</span>
              </button>
            ))}
          </div>

          {/* Caption Display */}
          {selectedTopic && (
            <div className="bg-white rounded-xl p-8 shadow-sm border border-slate-200">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center">
                  <MessageCircle className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="font-bold text-slate-900">Generated Caption</h3>
                  <p className="text-sm text-gray-500">Ready to copy & paste</p>
                </div>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 max-h-80 overflow-y-auto border border-slate-150">
                <pre className="whitespace-pre-wrap text-slate-800 leading-relaxed font-sans">
                  {getCaptionForTopic(selectedTopic)}
                </pre>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Premium Access Section */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <div className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 border border-white/10">
            <Lock className="w-16 h-16 text-indigo-400 mx-auto mb-6" />
            <h2 className="text-3xl font-bold mb-6 tracking-tight">
              Unlock the Full CaptionCrafter Experience
            </h2>
            <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
              Get unlimited access to our premium caption generator with advanced features
            </p>

            <div className="grid md:grid-cols-2 gap-6 mb-8 text-left max-w-2xl mx-auto">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-200">Unlimited caption generation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-200">Custom brand voice training</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-200">Industry-specific templates</span>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-200">Hashtag optimization</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-200">Content calendar integration</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                  <span className="text-gray-200">Priority support</span>
                </div>
              </div>
            </div>

            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <Crown className="w-5 h-5 text-indigo-600" />
              Get Premium Access
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 text-slate-900 tracking-tight">
            What Our Clients Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-slate-900 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "As a small business owner, writing captions was my nightmare.
                CaptionCrafter cut my posting time in half and doubled my engagement!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-900 rounded-full flex items-center justify-center text-white font-bold">
                  S
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Sarah Johnson</p>
                  <p className="text-sm text-gray-500">Fitness Coach</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-slate-900 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "The captions feel authentic and match my brand voice perfectly.
                My followers can't tell they're AI-generated!"
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-800 rounded-full flex items-center justify-center text-white font-bold">
                  M
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Mike Chen</p>
                  <p className="text-sm text-gray-500">Tech Entrepreneur</p>
                </div>
              </div>
            </div>

            <div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-slate-900 fill-current" />
                ))}
              </div>
              <p className="text-slate-700 mb-6 italic leading-relaxed">
                "Finally, a tool that understands my industry! The captions are
                professional yet engaging. Game-changer for my content strategy."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-slate-700 rounded-full flex items-center justify-center text-white font-bold">
                  L
                </div>
                <div>
                  <p className="font-semibold text-slate-900">Lisa Rodriguez</p>
                  <p className="text-sm text-gray-500">Marketing Director</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Ready to Stop Wasting Hours on Captions?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto leading-relaxed">
            Join hundreds of creators and businesses who've transformed their content strategy
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-lg font-semibold text-lg hover:bg-slate-100 transition-colors inline-flex items-center gap-2 shadow-sm"
            >
              <ArrowRight className="w-5 h-5 text-indigo-600" />
              Work With Us
            </Link>
            <Link
              to="/#contact"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-slate-950 transition-colors inline-flex items-center gap-2"
            >
              <MessageCircle className="w-5 h-5" />
              Get Started Today
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaptionCrafter;
