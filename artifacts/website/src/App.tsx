import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Toaster } from '@/components/ui/toaster';
import { TooltipProvider } from '@/components/ui/tooltip';
import { Route, Switch, Router as WouterRouter } from 'wouter';

// Pages
import Home from '@/pages/home';
import Services from '@/pages/services';
import ServiceDetail from '@/pages/service-detail';
import About from '@/pages/about';
import Projects from '@/pages/projects';
import Contact from '@/pages/contact';
import Impressum from '@/pages/impressum';
import Privacy from '@/pages/privacy';
import NotFound from '@/pages/not-found';

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/leistungen" component={Services} />
      <Route path="/leistungen/:slug" component={ServiceDetail} />
      <Route path="/ueber-mich" component={About} />
      <Route path="/projekte" component={Projects} />
      <Route path="/kontakt" component={Contact} />
      <Route path="/impressum" component={Impressum} />
      <Route path="/datenschutz" component={Privacy} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, '')}>
          <Router />
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
