import React, { useState } from 'react';
import { getAIQuoteEstimate } from '../services/geminiService';
import { QuoteRequest, AIQuoteResponse, ServiceType } from '../types';

export const AIQuoteAssistant: React.FC = () => {
  const [formData, setFormData] = useState<QuoteRequest>({
    surfaceType: 'Driveway',
    squareFootage: 500,
    details: ''
  });
  const [result, setResult] = useState<AIQuoteResponse | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setResult(null);

    try {
      const response = await getAIQuoteEstimate(formData);
      setResult(response);
    } catch (err) {
      setError("Failed to generate estimate. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="ai-quote" className="py-20 bg-primary-900 text-white relative overflow-hidden">
        {/* Decorative background elements */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-accent-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          
          {/* Left: Form */}
          <div>
            <span className="text-accent-400 font-bold tracking-wider uppercase text-sm">Instant Quote</span>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Get an AI Estimate in Seconds</h2>
            <p className="text-gray-300 mb-8">
              Curious about the cost? Our AI assistant provides instant, rough estimates based on current market rates and your specific needs.
            </p>

            <form onSubmit={handleSubmit} className="bg-white/10 backdrop-blur-lg p-8 rounded-2xl border border-white/20 shadow-2xl">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Surface Type</label>
                  <select
                    className="w-full bg-white/5 border border-gray-500 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
                    value={formData.surfaceType}
                    onChange={(e) => setFormData({...formData, surfaceType: e.target.value})}
                  >
                    <option className="text-gray-900" value="Concrete Driveway">Concrete Driveway</option>
                    <option className="text-gray-900" value="House Siding (Vinyl)">House Siding (Vinyl)</option>
                    <option className="text-gray-900" value="Roof Shingles">Roof Shingles</option>
                    <option className="text-gray-900" value="Wooden Deck">Wooden Deck</option>
                    <option className="text-gray-900" value="Patio Pavers">Patio Pavers</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-200 mb-1">Approx. Area (sq ft)</label>
                  <input
                    type="number"
                    min="50"
                    max="10000"
                    className="w-full bg-white/5 border border-gray-500 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none"
                    value={formData.squareFootage}
                    onChange={(e) => setFormData({...formData, squareFootage: Number(e.target.value)})}
                  />
                </div>
                
                <div>
                    <label className="block text-sm font-medium text-gray-200 mb-1">Additional Details (Optional)</label>
                     <textarea
                        className="w-full bg-white/5 border border-gray-500 rounded-lg px-4 py-2 text-white focus:ring-2 focus:ring-accent-500 focus:border-transparent outline-none h-20 resize-none"
                        placeholder="E.g., heavy oil stains, 2-story house..."
                        value={formData.details}
                        onChange={(e) => setFormData({...formData, details: e.target.value})}
                     />
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 rounded-lg transition-all flex items-center justify-center disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? (
                    <>
                      <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Analyzing...
                    </>
                  ) : (
                    'Calculate Estimate'
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right: Results */}
          <div className="h-full flex flex-col justify-center">
            {result ? (
              <div className="bg-white text-gray-900 rounded-2xl p-8 shadow-2xl animate-fade-in-up">
                <div className="flex items-center justify-between mb-6 border-b border-gray-100 pb-4">
                  <h3 className="text-xl font-bold text-primary-900">Estimated Quote</h3>
                  <span className="bg-green-100 text-green-800 text-xs font-bold px-2 py-1 rounded-full uppercase">AI Generated</span>
                </div>
                
                <div className="space-y-6">
                  <div>
                    <p className="text-sm text-gray-500">Price Range</p>
                    <p className="text-3xl font-extrabold text-primary-900">{result.estimatedPriceRange}</p>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-sm text-gray-500">Duration</p>
                        <p className="text-lg font-semibold">{result.estimatedTime}</p>
                    </div>
                     <div>
                        <p className="text-sm text-gray-500">Method</p>
                        <p className="text-lg font-semibold">{formData.surfaceType.includes('Siding') ? 'Soft Wash' : 'Pressure Wash'}</p>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-100">
                    <p className="text-sm text-gray-500 mb-1">Pro Recommendation:</p>
                    <p className="text-gray-700 italic">"{result.recommendation}"</p>
                  </div>

                  <p className="text-xs text-gray-400 mt-4 text-center border-t pt-4">
                    {result.disclaimer}
                  </p>

                  <button className="w-full border-2 border-primary-900 text-primary-900 font-bold py-2 rounded-lg hover:bg-primary-900 hover:text-white transition-colors">
                      Book This Service
                  </button>
                </div>
              </div>
            ) : (
              <div className="hidden lg:flex items-center justify-center h-64 text-white/40 border-2 border-dashed border-white/20 rounded-2xl">
                <div className="text-center">
                    <svg className="mx-auto h-12 w-12 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <p>Result will appear here</p>
                </div>
              </div>
            )}
            
            {error && (
                <div className="mt-4 p-4 bg-red-100 text-red-700 rounded-lg">
                    {error}
                </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
