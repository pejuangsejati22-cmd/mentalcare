import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Import all the page components
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
// Add more imports based on your project's structure

const App: React.FC = () => {
    const [currentPage, setCurrentPage] = useState('home'); // Initialize the current page state

    const renderPage = () => {
        switch (currentPage) {
            case 'home':
                return <Home />;
            case 'about':
                return <About />;
            case 'contact':
                return <Contact />;
            case 'services':
                return <Services />;
            // Add more cases for other pages
            default:
                return <Home />;
        }
    };

    return (
        <Router>
            <div>
                <header>
                    {/* Navigation or header component */}
                </header>
                <main>
                    <Switch>
                        <Route path="/" exact>
                            {renderPage()}
                        </Route>
                        <Route path="/about" exact>
                            <About />
                        </Route>
                        <Route path="/contact" exact>
                            <Contact />
                        </Route>
                        <Route path="/services" exact>
                            <Services />
                        </Route>
                        {/* Add definitions for other routes */}
                    </Switch>
                </main>
                <footer>
                    {/* Footer component */}
                </footer>
            </div>
        </Router>
    );
};

export default App;
