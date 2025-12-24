
import React from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import BrowseJobs from './pages/BrowseJobs';
import JobDetail from './pages/JobDetail';
import Dashboard from './pages/Dashboard';

const App: React.FC = () => {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50 flex flex-col">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/jobs" element={<BrowseJobs />} />
            <Route path="/jobs/:id" element={<JobDetail />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/talent" element={<div className="p-20 text-center">Talent directory coming soon.</div>} />
            <Route path="/post-job" element={<div className="p-20 text-center">Post job feature coming soon.</div>} />
          </Routes>
        </main>
        
        <footer className="bg-white border-t border-slate-200 pt-16 pb-8">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
              <div className="col-span-2 md:col-span-1">
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-8 h-8 bg-indigo-600 rounded flex items-center justify-center">
                    <span className="text-white font-bold">N</span>
                  </div>
                  <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                    NexusRemote
                  </span>
                </div>
                <p className="text-slate-500 text-sm leading-relaxed">
                  The world's leading network for remote work. Connect with top talent and find the projects you love.
                </p>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 mb-6">For Talent</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Find Projects</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Success Stories</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Learning Center</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 mb-6">For Clients</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Find Freelancers</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Enterprise Solutions</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Hire an Agency</a></li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-bold text-slate-900 mb-6">Support</h4>
                <ul className="space-y-4 text-sm text-slate-500">
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Help Center</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Safety & Trust</a></li>
                  <li><a href="#" className="hover:text-indigo-600 transition-colors">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
            
            <div className="pt-8 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-4">
              <p className="text-slate-400 text-sm">
                © {new Date().getFullYear()} NexusRemote Global Inc. All rights reserved.
              </p>
              <div className="flex space-x-6">
                <a href="#" className="text-slate-400 hover:text-indigo-600"><span className="sr-only">Twitter</span> 𝕏</a>
                <a href="#" className="text-slate-400 hover:text-indigo-600"><span className="sr-only">GitHub</span> 🐙</a>
                <a href="#" className="text-slate-400 hover:text-indigo-600"><span className="sr-only">LinkedIn</span> 🔗</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </Router>
  );
};

export default App;
