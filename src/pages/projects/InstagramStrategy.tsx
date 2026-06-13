import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { TrendingUp, Users, Heart, MessageCircle, Target, Calendar, BarChart3, Zap } from 'lucide-react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

const InstagramStrategy = () => {

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  const strategyData = {
    engagement: [
      { month: 'Jan', rate: 2.1 },
      { month: 'Feb', rate: 3.2 },
      { month: 'Mar', rate: 4.8 },
      { month: 'Apr', rate: 6.5 },
      { month: 'May', rate: 8.2 },
      { month: 'Jun', rate: 12.4 }
    ],
    followers: [
      { month: 'Jan', count: 1200 },
      { month: 'Feb', count: 2800 },
      { month: 'Mar', count: 5600 },
      { month: 'Apr', count: 12400 },
      { month: 'May', count: 28900 },
      { month: 'Jun', count: 67300 }
    ]
  };

  const contentPillars = [
    { name: 'Educational', percentage: 40, color: 'bg-slate-900' },
    { name: 'Behind-the-Scenes', percentage: 25, color: 'bg-slate-700' },
    { name: 'User-Generated', percentage: 20, color: 'bg-slate-500' },
    { name: 'Promotional', percentage: 15, color: 'bg-slate-400' }
  ];

  const bestTimes = [
    { day: 'Monday', time: '11 AM - 1 PM', engagement: '8.2%' },
    { day: 'Tuesday', time: '2 PM - 4 PM', engagement: '9.1%' },
    { day: 'Wednesday', time: '11 AM - 1 PM', engagement: '7.8%' },
    { day: 'Thursday', time: '2 PM - 4 PM', engagement: '8.9%' },
    { day: 'Friday', time: '1 PM - 3 PM', engagement: '9.5%' },
    { day: 'Saturday', time: '10 AM - 12 PM', engagement: '10.2%' },
    { day: 'Sunday', time: '12 PM - 2 PM', engagement: '11.4%' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section */}
      <section className="pt-36 pb-20 px-4 sm:px-6 lg:px-8 bg-slate-50 border-b border-slate-150">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold text-slate-900 mb-6 tracking-tight">
              Instagram Growth
              <span className="block bg-gradient-to-r from-slate-900 via-slate-800 to-indigo-950 bg-clip-text text-transparent">
                Strategy That Works
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              From 1.2K to 67K followers in 6 months. Here's the exact strategy and data-driven approach we used to achieve viral growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/contact"
                className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-800 transition-all duration-300 shadow-sm flex items-center gap-2"
              >
                <Zap className="w-5 h-5 text-indigo-400" />
                Get This Strategy
              </Link>
              <button className="border border-slate-300 text-slate-700 px-8 py-4 rounded-full text-lg font-medium hover:border-slate-400 hover:bg-white transition-colors flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                View Full Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              The <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600">Data-driven growth that speaks for itself</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-6 mb-16">
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-center">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">5,500%</div>
              <div className="text-slate-800 font-semibold">Follower Growth</div>
              <div className="text-sm text-gray-500 mt-1">1.2K → 67K in 6 months</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-center">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">490%</div>
              <div className="text-slate-800 font-semibold">Engagement Rate</div>
              <div className="text-sm text-gray-500 mt-1">2.1% → 12.4% average</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-center">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">7M+</div>
              <div className="text-slate-800 font-semibold">Total Reach</div>
              <div className="text-sm text-gray-500 mt-1">Peak month performance</div>
            </div>
            <div className="bg-slate-50 border border-slate-100 p-8 rounded-3xl text-center">
              <div className="text-4xl font-extrabold text-slate-900 mb-2">15</div>
              <div className="text-slate-800 font-semibold">Viral Posts</div>
              <div className="text-sm text-gray-500 mt-1">100K+ views each</div>
            </div>
          </div>

          {/* Growth Charts */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Follower Growth Chart */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 tracking-tight">
                <Users className="w-6 h-6 text-slate-900" />
                Follower Growth
              </h3>
              <div className="space-y-4">
                {strategyData.followers.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium w-12">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-slate-100 rounded-full h-3">
                        <div
                          className="bg-slate-900 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(data.count / 67300) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-slate-900 font-bold w-16 text-right">{data.count.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Rate Chart */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 tracking-tight">
                <Heart className="w-6 h-6 text-slate-900" />
                Engagement Rate
              </h3>
              <div className="space-y-4">
                {strategyData.engagement.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium w-12">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-slate-100 rounded-full h-3">
                        <div
                          className="bg-slate-700 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(data.rate / 12.4) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-slate-900 font-bold w-12 text-right">{data.rate}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Breakdown */}
      <section className="py-20 bg-slate-50 border-y border-slate-150">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              The <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Strategy</span>
            </h2>
            <p className="text-xl text-gray-600">Proven tactics that drove explosive growth</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content Pillars */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 tracking-tight">
                <Target className="w-6 h-6 text-slate-900" />
                Content Pillars
              </h3>
              <div className="space-y-4">
                {contentPillars.map((pillar, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{pillar.name}</span>
                      <span className="text-slate-900 font-bold">{pillar.percentage}%</span>
                    </div>
                    <div className="bg-slate-100 rounded-full h-2">
                      <div
                        className={`${pillar.color} h-2 rounded-full transition-all duration-1000`}
                        style={{ width: `${pillar.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Posting Schedule */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 tracking-tight">
                <Calendar className="w-6 h-6 text-slate-900" />
                Optimal Timing
              </h3>
              <div className="space-y-3">
                {bestTimes.map((time, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-slate-50 rounded-xl border border-slate-100">
                    <div>
                      <div className="font-semibold text-slate-900">{time.day}</div>
                      <div className="text-sm text-gray-600">{time.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-slate-900">{time.engagement}</div>
                      <div className="text-xs text-gray-500">avg. engagement</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Tactics */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <h3 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2 tracking-tight">
                <TrendingUp className="w-6 h-6 text-slate-900" />
                Growth Tactics
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Hashtag Strategy</h4>
                  <p className="text-gray-600 text-sm">Mix of trending, niche, and branded hashtags (15-20 per post)</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Story Engagement</h4>
                  <p className="text-gray-600 text-sm">Interactive polls, Q&As, and behind-the-scenes content</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Community Building</h4>
                  <p className="text-gray-600 text-sm">Consistent engagement with followers and industry accounts</p>
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <h4 className="font-semibold text-slate-900 mb-1">Trend Leveraging</h4>
                  <p className="text-gray-600 text-sm">Quick adaptation to trending audio and formats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-900 mb-4 tracking-tight">
              Implementation <span className="bg-gradient-to-r from-slate-900 to-slate-700 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600">How we executed this strategy step by step</p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Week 1-2",
                title: "Audit & Strategy Development",
                description: "Comprehensive account audit, competitor analysis, and content strategy development",
                color: "bg-slate-900"
              },
              {
                phase: "Week 3-4",
                title: "Content Creation & Optimization",
                description: "Profile optimization, content calendar creation, and initial content batch production",
                color: "bg-slate-800"
              },
              {
                phase: "Month 2-3",
                title: "Consistent Execution",
                description: "Daily posting, story engagement, hashtag optimization, and community building",
                color: "bg-slate-700"
              },
              {
                phase: "Month 4-6",
                title: "Scale & Optimize",
                description: "Data analysis, strategy refinement, viral content creation, and growth acceleration",
                color: "bg-slate-600"
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className={`w-16 h-16 ${phase.color} rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0 shadow-sm`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-slate-900">{phase.title}</h3>
                    <span className="text-sm font-medium text-slate-700 bg-slate-100 px-3 py-1 rounded-full">{phase.phase}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-slate-950 to-slate-900 text-white border-t border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6 tracking-tight">
            Ready to Replicate This Success?
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto leading-relaxed">
            Get the exact strategy, templates, and guidance that drove 5,500% follower growth and 7M+ reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-semibold hover:bg-slate-100 transition-all duration-300 shadow-sm flex items-center gap-2 justify-center"
            >
              <TrendingUp className="w-5 h-5 text-indigo-600" />
              Get This Strategy
            </Link>
            <Link
              to="/contact"
              className="border-2 border-white/80 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-slate-950 transition-all duration-300 flex items-center gap-2 justify-center"
            >
              <MessageCircle className="w-5 h-5" />
              Schedule Consultation
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstagramStrategy;
