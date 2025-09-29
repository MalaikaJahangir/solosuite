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
    { name: 'Educational', percentage: 40, color: 'bg-blue-500' },
    { name: 'Behind-the-Scenes', percentage: 25, color: 'bg-purple-500' },
    { name: 'User-Generated', percentage: 20, color: 'bg-green-500' },
    { name: 'Promotional', percentage: 15, color: 'bg-orange-500' }
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
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-pink-50 to-purple-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6">
              Instagram Growth
              <span className="block bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                Strategy That Works
              </span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-12 max-w-4xl mx-auto leading-relaxed">
              From 1.2K to 67K followers in 6 months. Here's the exact strategy and data-driven approach we used to achieve viral growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link
                to="/#contact"
                className="bg-gradient-to-r from-pink-600 to-purple-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2"
              >
                <Zap className="w-5 h-5" />
                Get This Strategy
              </Link>
              <button className="border border-gray-300 text-gray-700 px-8 py-4 rounded-full text-lg font-medium hover:border-gray-400 transition-colors flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                View Full Case Study
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Growth Metrics */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Results</span>
            </h2>
            <p className="text-xl text-gray-600">Data-driven growth that speaks for itself</p>
          </div>

          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <div className="bg-gradient-to-br from-pink-50 to-pink-100 p-8 rounded-3xl text-center">
              <div className="text-4xl font-bold text-pink-600 mb-2">5,500%</div>
              <div className="text-gray-700 font-medium">Follower Growth</div>
              <div className="text-sm text-gray-500 mt-1">1.2K → 67K in 6 months</div>
            </div>
            <div className="bg-gradient-to-br from-purple-50 to-purple-100 p-8 rounded-3xl text-center">
              <div className="text-4xl font-bold text-purple-600 mb-2">490%</div>
              <div className="text-gray-700 font-medium">Engagement Rate</div>
              <div className="text-sm text-gray-500 mt-1">2.1% → 12.4% average</div>
            </div>
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-3xl text-center">
              <div className="text-4xl font-bold text-blue-600 mb-2">7M+</div>
              <div className="text-gray-700 font-medium">Total Reach</div>
              <div className="text-sm text-gray-500 mt-1">Peak month performance</div>
            </div>
            <div className="bg-gradient-to-br from-green-50 to-green-100 p-8 rounded-3xl text-center">
              <div className="text-4xl font-bold text-green-600 mb-2">15</div>
              <div className="text-gray-700 font-medium">Viral Posts</div>
              <div className="text-sm text-gray-500 mt-1">100K+ views each</div>
            </div>
          </div>

          {/* Growth Charts */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Follower Growth Chart */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Users className="w-6 h-6 text-pink-600" />
                Follower Growth
              </h3>
              <div className="space-y-4">
                {strategyData.followers.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium w-12">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-pink-500 to-purple-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(data.count / 67300) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-gray-900 font-bold w-16 text-right">{data.count.toLocaleString()}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Rate Chart */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-600" />
                Engagement Rate
              </h3>
              <div className="space-y-4">
                {strategyData.engagement.map((data, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <span className="text-gray-600 font-medium w-12">{data.month}</span>
                    <div className="flex-1 mx-4">
                      <div className="bg-gray-200 rounded-full h-3">
                        <div
                          className="bg-gradient-to-r from-purple-500 to-pink-500 h-3 rounded-full transition-all duration-1000"
                          style={{ width: `${(data.rate / 12.4) * 100}%` }}
                        ></div>
                      </div>
                    </div>
                    <span className="text-gray-900 font-bold w-12 text-right">{data.rate}%</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Strategy Breakdown */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              The <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Strategy</span>
            </h2>
            <p className="text-xl text-gray-600">Proven tactics that drove explosive growth</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content Pillars */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-pink-600" />
                Content Pillars
              </h3>
              <div className="space-y-4">
                {contentPillars.map((pillar, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 font-medium">{pillar.name}</span>
                      <span className="text-gray-900 font-bold">{pillar.percentage}%</span>
                    </div>
                    <div className="bg-gray-200 rounded-full h-2">
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
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-purple-600" />
                Optimal Timing
              </h3>
              <div className="space-y-3">
                {bestTimes.map((time, index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-gray-50 rounded-xl">
                    <div>
                      <div className="font-medium text-gray-900">{time.day}</div>
                      <div className="text-sm text-gray-600">{time.time}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-bold text-green-600">{time.engagement}</div>
                      <div className="text-xs text-gray-500">avg. engagement</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Key Tactics */}
            <div className="bg-white p-8 rounded-3xl shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-600" />
                Growth Tactics
              </h3>
              <div className="space-y-4">
                <div className="p-4 bg-blue-50 rounded-xl">
                  <h4 className="font-semibold text-blue-900 mb-2">Hashtag Strategy</h4>
                  <p className="text-blue-700 text-sm">Mix of trending, niche, and branded hashtags (15-20 per post)</p>
                </div>
                <div className="p-4 bg-purple-50 rounded-xl">
                  <h4 className="font-semibold text-purple-900 mb-2">Story Engagement</h4>
                  <p className="text-purple-700 text-sm">Interactive polls, Q&As, and behind-the-scenes content</p>
                </div>
                <div className="p-4 bg-pink-50 rounded-xl">
                  <h4 className="font-semibold text-pink-900 mb-2">Community Building</h4>
                  <p className="text-pink-700 text-sm">Consistent engagement with followers and industry accounts</p>
                </div>
                <div className="p-4 bg-green-50 rounded-xl">
                  <h4 className="font-semibold text-green-900 mb-2">Trend Leveraging</h4>
                  <p className="text-green-700 text-sm">Quick adaptation to trending audio and formats</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Implementation Timeline */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Implementation <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">Timeline</span>
            </h2>
            <p className="text-xl text-gray-600">How we executed this strategy step by step</p>
          </div>

          <div className="space-y-8">
            {[
              {
                phase: "Week 1-2",
                title: "Audit & Strategy Development",
                description: "Comprehensive account audit, competitor analysis, and content strategy development",
                color: "from-blue-500 to-blue-600"
              },
              {
                phase: "Week 3-4",
                title: "Content Creation & Optimization",
                description: "Profile optimization, content calendar creation, and initial content batch production",
                color: "from-purple-500 to-purple-600"
              },
              {
                phase: "Month 2-3",
                title: "Consistent Execution",
                description: "Daily posting, story engagement, hashtag optimization, and community building",
                color: "from-pink-500 to-pink-600"
              },
              {
                phase: "Month 4-6",
                title: "Scale & Optimize",
                description: "Data analysis, strategy refinement, viral content creation, and growth acceleration",
                color: "from-green-500 to-green-600"
              }
            ].map((phase, index) => (
              <div key={index} className="flex items-start gap-6">
                <div className={`w-16 h-16 bg-gradient-to-br ${phase.color} rounded-2xl flex items-center justify-center text-white font-bold flex-shrink-0`}>
                  {index + 1}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-4 mb-2">
                    <h3 className="text-xl font-bold text-gray-900">{phase.title}</h3>
                    <span className="text-sm font-medium text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{phase.phase}</span>
                  </div>
                  <p className="text-gray-600 leading-relaxed">{phase.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-pink-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Replicate This Success?
          </h2>
          <p className="text-xl text-pink-100 mb-12 max-w-2xl mx-auto">
            Get the exact strategy, templates, and guidance that drove 5,500% follower growth and 7M+ reach.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/#contact"
              className="bg-white text-pink-600 px-8 py-4 rounded-full text-lg font-semibold hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center gap-2 justify-center"
            >
              <TrendingUp className="w-5 h-5" />
              Get This Strategy
            </Link>
            <button className="border-2 border-white text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-white hover:text-pink-600 transition-all duration-300 flex items-center gap-2 justify-center">
              <MessageCircle className="w-5 h-5" />
              Schedule Consultation
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InstagramStrategy;